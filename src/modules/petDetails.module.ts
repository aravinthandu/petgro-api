import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetDetail } from 'src/services/petDetail.service';
import { PetDetailsController } from 'src/controllers/petDetails.controller';
import { PetDetailsEntity } from 'src/models/petDetails.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([PetDetailsEntity])
  ],
  providers: [PetDetail],
  controllers: [PetDetailsController]
})
export class PetDetailModule {}
