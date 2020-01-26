import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserActivity } from 'src/domain/schemas/user-activity.schema';
import { Model} from 'mongoose';
import { async } from 'rxjs/internal/scheduler/async';
import { create } from 'domain';
import { UserActivityCommentDto } from 'src/domain/dto/user-activity-comment.dto';
import{ UserActivityDto } from 'src/domain/dto/user-activity.dto';

@Injectable()
export class UserActivityRepository{
    constructor(
        @InjectModel('UserActivity') private readonly userActivityCollection: Model <UserActivity>){
        }

    async getByID(id: string): Promise<UserActivity>{
        return await this.userActivityCollection
            .find({ _id:id })
            .lean();
    }
    async getPaged(index: number){
        return await this.userActivityCollection
            .find()
            .sort({timestamp: -1})
            .skip(index)
            .limit(10)
            .lean();
    }

    async create(userActivityDto: UserActivityDto){
        const newUserActivity = this.userActivityCollection(userActivityDto);
        await newUserActivity.save();

        return await this.getByID(newUserActivity._id);
    }

    async update(UserActivity: UserActivity){
        const updatedActivity = await this.userActivityCollection.findOneAndUpdate(
            { _id: UserActivity._id },
            UserActivity,
            { new: true });
        
        return await updatedActivity.save();
    }
    
};