
type MyPick<T, K extends keyof T> = { // we need to make a union which is subtype of T keys, 'a' | 'b' | 'c'
    [P in K]: T[P] // property should be in provided subtype, then we can safely use T[P} as type value
}

// @ts-ignore
type Foo = {
    a: string
    b: number
    c: boolean
}
type A = MyPick<Foo, 'a' | 'b'> // {a: string, b: number}
type B = MyPick<Foo, 'c'> // {c: boolean}
type C = MyPick<Foo, 'd'> // Error