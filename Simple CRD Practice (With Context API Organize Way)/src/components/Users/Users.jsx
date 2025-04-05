import User from '../User/User'
import { UserContext } from '../../context/UserContext';
import useUserContext from '../../hooks/useUserContext';

const Users = () => {

  const [users, setUsers] = useUserContext();

  return (
    <div>
        {
            users.map(user => <User
                key={user.id}
                user={user}
            ></User>)
        }
    </div>
  )
}

export default Users