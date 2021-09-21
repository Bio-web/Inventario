import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";
import "./Login.css";



async function login(credenciales) {
    return {
      name: "bio-web",
      token: "12345",
    };
  }

function Login() {
    const { setUser } = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userInfo = await login({
        username,
        password,
        });
        userInfo.isLoggedIn = true;

        console.log(userInfo);
        setUser(userInfo);
        localStorage.setItem("user", JSON.stringify(userInfo));
        history.push("/inicio");
    };

    return (
        <body className="principal">
        <div className="d-flex justify-content-center">
        <form className="text-white" onSubmit={handleSubmit}>
            <div className="email">
            <label htmlFor="exampleInputEmail1" className="form-label">
                Email
            </label>
            <input
                type="email"
                id="exampleInputEmail1"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={(e) => setUsername(e.target.value)}

            />
            </div>
            <div className="contraseña">
            <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
            </label>
            <input
                type="password"
                id="exampleInputPassword1"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button type="submit" className="btn">
            Iniciar sesión
            </button>
        </form>
        </div>
        </body>
       

    );
}

export default Login;