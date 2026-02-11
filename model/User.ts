import {Document,Schema} from 'mongoose'
import mongoose from 'mongoose'


export interface User extends Document{
    username:string,
    password:string
}



export const UserSchema :Schema<User> =new Schema({
    username :{
        type:String,
        required:[true,"Username is required"]
    },
    password:{
        type:String,
        required:[true,'Password is required']
    }
    }
)


export const UserModel=(mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User', UserSchema)