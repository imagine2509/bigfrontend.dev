/** Exclude<T, K> returns a type by removing from T the union members that are assignable to K.

 Please implement MyExclude<T, K> by yourself. */

type MyExclude<T, E> = T extends E ? never : T
// T = 'a' | 'b' | 'c'
// if T is a property of E return never
// else leave it

type FooExc = 'a' | 'b' | 'c'
type Aex = MyExclude<FooExc, 'a'> // 'b' | 'c'
type Bex = MyExclude<FooExc, 'c'> // 'a' | 'b
type Cex = MyExclude<FooExc, 'c' | 'd'>  // 'a' | 'b'
type Dex = MyExclude<FooExc, 'a' | 'b' | 'c'>  // never

const aex: Aex = 'a'