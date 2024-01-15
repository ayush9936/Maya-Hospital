import React from 'react'
import { useState } from 'react';

const Demo = () => {

  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
  
    async function handleSubmit(e){
        e.preventDefault()
        try{
            const response = await fetch("https://hospitalapi.projectupdate.in/api/getUserlogin",{
               mode:"no-cors",
            method:'POST',
        
                headers:{
                  'Content-Type':'application/json',
                },
                body:JSON.stringify({email,password})
            })

            if(response.ok){
                const responseData = await response.json();
                console.log('Login Successful',responseData);
              }else{
                console.log('Login failed');
              }
            }catch(errors){
              console.log(errors,'error during login');
          
            }
            setEmail('');
            setPassword('');
    }

  return (
   <>
   
   <div class="form-body">
										<form class="row g-3" onSubmit={handleSubmit}>
											<div class="col-12">
												<label for="inputEmailAddress" class="form-label">Email Address</label>
												<input type="email" class="form-control" id="inputEmailAddress" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
											</div>
											<div class="col-12">
												<label for="inputChoosePassword" class="form-label">Enter Password</label>
												<div class="input-group" id="show_hide_password">
													<input type="password" class="form-control border-end-0" value={password} onChange={(e)=>setPassword(e.target.value)} id="inputChoosePassword"  placeholder="Enter Password"/> <a href="javascript:;" class="input-group-text bg-transparent"><i class='bx bx-hide'></i></a>
												</div>
											</div>
										
											<div class="col-md-6 text-end">	<a href="authentication-forgot-password.html">Forgot Password ?</a>
											</div>
											<div class="col-12">
												<div class="d-grid">
													<button type="submit" class="btn btn-primary" ><i class="bx bxs-lock-open"></i>Sign in</button>
												</div>
											</div>
										</form>
									</div></>
  )
}

export default Demo