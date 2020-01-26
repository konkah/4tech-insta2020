import { Injectable, BadRequestException } from '@nestjs/common';
import { UserViewModel } from 'src/domain/user.viewmodel';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/domain/schemas/user.schema';

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel('User') private readonly userCollection: Model<User>){

    }

    async getByCredentials(userLoginFromViewModel: string, passwordFromViewModel: string){
        return await this.userCollection
            .findOne({ 
                userLogin: userLoginFromViewModel,
                password: passwordFromViewModel,
            })
    }
    
    async getById(id: string): Promise<User>{
        return await this.userCollection
            .findOne({ _id: id })
            .lean();
    }
    
    async getUsers(): Promise<User[]>{
        return await this.userCollection
            .find()
            .select({ __v: false, password: false })
            .lean();
    }

    async createUser(newUser: UserViewModel){
        const user = this.userCollection(newUser);
        return await user.save();
        //this.db.push(newUser);
        //return 'User successfully added';
    }

    deleteUser(user: UserViewModel){
        //const index = this.db.indexOf(user);
        //this.db.splice(index,1);
        //this.db.splice(this.db.indexOf(user),1);
        /*if(index === null){
            throw new BadRequestException('Page not found.');
        }else{
            return this.deleteUser(index);
        }*/
        //return 'User successfully removed';
    }
}