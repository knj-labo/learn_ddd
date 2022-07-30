import { IQueryService } from "../../utils/i-query-service";
import { Member } from "./member";

export interface IMemberQueryService extends IQueryService<Member> {
  findList(): Promise<Member[]>
}