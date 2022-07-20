import { GeneratedID } from './generated-id'
import { NoneID } from './none-id'

/**
 * @see https://zenn.dev/zamax/articles/bf33ba94d2b539
 */
export type ID = GeneratedID | NoneID;
