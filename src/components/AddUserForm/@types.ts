import { IUserModel } from '../../models/user';

export enum ENUM_USER_FORM_FIELD_NAME {
	FIRST_NAME = 'firstName',
	LAST_NAME = 'lastName',
	EMAIL = 'email',
	GENDER = 'gender',
}

export type tUsersFields = {
	[ENUM_USER_FORM_FIELD_NAME.FIRST_NAME]: string;
	[ENUM_USER_FORM_FIELD_NAME.LAST_NAME]: string;
	[ENUM_USER_FORM_FIELD_NAME.EMAIL]: string;
	[ENUM_USER_FORM_FIELD_NAME.GENDER]: string;
};

export interface IAddUserFormProps {
	handleAddNewUser(newUser: IUserModel): void;
}
