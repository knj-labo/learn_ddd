import { Module } from '@nestjs/common';

import { PrismaService } from './database/prisma-service';
import { MemberController } from './presentation/member/member.controller';
import { GetAllMembersRepository } from './infrastructure/database/get-all-members.repository';
import { GetAllMembersUsecase } from "./usecase/member/get-all-members.usecase";

@Module({
  imports: [],
  controllers: [MemberController],
  providers: [PrismaService, GetAllMembersUsecase, GetAllMembersRepository],
})
export class AppModule {}
