import { VFC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { v4 as uuidV4 } from 'uuid';
import { ENUM_USER_GENDER, IUserModel } from '../../models/user';
import {
	ENUM_USER_FORM_FIELD_NAME,
	IAddUserFormProps,
	tUsersFields,
} from './@types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup
	.object({
		[ENUM_USER_FORM_FIELD_NAME.FIRST_NAME]: yup
			.string()
			.min(2)
			.max(20)
			.required(),
		[ENUM_USER_FORM_FIELD_NAME.LAST_NAME]: yup
			.string()
			.min(2)
			.max(20)
			.required(),
		[ENUM_USER_FORM_FIELD_NAME.EMAIL]: yup.string().email().required(),
	})
	.required();

const AddUserForm: VFC<IAddUserFormProps> = ({ handleAddNewUser }) => {
	const {
		register,
		handleSubmit,
		formState: { errors, dirtyFields },
		reset,
		setFocus,
		clearErrors,
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit: SubmitHandler<tUsersFields> = (data) => {
		const id = uuidV4();

		const payload: IUserModel = {
			id: id,
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			gender: parseInt(data.gender),
		};

		handleAddNewUser(payload);

		reset();
		clearErrors();

		setFocus(ENUM_USER_FORM_FIELD_NAME.FIRST_NAME);
	};

	console.log(dirtyFields);
	return (
		<div>
			<h1 className="h1 mb-3">Add User Form</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<label htmlFor="first-name-field">first name:</label>

					<input
						type="text"
						className={`form-control mt-2 ${
							errors[ENUM_USER_FORM_FIELD_NAME.FIRST_NAME] ? 'is-invalid' : ''
						}`}
						id="first-name-field"
						placeholder="Enter first name"
						{...register(ENUM_USER_FORM_FIELD_NAME.FIRST_NAME)}
						autoFocus
					/>
				</div>

				<div className="form-group mt-3">
					<label htmlFor="last-name-field">last name:</label>

					<input
						type="text"
						className={`form-control mt-2 ${
							errors[ENUM_USER_FORM_FIELD_NAME.LAST_NAME] ? 'is-invalid' : ''
						}`}
						id="last-name-field"
						placeholder="Enter last name"
						{...register(ENUM_USER_FORM_FIELD_NAME.LAST_NAME)}
					/>
				</div>

				<div className="form-group mt-3">
					<label htmlFor="email-field">email</label>

					<input
						type="text"
						className={`form-control mt-2 ${
							errors[ENUM_USER_FORM_FIELD_NAME.EMAIL] ? 'is-invalid' : ''
						}`}
						id="email-field"
						placeholder="Enter email"
						{...register(ENUM_USER_FORM_FIELD_NAME.EMAIL)}
					/>
				</div>

				<div className="form-group mt-3">
					<label htmlFor="gender-field">Gender:</label>

					<select
						className="form-select mt-2"
						{...register(ENUM_USER_FORM_FIELD_NAME.GENDER)}
						id="gender-field"
						defaultValue={ENUM_USER_GENDER.MAIL}
					>
						<option value={ENUM_USER_GENDER.MAIL}>Mail</option>
						<option value={ENUM_USER_GENDER.FEMALE}>Female</option>
					</select>
				</div>

				<button type="submit" className="btn btn-primary mt-4">
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddUserForm;
