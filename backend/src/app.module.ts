import { Module } from '@nestjs/common';

import { PrismaService } from './database/prisma-service';
import { MemberService } from './domain/member/member-service';
import { MemberController } from './presentation/member/member-controller';
import { AllMembersQueryService } from './infrastructure/database/all-members-repository';

@Module({
  imports: [],
  controllers: [MemberController],
  providers: [MemberService, PrismaService, AllMembersQueryService],
})
export class AppModule {}
