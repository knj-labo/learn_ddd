import { Module } from '@nestjs/common';

import { PrismaService } from './database/prisma.service';
import { MemberController } from './presentation/member/member.controller';
import { MembersRepository } from './infrastructure/database/members.repository';
import { MembersUsecase } from './usecase/member/member.usecase';
import { TaskController } from "./presentation/task/task.controller";
import { TaskRepository } from "./infrastructure/database/task.repository";
import { TaskUsecase } from "./usecase/task/task.usecase";
import { MemberQueryService } from "./infrastructure/database/member.query-service";
import { TaskQueryService } from "./infrastructure/database/task.query-service";

@Module({
  imports: [],
  controllers: [MemberController, TaskController],
  providers: [PrismaService, MembersUsecase, MembersRepository, TaskUsecase, TaskRepository, MemberQueryService, TaskQueryService],
})
export class AppModule {}
