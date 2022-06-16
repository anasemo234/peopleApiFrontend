import  { Link } from 'react-router-dom';
import { login, logout } from '../services/firebase';

const Header = (props) => {
    return (
        <nav className='nav'>
                    <Link to="/">
                        <div>People App</div>
                    </Link>
                    <ul>
                        {
                            props.user  ?  <li onClick={logout} >Logout</li> : <li onClick={login} >Login</li>
                        }
                    </ul>
            </nav>
    )
    
}

export default Header;