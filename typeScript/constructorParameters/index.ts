type MyConstructorParameters<T extends abstract new (...args) => any> =
    T extends abstract new (...args: infer Arg) => any ? Arg : never

class Foo {
    constructor (a: string, b: number, c: boolean) {}
}
type C = MyConstructorParameters<typeof Foo>