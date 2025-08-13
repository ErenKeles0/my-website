import React from 'react'
import { useState } from 'react'
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "./Firebase"
function Login() {
  const [text,settext]=useState("");
  const [email,setemail]=useState("");
  const [pass,setpass]=useState("");


  const login =async ()=>{
    try{
      const response = await signInWithEmailAndPassword(auth,email,pass)
      const user =response.user
      if (user){
        settext("Giriş Başarılı")
      }
    }catch(error){
      settext("Giriş başarısız ya da hata"+error)
    }
  }


  const register= async ()=>{
    try{
    const response = await createUserWithEmailAndPassword(auth, email, pass);
    const user =response.user;
    if (user){  
      settext("Kayıt başarılı")
    }}
    catch(err){
      console.log(err)
    }

  }
  return (

    

    <div>
        <h1>Login</h1>
        <div>
            <p>Kullanıcı adınızı giriniz:</p>
            <input value={email} onChange={(e)=>setemail(e.target.value)} type="text" name="username" id="username" />
        </div>
        <div>
            <p>Şifrenizi giriniz:</p>
            <input value={pass} onChange={(e)=>setpass(e.target.value)} type="password" name="password" id="password" />
        </div>
        <button onClick={register}>Kayıt ol</button>
        <button onClick={login}>Giriş Yap</button>
        <p>{text}</p>
        


    </div>
    
  )
}

export default Login