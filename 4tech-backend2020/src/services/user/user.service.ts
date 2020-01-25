import { Injectable, BadRequestException } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user-repository/user-repository';
import { UserViewModel } from 'src/domain/user.viewmodel';
import { LoginViewModel } from 'src/domain/login.viewmodel';

@Injectable()
export class UserService {
    constructor(readonly userRepository: UserRepository){
    }

    getUsers(){
        return this.userRepository.getUsers();
    }

    async createNewUser(newUser: UserViewModel){

        const userList = await this.userRepository.getUsers();
        const existingUser = userList.find(x => x.userName === newUser.userName);
        if (existingUser){
            throw new BadRequestException('This username already exists!');
        }
        
        return this.userRepository.createUser(newUser);
    }

    async createGroup(newGroup: UserViewModel[]){
        for(let i = 0; i < newGroup.length; i++)
          await this.createNewUser(newGroup[i]);
        
        return 'Group added.';
    }

    async attemptLogin(login: LoginViewModel){
        const userList = await this.userRepository.getUsers();

        const foundLogin = userList
            .find(x => 
                x.userLogin === login.userLogin &&
                x.password === login.password
            );

        return foundLogin;
    }

    async deleteUser(purge: UserViewModel){
        const userList = await this.userRepository.getUsers();

        const foundLogin = userList
            .find(x => 
                x.userLogin === purge.userLogin &&
                x.password === purge.password
            );
            
            return foundLogin;
            /*if(foundLogin === null){
                throw new BadRequestException('Page not found.');
            }else{
                //return this.userRepository.deleteUser(foundLogin);
                return 'Deleted'
            }*/

    }

    async deleteGroup(purge: UserViewModel[]){
        for(let i = 0; i < purge.length; i++)
          await this.deleteUser(purge[i]);
        
        return 'Group deleted.';

    }
}
