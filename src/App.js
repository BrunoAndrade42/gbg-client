import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import './css/util.css';
import './css/comentario.css';
import Rotas from './routes';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import Axios from 'axios';



function App() {
  const [dados, setDados] = useState("");

  // useEffect(() =>  {
  //   Axios.get('http://localhost:3001/userAuth', {
  //       headers: {
  //           "x-access-token": localStorage.getItem("token")
  //       }
  //   }).then((response) => {
  //       if (response.auth == true) {
  //           setDados(response.data.user[0])
  //       }
  //   })
  // })

  return (
    <div className="App limiter">
      <Rotas />
    </div>
  );
}

export default App;
