import React, { useState } from 'react'
import {ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function Form() {
    const [formSubmit, setformSubmit] = useState(false);
    const [formErr, setFormErr] = useState({});
    const[formData,setFormData]= useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNo:""
    })

    const Submit=(e)=>{
        e.preventDefault();
        let errors = errCheck(formData)
        setFormErr(errors)
        let errorKey = Object.keys(errors)
        if(errorKey.length==0){
            toast("Data Submit Successful")
            setformSubmit(true)

        }else{
            setformSubmit(false)
        }
    }
    
    const handleClick=(e)=>{
       let {name,value}=e.target
       setFormData({
        ...formData,
        [name]:value,
    })
    }
    const errCheck = (data) => {
let error = {};
if (data.firstName.trim() === "") {
    toast("Please Enter Name")
    error.firstName = "Please Enter your First Name";
}
if (data.lastName.trim() === "") {
    toast("Please Last Name")
    error.lastName = "Please Enter Your Last Name";
}
if (data.email.trim() === "") {
    toast("Please Enter email")
    error.email = "Please Enter Email Id";
}
if (data.phoneNo.trim() === "") {
    toast("Please Enter Number")
    error.phoneNo = "Please Enter a Number";
}
if (data.phoneNo.length !== 10) {
    error.phoneNo = "Please enter a 10-digit valid number";
}
return error;
};

return (
    <div className="form-container">
      <ToastContainer />
      <fieldset>
        <legend>Fill this Form</legend>
        <form onSubmit={Submit}>
          {/* Success Message  */}
          {formSubmit && (
            <div className="success">
              <p>Registration Successful</p>
            </div>
          )}

          <label> First Name </label>
          <input type="text" name="firstName" onChange={handleClick}/>
          {formErr.firstName && <p className="err">{formErr.firstName}</p>}

          <label> Last Name </label>
          <input type="text" name="lastName" onChange={handleClick} />
          {formErr.lastName && <p className="err">{formErr.lastName}</p>}

          <label>Email</label>
          <input type="email" name="email" onChange={handleClick}/>
          {formErr.email && <p className="err">{formErr.email}</p>}

          <label> Phone number </label>
          <input type="number" name="phoneNo" onChange={handleClick}/>
          {formErr.phoneNo && <p className="err">{formErr.phoneNo}</p>}

          <input className="button" type="submit" value={"Register"} />
        </form>
      </fieldset>
    </div>
  );
}

export default Form