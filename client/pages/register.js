import React, {useState} from 'react';
import axios from 'axios';

const Register = () => {

  // const [name, setName] = useState('')
  const [user, setUser] = useState({name: "", email: "", password: "", secret: ""})

  let name, val
  const nameHandler = (e) => {
    name = e.target.name;
    val = e.target.value;
    setUser({...user, [name]:val});
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`/api/user`,user).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
  }

  return (
    <div className="container">
            <div className="row">
                <div className="col">
                  <div className='heading-1'>
                    <h1>Register Page</h1>
                  </div>
                  <div>
                    <form onSubmit={submitHandler}>
                      <div className='form-group mb-4'>
                        <input type="text" placeholder="Enter you name" className='form-control' value={user.name} onChange={nameHandler} name="name"/>
                      </div>
                      <div className='form-group mb-4'>
                        <input type="email" placeholder="Enter you Email" className='form-control' value={user.email} onChange={nameHandler} name="email"/>
                      </div>
                      <div className='form-group mb-4'>
                        <input type="text" placeholder="Enter you password" className='form-control' value={user.password} onChange={nameHandler}  name="password"/>
                      </div>
                      <div className='form-group mb-4'>
                        <select className='form-control'  onChange={nameHandler}>
                          <option>What is your Favaret color?</option>
                          <option>What is your Favaret color?</option>
                          <option>What is your Favaret color?</option>
                        </select>
                      </div>
                      <div className='form-group mb-4'  onChange={nameHandler}>
                        <input type="text" placeholder="Write your answer here..." className='form-control' value={user.secret} onChange={nameHandler} name="secret"/>
                      </div>
                      <div>
                        <input type="submit" value="Submit" className="btn btn-info w-100"/>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
        </div>
  )
}

export default Register
