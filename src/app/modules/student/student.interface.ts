export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContact: number;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
};

export type Student = {
  id: number;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contactNumber: string;
  emergencyContact: string;
  bloodGroup?: 'A+' | 'B+' | 'O+' | 'AB+' | 'A-' | 'B-' | 'O-' | 'AB-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  profileImg?: string;
  localGuardian: LocalGuardian;
  isActive: 'active' | 'blocked';
};
