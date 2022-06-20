import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedModule } from './modules/feed.module';
import { UserModule } from './modules/user.module';
import { PetDetailModule } from './modules/petDetails.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'petgro.ccivhpsa0dgt.us-east-2.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'postgres1234',
      database: 'petgro',
      autoLoadEntities: true,
      synchronize: true,
    }),
    FeedModule,
    UserModule,
    PetDetailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
