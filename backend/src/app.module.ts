import { Module } from '@nestjs/common';

import { PrismaService } from './database/prisma.service';
import { MemberController } from './presentation/member/member.controller';
import { MembersRepository } from './infrastructure/database/members.repository';
import { FindAllMembersUseCase } from './usecase/member/find-all.usecase';
import { TaskController } from "./presentation/task/task.controller";
import { TaskRepository } from "./infrastructure/database/task.repository";
import { FindAllTasksUsecase } from "./usecase/task/find-all.usecase";
import { MemberQueryService } from "./infrastructure/database/member.query-service";
import { TaskQueryService } from "./infrastructure/database/task.query-service";

@Module({
  imports: [],
  controllers: [MemberController, TaskController],
  providers: [PrismaService, FindAllMembersUseCase, MembersRepository, FindAllTasksUsecase, TaskRepository, MemberQueryService, TaskQueryService],
})
export class AppModule {}
