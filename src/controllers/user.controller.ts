import { Body, Controller, HttpCode, HttpStatus, Post, Get, Put, Delete, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User} from '../models/user.class';
import { UserService } from '../services/user.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { API_Path } from 'src/constants/constants';

@Controller(`${API_Path}/user`)
export class UserController {
    constructor(private userService: UserService) { }

    @Post('signup')
    register(@Body() user: User): Observable<User> {
        return this.userService.registerAccount(user);
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() user: User): Observable<{ token: string }> {
        return this.userService
            .login(user)
            .pipe(map((jwt: string) => ({ token: jwt })));
    }

    @Get()
    findAll(): Observable<User[]> {
        return this.userService.findAllPosts();
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() users: User
    ): Observable<UpdateResult> {
        return this.userService.updateUser(id, users)
    }

    @Delete(':id')
    delete(
        @Param('id') id: number,
    ): Observable<DeleteResult> {
        return this.userService.deletePost(id)
    }

}