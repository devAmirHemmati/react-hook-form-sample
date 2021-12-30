import { useState, VFC } from 'react';
import AddUserForm from './components/AddUserForm';
import UsersList from './components/UsersList';
import { IUserModel } from './models/user';

const App: VFC = () => {
	const [users, setUsers] = useState<IUserModel[]>([]);

	const handleAddNewUser = (newUser: IUserModel) => {
		setUsers((prevState) => [...prevState, newUser]);
	};

	return (
		<div className="container py-4">
			<UsersList users={users} />

			<div className="mt-4 pt-4">
				<AddUserForm handleAddNewUser={handleAddNewUser} />
			</div>
		</div>
	);
};

export default App;
