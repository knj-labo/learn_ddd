export interface IRead<T> {
  find(id: string): Promise<T>;
  findList(item: T): Promise<T[]>;
}