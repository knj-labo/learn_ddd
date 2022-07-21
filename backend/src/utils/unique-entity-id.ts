import uuid from 'uuid';
import { Identifier } from '@utils/Identifier'

export class UniqueEntityID extends Identifier<string>{
  constructor (id?: string) {
    super(id ? id : uuid())
  }
}