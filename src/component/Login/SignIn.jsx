import instanceAxios from "../Axios/instanceAxios";
import signin from "./Login.module.css"
import $ from "jquery"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { clearTodoLocal } from "../Action";
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
idUser = 1
// instanceAxios.get("TodoApp")
//     .then((response) => {
//         console.log("Loaded Users !!");
//         loadedUser = true;
//         users = response.data;
//     })
//     .catch((error) => {
//         console.log(error);
//     })

/* Load users */

const SignIn = ({clearTodo}) => {
    useEffect(() => {
        clearTodo(); // clear Local
    },[]);

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
                navigative("/"); // Navigative page 
            }
            /* Login accepted */
        });
        if(!checkLogin) {
            alert("Sai thông tin !!!");
        }
    }
    return (
    <div className= {signin.sign_in_wrap}>
        <div className={signin.sign_in}>
            <div className={signin.sign_in_title}>
                <h2>TodoApp By DucAnh</h2>
            </div> 
            <div className={signin.sign_in_account}>
                <input type = "text" className={signin.input_account} value = {account} placeholder = "Account" 
                    onChange={(e) => {setAccount(e.target.value)}}
                />
            </div>
            <div className={signin.sign_in_password}>
                <input type = "password" className={signin.input_password} value = {password} placeholder = "Password"
                    onChange={(e) => {setPassword(e.target.value)}}
                />
            </div>
            <div className={signin.sign_in_button}>
                <button style = {{cursor: "pointer",}}onClick={handleLogin}> Đăng Nhập </button>
            </div>
        </div>
    </div>  
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        clearTodo: () => {
            dispatch(clearTodoLocal());
        }
    }
}
export default connect(null,mapDispatchToProps)(SignIn);
export {idUser};