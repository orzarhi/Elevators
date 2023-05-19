import { DependencyList, RefObject, useEffect } from "react"

export const useCssVariable = (ref: RefObject<HTMLElement> ,name:string, cb: () => string, deps:DependencyList) => {
    useEffect(() => {
        ref.current?.style.setProperty?.(`--${name}`, cb());
    }, deps);
}