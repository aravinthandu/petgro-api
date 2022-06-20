import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import * as bcrypt from 'bcrypt';
import { from, Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { PetDetailsEntity } from 'src/models/petDetails.entity';

// import { UserDetailsEntity } from '../models/user.entity';
// import { User } from '../models/user.class';
import { PetDetails } from 'src/models/petDetails.class';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class PetDetail {
  constructor(
    @InjectRepository(PetDetailsEntity)
    private readonly petDetailRepo: Repository<PetDetailsEntity>,
    // private jwtService: JwtService,
  ) {}


  registerAccount(petData: PetDetails): Observable<PetDetails> {
            return from(
              this.petDetailRepo.save(petData)
            )
}

}
