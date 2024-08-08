/** Readonly<T> returns a type that sets all properties of T to readonly.

 Please implement MyReadonly<T> by yourself. */

type MyReadonly<T> = {
    readonly [P in keyof T]: T[P] // we set all T values as readonly
}

type Foo = {
    a: string
}

const a:Foo = {
    a: 'BFE.dev',
}
a.a = 'bigfrontend.dev'
// OK
const b:MyReadonly<Foo> = {
    a: 'BFE.dev'
}
b.a = 'bigfrontend.dev'
// Error