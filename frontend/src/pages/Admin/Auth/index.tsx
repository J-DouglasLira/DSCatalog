import {ReactComponent as AuthImage} from 'assets/images/auth-image.svg';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import "./styles.css";

const Auth = () => {
 return(
  <div className="auth-container">
    <div className="auth-banner-container">
      <h1> Divulge seus produtos no DSCatalog</h1>
      <p>
        Faça parte do nosso catálogo de divulgação e aumenta a venda dos seus produtos
      </p>
      <AuthImage/>
    </div>
    <div className="auth-form-container">
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<h1>Card de signup</h1>}></Route>
        <Route path="/recover" element={<h1>Card de recover</h1>}></Route>
      </Routes>
    </div>
  </div>
 )
}

export default Auth;