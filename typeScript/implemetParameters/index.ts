type MyParameters<T> = T extends (...args: infer P) => any ? P : never


type Foo = (a: string, b: number, c: boolean) => string
type A = MyParameters<Foo> // [a:string, b: number, c:boolean]
type B = A[0] // string
type C = MyParameters<{a: string}> // Error