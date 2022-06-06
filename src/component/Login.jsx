import React from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../service/api';



function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [, setLoginStatus] = useState(false);
    let navigate = useNavigate();

    const login = async (e) => {

        try{
            e.preventDefault()

            const formData = {
                email: email,
                senha: senha
            }
    
         const { data } = await api.post('/login', formData) 

          if (!data.auth) {
        setLoginStatus(false)
    } else {
        console.log(data)
        localStorage.setItem("token", data.token)
        setLoginStatus(true)
        navigate("/home");
    }
        }catch(error){
            console.error(error)
        }
       }
   


    return (
        <div className="container-login100">
            <div className="wrap-login100">
                <div className="login100-pic js-tilt" data-tilt>
                    <img src={require('../assets/img-01.jpeg')} alt="IMG" />
                </div>

                <form className="login100-form validate-form">
                    <span className="login100-form-title">
                        Login para Membros
                    </span>

                    <div className="wrap-input100 validate-input" data-validate = "Requer um email válido: ex@abc.xyz">
                        <input className="input100" type="text" name="email" 
                                onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <FontAwesomeIcon icon="envelope" />
                        </span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate = "Requer uma senha">
                        <input className="input100" type="password" name="pass" 
                                onChange={(e) => setSenha(e.target.value)} placeholder="Senha" />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <FontAwesomeIcon icon="lock" />
                        </span>
                    </div>
                    
                    <div className="container-login100-form-btn">
                        {/* <h4>{loginStatus}</h4> */}
                        <button onClick={login} className="login100-form-btn">
                            Login
                        </button>
                    </div>

                    <div className="text-center p-t-12">
                        <span className="txt1">
                            Esqueceu
                        </span>
                        <a className="txt2" href="recuperarLogin.html">
                            Usuário / Senha?
                        </a>
                    </div>

                    <div className="text-center p-t-136">
                        <Link to="/register" className="txt2">
                            <span className="span-txt2">
                                Crie a sua conta
                                <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                                <br />
                                E seja um membro
                            </span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
  
export default Login;