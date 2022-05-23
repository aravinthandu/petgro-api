import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { UserDetails } from 'src/models/user.interface';
import { UserDetailsEntity } from 'src/models/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class SignUpService {
  constructor(
    @InjectRepository(UserDetailsEntity)
    private readonly userDetailsRepository: Repository<UserDetailsEntity>,
  ) {}

  createPost(UserDetails: UserDetails): Observable<UserDetails> {
    return from(this.userDetailsRepository.save(UserDetails));
  }

  findAllPosts(): Observable<UserDetails[]>{
      return from(this.userDetailsRepository.find())
  }

updatePost(id:number,UserDetails:UserDetails):Observable<UpdateResult>{
    return from(this.userDetailsRepository.update(id,UserDetails));
}

deletePost(id:number):Observable<DeleteResult>{
  return from(this.userDetailsRepository.delete(id));
}

}
