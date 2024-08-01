/** Partial<T> returns a type which represents all subsets of type T.

 Please implement MyPartial<T> by yourself. */

type Foo = {
    a: string
    b: number
    c: boolean
}

type MyPartial<T> = { // we initialize generic type with object
    /** then we create a key which is in array of keys of T
     * and set the type of value to value of the passed type */
    [P in keyof T]?: T[P]
}

// below are all valid
const a: MyPartial<Foo> = {}
const b: MyPartial<Foo> = {
    a: 'BFE.dev'
}
const c: MyPartial<Foo> = {
    b: 123
}
const d: MyPartial<Foo> = {
    b: 123,
    c: true
}
const e: MyPartial<Foo> = {
    a: 'BFE.dev',
    b: 123,
    c: true
}