import { Member} from "./member";

export interface IMemberRepository {
  getAll(): Promise<Member[]>;
}