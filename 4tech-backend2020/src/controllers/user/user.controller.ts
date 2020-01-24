import { Controller, Get, Post, Put, Delete, Body, UseGuards } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { UserViewModel } from 'src/domain/user.viewmodel';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Get()
    retornarUsuarios(){
        return this.userService.getUsers();
    }

    @Post()
    criarUsuarios(@Body() newUser: UserViewModel){
        return this.userService.createNewUser(newUser);
    }

    @Put()
    criarUsuarios2(@Body() newUser: UserViewModel){
        return this.userService.createNewUser(newUser);
    }

    @Delete()
    delGroup(@Body() group: UserViewModel){
        return this.userService.deleteGroup(group);
    }

    @Delete()
    delUsuarios(@Body() user: UserViewModel){
        return
    }

    @Put('addgrupo')
    criarGrupo(@Body() newUser: UserViewModel[]){
        return this.userService.createGroup(newUser);
    }
}
