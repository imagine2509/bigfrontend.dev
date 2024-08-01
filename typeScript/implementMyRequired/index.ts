// all properties are optional
type Foo = {
    a?: string
    b?: number
    c?: boolean
}

type MyRequired<T> ={ // initialize generic type of object
    /** then we create a type for key in object which is
     * a key of Foo with removed ? using - mapping modifier
     * then we create a type for value which is
     * a same type from passed type (Foo in that case) */
    [P in keyof T]-?: T[P]
}

const a: MyRequired<Foo> = {}
// Error
const b: MyRequired<Foo> = {
    a: 'BFE.dev'
}
// Error
const c: MyRequired<Foo> = {
    b: 123
}
// Error
const d: MyRequired<Foo> = {
    b: 123,
    c: true
}
// Error
const e: MyRequired<Foo> = {
    a: 'BFE.dev',
    b: 123,
    c: true
}
// valid