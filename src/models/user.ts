export enum ENUM_USER_GENDER {
	MAIL,
	FEMALE,
}

export interface IUserModel {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	gender: ENUM_USER_GENDER;
}
