// @see https://dnlytras.com/blog/nominal-types/
type Nominal<T, U extends string> = T & { __brand: U };
