import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TaskRepository {
  constructor(private readonly prismaClient: PrismaService) {}
}
