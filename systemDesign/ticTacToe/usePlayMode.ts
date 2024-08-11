import {useState} from "react";

export type Difficulty = 'easy' | 'medium' | 'hard' | null

export const usePlayMode = () => {
    const [isVsAI, setIsVsAI] = useState(true)
    const [difficulty, setDifficulty] = useState<Difficulty>('easy')

    const switchMode = () => {
        setIsVsAI(!isVsAI)
    }

    const switchDifficulty = (newDifficulty: string) => {
        if (difficulty === newDifficulty) return // if same difficulty, do nothing
        setDifficulty(newDifficulty as Difficulty)
    }

    return {isVsAI, difficulty, switchMode, switchDifficulty}
}