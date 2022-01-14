import { ApiProperty } from "@nestjs/swagger";     //swager imported
import { user } from "../db/entities/user.entity"


export class PetReqModel {  //for reciveing the req

    public constructor(init?: Partial<PetReqModel>) {
        Object.assign(this, init);
    }

    @ApiProperty() // swager doc
    Name: string;
}


export class PetResModel {  //for sending back the respomse

    public constructor(init?: Partial<PetResModel>) {
        Object.assign(this, init);
    }


    @ApiProperty()  // swager doc 
    Name: string;
}

export class PaginationDto {
    page: number
    limit: number
}

export class PaginatedPetResultDto {
    data: user[]
    page: number
    limit: number
    totalCount: number
}
