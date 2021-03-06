import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from '../services/auth.service';
import { AuthController } from '../controllers/auth.controller';

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
    providers: [AuthService, JwtGuard, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService,JwtStrategy],
  })
  export class AuthModule {}