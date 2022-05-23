import { Body, Controller, HttpCode, HttpStatus, Post, Get, Put, Delete, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.class';
import { AuthService } from 'src/services/auth.service';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post()
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
        @Body() userDetails: User
    ): Observable<UpdateResult> {
        return this.authService.updatePost(id, userDetails)
    }

    @Delete(':id')
    delete(
        @Param('id') id: number,
    ): Observable<DeleteResult> {
        return this.authService.deletePost(id)
    }

}
