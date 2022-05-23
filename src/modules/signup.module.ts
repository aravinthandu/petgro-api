import { Module } from '@nestjs/common';
import { SignUpService } from 'src/services/signup.service';
import { SignUpController } from 'src/controllers/signup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDetailsEntity } from 'src/models/user.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserDetailsEntity])
  ],
  providers: [SignUpService],
  controllers: [SignUpController]
})
export class SignUpModule {}
