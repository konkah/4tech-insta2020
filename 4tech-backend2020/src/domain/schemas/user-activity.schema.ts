import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const UserActivityCommentsSchema = new mongoose.Schema({
    userId: String,
    userName: String,
    comment: String,
    likes:[String],
    timestamp:{
        type: Date,
        default: Date.now(),
    },
});

const UserActivitySchema = new mongoose.Schema({
    userId: String,
    userName: String,
    dileName: String,
    likes:[String],
    timestamp:{
        type: Date,
        default: Date.now(),
    },
    comments: [UserActivityCommentsSchema],
})