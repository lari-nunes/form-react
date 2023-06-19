// import { useState } from "react";
// import "./LoginPage.css"

// const LoginPage = () => {

//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
//     const [passwordError, setPasswordError] = useState();

//     const onChangeEmail = (event) => {
//         setEmail(event.target.value)
//     }

//     const onChangePassword = (event) => {
//         const passwordValue = event.target.value
//         setPassword(emailValue)
//         if(passwordValue.length >= 6){
//             setPasswordError()
//         }else{
//             setPasswordError("A senha deve conter pelo menos 6 caracteres")
//         }
//     }
// }

//     const onSubmit = () => {
//         console.log(email, password)    

//     return (
//         <div className="container">
//             <div className="formContainer">
//                 <input>
//                     label="Email"
//                     name="emailInput"
//                     value={email}
//                     onChange={onChangeEmail}
//                 </input>

//                 <input>
//                     label="Senha"
//                     type="password"
//                     name="password"
//                     value={passwordl}
//                     onChange={onChangePassword}
//                 </input>
                 
//                 passwordError ? (
//                     <p className="errorMessage">
//                         A senha deve conter pelo menos 6 caracteres</p>
//                 ) : <></>
//                 <button onClick={onSubmit}>
//                     Entrar
//                 </button>
//             </div>
//         </div>    
//     );
// }    

// export default LoginPage;   