import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [PrismaModule, UsersModule],
  providers: [AppService],
})
export class AppModule {}
