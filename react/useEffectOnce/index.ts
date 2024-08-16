import {EffectCallback, useEffect} from 'react'

export function useEffectOnce(effect: EffectCallback) {
    useEffect(() => effect(), []) // empty deps array will make it work once
}