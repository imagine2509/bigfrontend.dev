import {MouseEvent, useState} from "react";
import {usePlayMode} from "./usePlayMode";

export const useGame = () => {
    const {isVsAI, difficulty} = usePlayMode()
    /** 1) The first thing is to add event listeners on each square to handle the square fill and some state to see
     who should do the turn.
     2) We need to define win/lose and draw conditions and how to set points for each side.
     */
    /** first we'll create a states to represent each player's checked  */
    const checkedByPlayerX = new Set<number>([])
    const checkedByPlayerO = new Set<number>([])
    const [isPlayersXTurn, setIsPlayersXTurn] = useState(true)

    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ] // there's all possible win conditions

    /** implement reset function */
    const reset = () => {
        checkedByPlayerX.clear()
        checkedByPlayerO.clear()
        setIsPlayersXTurn(true)
        Array.from(document.querySelectorAll('.cell')).forEach((cell) => {
            cell.textContent = ''
        })
    }

    /** 4) Then we need to define if player chosen to play against AI and only in that case activate next steps. */
    const easyModeAi = () => {
        /** let's assume we have no option to select to play as O, if it is, it's just another branch */
        if (!isPlayersXTurn && !isVsAI) {
            const randomId = Math.floor(Math.random() * 9)
            const cell = document.getElementById(String(randomId))
            if (cell && !checkedByPlayerX.has(Number(randomId)) && !checkedByPlayerO.has(Number(randomId))) {
                cell.textContent = 'O'
                checkedByPlayerO.add(Number(randomId))
                setIsPlayersXTurn(false)
            }
        }
    }

    const mediumModeAi = () => {
        /** here we need to implement an algorithm where we iterate over each winCombo
         * and fill the third one if checkedByPlayerX.has 2/3 items
         * else we'll call easyModeAi()*/
    }

    const hardModeAi = () => {
        /** here we need to implement this algorithm
         * https://www.freecodecamp.org/news/how-to-make-your-tic-tac-toe-game-unbeatable-by-using-the-minimax-algorithm-9d690bad4b37/ */
    }

    const onClickHandler = (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && e.target.matches('.cell')) {
         const id = e.target.id
         if (checkedByPlayerX.has(Number(id)) || checkedByPlayerO.has(Number(id))) {
             return // if the square is already checked, do nothing
         }
         if (isPlayersXTurn) {
             e.target.textContent = 'X'
             checkedByPlayerX.add(Number(id))
             setIsPlayersXTurn(false)
         }
         else if (!isVsAI){
             e.target.textContent = 'O'
             checkedByPlayerO.add(Number(id))
             setIsPlayersXTurn(true)
         }
         else {
             switch (difficulty) {
                 case 'easy':
                     easyModeAi();
                     break
                 case 'medium':
                     mediumModeAi()
                     break
                 case 'hard':
                     hardModeAi()
                     break
                 default:
                     console.error('Invalid difficulty level')
                     break
             }
         }
        }

        /** if win/lose/draw conditions are met, we need to finish the game and return some kind of message */
        winCombos.forEach((combo) => {
            if (combo.every((index) => checkedByPlayerX.has(index))) {
                alert('Player X wins!')
                reset()
                return
            }
            if (combo.every((index) => checkedByPlayerO.has(index))) {
                alert('Player O wins!')
                reset()
                return
            }
            if (checkedByPlayerX.size + checkedByPlayerO.size === 9) {
                alert('It\'s a draw!')
                reset()
                return
            }
        })
    }

    return {onClickHandler}

}