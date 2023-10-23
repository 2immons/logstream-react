const UsersList = ({ users, onUserClick, selectedUserId }) => {
    return (
        <div className="users-list">
        <h2 className="title">Пользователи</h2>
        <ul>
            {users.map((user) => {
            let className = "user-item";
            if (selectedUserId === user.id) {
                className = "selected-user";
            }
            return (
                <li
                    key={user.id}
                    onClick={() => onUserClick(user.id)}
                    className={className}
                >
                    {user.name}
                </li>
            );
            })}
        </ul>
        </div>
    );
    };

export default UsersList;
  