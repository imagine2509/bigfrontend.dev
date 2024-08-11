import React from "react";
import {usePlayMode} from "./usePlayMode";
import {useGame} from "./useGame";

/** Panel to choose play mode */
const ModeOptionsPanel = () => {
    const {difficulty, isVsAI, switchDifficulty, switchMode} = usePlayMode()

    return (
        <div style={{display: 'flex', gap: '10px'}}>
            <select value={difficulty} onChange={(event) => switchDifficulty(event.target.value)}>
                <option value={'easy'}>easy</option>
                <option value={'medium'}>medium</option>
                <option value={'hard'}>hard</option>
            </select>
            <button onClick={switchMode}>
                <p>{isVsAI ? 'click to play vs friend' : 'click to play vs AI'}</p>
                </button>
        </div>
    )
}

const PlayField = () => {
    const {onClickHandler} = useGame()
    return (
        <table>
            <tbody onClick={onClickHandler}>
            <tr>
                <td className='cell' id='0'></td>
                <td className='cell' id='1'></td>
                <td className='cell' id='2'></td>
            </tr>
            <tr>
                <td className='cell' id='3'></td>
                <td className='cell' id='4'></td>
                <td className='cell' id='5'></td>
            </tr>
            <tr>
                <td className='cell' id='6'></td>
                <td className='cell' id='7'></td>
                <td className='cell' id='8'></td>
            </tr>
            </tbody>
        </table>
    )
}