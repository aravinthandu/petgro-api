import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';
import { UserDetailsEntity } from '../models/user.entity';
import { JwtGuard } from '../guards/jwt.guard';
import { JwtStrategy } from '../guards/jwt.strategy';

@Module({
    imports: [
      JwtModule.registerAsync({
        useFactory: () => ({
          secret: "jwtsecret",
          signOptions: { expiresIn: '3600s' },
        }),
      }),
      TypeOrmModule.forFeature([UserDetailsEntity]),
    ],
    providers: [UserService, JwtGuard, JwtStrategy],
    controllers: [UserController],
    exports: [UserService,JwtStrategy],
  })
  export class UserModule {}