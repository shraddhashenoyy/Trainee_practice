import React from "react";
import {useState} from "react";
import "./index.css";

function FormValidate(){
    const initialValues={username:"",email:"",password:""};
    const[formValues,setFormValues]=useState(initialValues);
    const[formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    
    
    const handleChange = (e)=>{
          const{name,value}=e.target;
          setFormValues({ ...formValues,[name]:value});
          console.log(formValues);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsSubmit(true);

    };


 return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
            <div className="field">
                <label>UserName</label><br/>
                <input 
                type="text" 
                name="username"
                placeholder="username"
                value={formValues.username}
                onChange={handleChange}/>
            </div>
            <div className="field">
                 <label>Email</label><br/>
                 <input 
                 type="text" 
                 name="email" 
                 placeholder="email" 
                 value={formValues.email}
                 onChange={handleChange}
                 />
            </div>
            <div className="field">
                <label>Password</label><br/>
                <input 
                type="text" 
                name="password" 
                placeholder="password" 
                value={formValues.password}
                onChange={handleChange}
                />
            </div>
           <div className="field">
              <button>Submit</button>
           </div>
           </form>
        </div>
    );
}
export default FormValidate;