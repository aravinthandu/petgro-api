import { Body, Controller, HttpCode, HttpStatus, Post, Get, Put, Delete, Param, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.class';
import { AuthService } from '../services/auth.service';
import { DeleteResult, UpdateResult } from 'typeorm';


@Controller('auth')
export class AuthController {
    constructor(
        @InjectRepository(User)
        private usersRepository:Repository<User>,
        private authService: AuthService) { }

    @Post('register')
    register(@Body() user: User): Observable<User> {
        return this.authService.registerAccount(user);
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() user: User): Observable<{ token: string }> {
        return this.authService
            .login(user)
            .pipe(map((jwt: string) => ({ token: jwt })));
    }

    @Get()
    findAll(): Observable<User[]> {
        return this.authService.findAllPosts();
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() users: User
    ): Observable<UpdateResult> {
        return this.authService.updatePost(id, users)
    }

    findOne(id:number):Promise<User>{
        return this.usersRepository.findOne(id);
    }

    async deletePost(id:number):Promise<void>{
        await this.usersRepository.delete(id)
      }

}
