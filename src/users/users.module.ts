import {Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {PrismaModule} from '../../prisma/prisma.module';
import { UserService } from './users.service';

@Module({
    imports: [PrismaModule],
    controllers: [UsersController],
    providers: [UserService]
})

export class UsersModule {}
