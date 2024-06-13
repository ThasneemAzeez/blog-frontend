import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
          const[data,setData]=useState(
            {
                "name":"",
                "email":"",
                "password":"",
            }
        )
    
        const inputHandler=(event) => {
            setData({...data,[event.target.name]:event.target.value})
        }
    
        const readValue=() => {
            console.log(data)
            if(data.password==data.confirm)
            {
                 axios.post("",data).then(
                    (response) => {
                        console.log(response.data)
                    
                        if (response.data.status=="success") {
                        alert("Successfully Added")
                        } 
                             else {
                                alert("Error")
                        }
                }
            ).catch().finally()
        }
    else{
            alert("Incorrect Password")
    }
        }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <br></br>
                <div class="bg-tertiary p-3">
                <div class="card">
                <div class="card-body">
                    <div className="row g-3">
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">NAME</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">EMAIL</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">PASSWORD</label>
                            <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputHandler}/>
                        </div>
                    
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>SUCCESS</button>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-secondary">RESET</button>
                        </div>
                        <a href="#">Back to Login</a>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
    </div>
  )
}

export default SignUp