import instanceAxios from "../Axios/instanceAxios";
import "./Login.css"
import $ from "jquery"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


/* Auto Login */
const keyLocalStore = "AccountTodoApp"
let Account = { accountCurrent: '', passwordCurrent: ''}
if(localStorage.getItem(keyLocalStore) == null) {
  localStorage.setItem(keyLocalStore,JSON.stringify(Account))
}
Account = JSON.parse(localStorage.getItem(keyLocalStore))
/* Auto Login */


/* Load users */
let loadedUser = false, checkLogin = false;
let idUser = null, users = [];
instanceAxios.get("TodoApp")
    .then((response) => {
        console.log("Loaded Users !!");
        loadedUser = true;
        users = response.data;
    })
    .catch((error) => {
        console.log(error);
    })
/* Load users */

export default function SignIn() {
    const [account,setAccount] = useState('');
    const [password,setPassword] = useState('');
    const navigative = useNavigate();
    const handleLogin = async (e) => {
        setAccount('');
        setPassword('');
        users.forEach(element => {
            /* Login accepted */
            if(element.account == account && element.password == password) {
                checkLogin = true;
                idUser = element.id;
                navigative("/HomePage"); // Navigative page 
            }
            /* Login accepted */
        });
        if(!checkLogin) {
            alert("Sai thông tin !!!");
        }
    }
    return (
        <div className="sign-in">
            <div className="sign-in-title">
                <h2>TodoApp By DucAnh</h2>
            </div> 
            <div>
             <input type = "text" className="input-account" value = {account} placeholder = "Account" 
                onChange={(e) => {setAccount(e.target.value)}}
                />
            </div>
            <div>
                <input type = "password" className="input-password" value = {password} placeholder = "Password"
                onChange={(e) => {setPassword(e.target.value)}}
                />
            </div>
            <button onClick={handleLogin}> Login </button>
        </div>
    )
}
export {idUser};