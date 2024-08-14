type MyOmit<T, K extends keyof any> = { // extends keyof any = any valid object keys
    /** property in keys of type T, if the property is a subtype of K, return never, else return property */
    [P in keyof T as P extends K ? never : P]: T[P]
}

type Index = {
    a: string
    b: number
    c: boolean
}
type A = MyOmit<Index, 'a' | 'b'> // {c: boolean}
type B = MyOmit<Index, 'c'> // {a: string, b: number}
type C = MyOmit<Index, 'c' | 'd'>  // {a: string, b: number}