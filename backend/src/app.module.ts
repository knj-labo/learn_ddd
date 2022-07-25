import { Module } from '@nestjs/common';

import { PrismaService } from './database/prisma-service';
import { MemberController } from './presentation/member/member.controller';
import { AllMembersQueryService } from './infrastructure/database/all-members-repository';

@Module({
  imports: [],
  controllers: [MemberController],
  providers: [PrismaService, AllMembersQueryService],
})
export class AppModule {}
