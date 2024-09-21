type MyNonNullable<T> = T & {}

type Foo = 'a' | 'b' | null | undefined
type A = MyNonNullable<Foo> // 'a' | 'b'