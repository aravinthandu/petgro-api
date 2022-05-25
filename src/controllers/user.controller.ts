import {
    Controller,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors,
    Request,
    Get,
    Res,
    Param,
    Put,
    Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { JwtGuard } from '../guards/jwt.guard';
// import {
//     isFileExtensionSafe,
//     saveImageToStorage,
//     removeFile,
// } from '../helpers/image-stoage';
import { User } from '../models/user.class';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { 

        console.log("hello")
    }

    // @UseGuards(JwtGuard)
    // @Post('upload')
    // @UseInterceptors(FileInterceptor('file', saveImageToStorage))
    // uploadImage(
    //     @UploadedFile() file: Express.Multer.File,
    //     @Request() req,
    // ): Observable<{ modifiedFileName: string } | { error: string }> {
    //     const fileName = file?.filename;

    //     if (!fileName) return of({ error: 'File must be a png, jpg/jpeg' });

    //     const imagesFolderPath = join(process.cwd(), 'images');
    //     const fullImagePath = join(imagesFolderPath + '/' + file.filename);

    //     return isFileExtensionSafe(fullImagePath).pipe(
    //         switchMap((isFileLegit: boolean) => {
    //             if (isFileLegit) {
    //                 const userId = req.user.id;
    //                 return this.userService.updateUserImageById(userId, fileName).pipe(
    //                     map(() => ({
    //                         modifiedFileName: file.filename,
    //                     })),
    //                 );
    //             }
    //             removeFile(fullImagePath);
    //             return of({ error: 'File content does not match extension!' });
    //         }),
    //     );
    // }
}