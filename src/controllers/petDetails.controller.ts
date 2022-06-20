import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from '../models/user.class';
import { PetDetails } from 'src/models/petDetails.class';
import { PetDetail } from 'src/services/petDetail.service';
import { API_Path } from 'src/constants/constants';

@Controller(`${API_Path}/pet`)
export class PetDetailsController {
    constructor(private petDetailService: PetDetail) { }

    @Post()
    create(@Body() petDetail: PetDetails): Observable<User> {
        return this.petDetailService.registerAccount(petDetail);
    }
}
