import React from 'react'
import { useState } from 'react'


function Login() {
  return (
    <div>
        <h1>Login</h1>
        <div>
            <p>Kullanıcı adınızı giriniz:</p>
            <input type="text" name="username" id="username" />
        </div>
        <div>
            <p>Şifrenizi giriniz:</p>
            <input type="password" name="password" id="password" />
        </div>
        <button>Giriş Yap</button>
        


    </div>
    
  )
}

export default Login