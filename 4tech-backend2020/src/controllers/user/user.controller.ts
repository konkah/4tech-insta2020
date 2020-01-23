import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { UserViewModel } from 'src/domain/user.viewmodel';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {
    }
    
    @Get('retorna')
    retornarUsuarios(){
        return this.userService.getUsers();
    }

    @Post('usr')
    criarUsuarios(@Body() newUser: UserViewModel){
        return this.userService.createNewUser(newUser);
    }

    @Put('usr2')
    criarUsuarios2(@Body() newUser: UserViewModel){
        return this.userService.createNewUser(newUser);
    }

    @Delete('apaga')
    delUsuarios(@Body() user: UserViewModel){
        return this.userService.deleteUser(user);
    }


}
