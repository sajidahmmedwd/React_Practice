import { UserContext } from '../../context/UserContext';
import useUserContext from '../../hooks/useUserContext';

const User = ({user}) => {

    const [users, setUsers] = useUserContext();

    const {id, userName} = user;

    const handleDelete = (id) => {
        const filteredUsers = users.filter(user => user.id !== id)
        setUsers(filteredUsers);
        
      }
        
    

  return (
    <div>
        <h3>User ID: {id}</h3>
        <h1>User Name: {userName}</h1>
        <button onClick={() => {handleDelete(id)}}>Delete</button>
    </div>
  )
}

export default User