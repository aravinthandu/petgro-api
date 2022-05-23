import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    Request,
    Res,
    UseGuards,
  } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserDetails } from 'src/models/user.interface';
import { SignUpService } from 'src/services/signup.service';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('signup')
export class SignUpController {
    constructor(private signUpService: SignUpService){}
    @Post()
    create(@Body() userDetails: UserDetails, @Request() req): Observable<UserDetails> {
      return this.signUpService.createPost(userDetails);
    }

    @Get()
    findAll(): Observable<UserDetails[]> {
        return this.signUpService.findAllPosts();
    }

    @Put(':id')
    update(
      @Param('id') id:number,
      @Body() userDetails:UserDetails
    ): Observable<UpdateResult>{
        return this.signUpService.updatePost(id,userDetails)
    }

    @Delete(':id')
    delete(
      @Param('id') id:number,      
    ): Observable<DeleteResult>{
      return this.signUpService.deletePost(id)
    }

}
