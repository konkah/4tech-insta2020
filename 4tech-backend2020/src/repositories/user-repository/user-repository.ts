import { Injectable } from '@nestjs/common';
import { UserViewModel } from 'src/domain/user.viewmodel';

@Injectable()
export class UserRepository {
    db: UserViewModel[] = [
        new UserViewModel('joao', 'joao', '12345'),
    ];
    getUsers(){
        return this.db;
    }

    createUser(newUser: UserViewModel){
        this.db.push(newUser);
        return 'User successfully added';
    }

    deleteUser(user: UserViewModel){
        const index = this.db.indexOf(user);
        this.db.splice(index,1);
        //this.db.splice(this.db.indexOf(user),1);
        return 'User successfully removed';
    }
}