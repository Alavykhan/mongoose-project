import { Schema, model } from 'mongoose';
import {
  Guardian,
  Student,
  UserName,
  LocalGuardian,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String },
  fatherOccupation: { type: String },
  fatherContact: { type: Number },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String },
  occupation: { type: String },
});

const studentSchema = new Schema<Student>({
  id: { type: Number },
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNumber: { type: String },
  emergencyContact: { type: String },
  bloodGroup: ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'],
  presentAddress: { type: String },
  permanentAddress: { type: String },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  isActive: ['active', 'blocked'],
});

export const StudentModel = model<Student>('Student', studentSchema);
