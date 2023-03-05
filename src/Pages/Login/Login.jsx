
// import Logo from '../../Images/teriak-logo.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.sass';

const Login = () => {

  const [answer, setAnswer] = useState("")


  return (
    <div className="login__container">
      <div className="login__pannel">
        {/* <Logo /> */}
        <h1>Welcome Back</h1>
        <div className="input__container">
          <input type="password" placeholder="Username" />
          <Link to="/home"><button >yeddou</button></Link>
        </div>
      </div>
    </div>
   );
}

export default Login;