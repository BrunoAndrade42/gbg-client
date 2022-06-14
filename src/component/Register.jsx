import React from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../service/api';




function Register() {
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    // const [dataNasc, setData] = useState("");
    // const [estado, setEstado] = useState("");
    // const [pais, setPais] = useState("");


    const handleSubmit = async (e) => {
        const formData = {
            usuario,
            email,
            senha
        }
       await api.post('/register', formData);
    }    
   

    return (
        <div className="container-login100">
            <div className="wrap-login100">
                <div className="login100-pic js-tilt" data-tilt>
                    <img src={require('../assets/img-01.jpeg')} alt="IMG" />
                </div>

                <form className="login100-form validate-form">
                    <span className="login100-form-title">
                        Crie sua conta
                    </span>

                    <div className="wrap-input100 validate-input" data-validate = "Requer um usuário válido">
                        <input className="input100" type="text" name="usuario"  value={usuario}  
                                onChange={(e) => setUsuario(e.target.value)} placeholder="Usuário" />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <FontAwesomeIcon icon="user" />
                        </span> 
                    </div>

                    <div className="wrap-input100 validate-input" data-validate = "Requer um email válido: ex@abc.xyz">
                        <input className="input100" type="email" name="email" value={email}
                                onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <FontAwesomeIcon icon="envelope" />
                        </span> 
                    </div>

                    <div className="wrap-input100 validate-input" data-validate = "Requer uma data válida: xx/xx/xxxx">
                        <input className="input100" type="date" name="dataNasc"  />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <FontAwesomeIcon icon="calendar-day" />
                        </span> 
                    </div>

                    <div className="wrap-input100 validate-input" data-validate = "Requer um estado válido">
                        <input className="input100" type="text" name="text" placeholder="Estado" />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <FontAwesomeIcon icon="city" />
                        </span> 
                    </div>

                    <div className="wrap-input100 validate-input" data-validate = "Requer um país válido">
                        <input className="input100" type="text" name="text" placeholder="País" />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <FontAwesomeIcon icon="globe" />
                        </span> 
                    </div>

                    <div className="wrap-input100 validate-input" data-validate = "Requer uma senha">
                        <input className="input100" type="password" name="pass" value={senha} 
                                onChange={(e) => setSenha(e.target.value)} placeholder="Senha" />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <FontAwesomeIcon icon="lock" />
                        </span>
                    </div>
                    
                    <div className="container-login100-form-btn">
                        <button onClick={handleSubmit} type="submit" className="login100-form-btn">
                            Criar conta
                        </button>
                        <p>Já tem uma conta?</p>
                        <Link to="/login" className="txt3">
                            <span className="span-txt3">
                                Login
                                <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                            </span> 
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register