import { VFC } from 'react';
import { IUsersListProps } from './@types';

const usersListFields: string[] = ['#', 'First Name', 'Last Name', 'Email'];

const UsersList: VFC<IUsersListProps> = ({ users }) => {
	return (
		<div>
			<h1 className="h1">Users List</h1>

			{users.length >= 1 ? (
				<table className="table table-striped table-bordered mt-3">
					<thead>
						<tr>
							{usersListFields.map((item, key) => (
								<th key={key} scope="col">
									{item}
								</th>
							))}
						</tr>
					</thead>

					<tbody>
						{users.map((item, key) => (
							<tr key={item.id}>
								<th scope="row">{++key}</th>
								<td>{item.firstName}</td>
								<td>{item.lastName}</td>
								<td>{item.email}</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<div className="alert alert-warning text-center mt-3 h3">
					Not Found User
				</div>
			)}
		</div>
	);
};

export default UsersList;
