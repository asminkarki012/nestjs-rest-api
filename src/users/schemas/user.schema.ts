import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from "src/auth/role.enum";

export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop({required:true,unique:true})
  email: string;

  @Prop({required:true})
  password: string;


  @Prop({default:"user"})
  roles: Role[];

  @Prop()
  otp:string

  @Prop({default:Date.now()})
  otpexpiresAt:Number

  @Prop({default:false}) //when true user can login else cannot login
  active:Boolean;


}
export const UserSchema = SchemaFactory.createForClass(User);
// export const UserSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     unique: true,
//     require: true,
//   },
//   password: {
//     type: String,
//     require: true,
//   },
//   roles: { type: [String], default: "user" },
// });
