import { Module } from '@nestjs/common';

import { PrismaService } from './database/prisma.service';
import { MemberController } from './presentation/member/member.controller';
import { MembersRepository } from './infrastructure/database/members.repository';
import { MembersUsecase } from './usecase/member/member.usecase';

@Module({
  imports: [],
  controllers: [MemberController],
  providers: [PrismaService, MembersUsecase, MembersRepository],
})
export class AppModule {}
