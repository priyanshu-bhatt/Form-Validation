

import { useState } from 'react';
import './App.css';

function App() {
  const [name,setName] = useState("")
  const [mother,setMotherName] = useState("")
  const [father,setFatherName] = useState("")
  const [address,setAddress]=useState("")
  const [email,setEmail] = useState("")
  const [gender,setGender] = useState("Select any")
  const [phoneNumber,setPhoneNumber] = useState("")
  const [classNAME,setclassNAME] = useState("")
  const [emptyError,setEmptyError] = useState("")
  const [nameError,setNameError] = useState("")
  const [emailError,setEmailError] = useState("")
  const [genderError, setGenderError] = useState("")
  const [phoneNumberError,setPhoneNumberError] = useState("")
  const [classNAMEError, setclassNAMEError] = useState("")
  const [message,setmessage] = useState("")
  const [mothernameError,setMotherNameError] = useState("")
  const [fathernameError,setFatherNameError] = useState("")
  const [addressError,setAddressError]=useState("")
const validate=()=>{
  if(
    name === "" || email === "" || gender==="" || phoneNumber === "" ||classNAME==="" || mother ==="" || father ===""  || address===""
  ){
    setEmptyError("All fields are mandatory")
    setmessage("")
    return false 
  }
  if(!name.match(/^[A-Za-z- ]+$/)){
    setNameError("Name is not alphanumeric")
    setmessage("")
    return false;
  }
  if(!mother.match(/^[A-Za-z- ]+$/)){
    setMotherNameError("Name is not alphanumeric")
    setmessage("")
    return false;
  }
  if(!father.match(/^[A-Za-z- ]+$/)){
    setFatherNameError("Name is not alphanumeric")
    setmessage("")
    return false;
  }
  
  if(!email.includes("@")){
  setEmailError("must contain @")
  setmessage("")
  return false;
  }
  if(!gender.match(/male|female|other/i)){
     setGenderError("Invaid Entry")
     setmessage("")
     return false
  }
  if(!phoneNumber.match(/^[0-9]+$/)){
     setPhoneNumberError("Must contain only numbers")
     setmessage("")
     return false;
  }
  if(!classNAME.match(/^(?:[1-9]|0[1-9]|12)$/)){
    setclassNAMEError("Invalid")
    setmessage("")
    return false
  }
  return true
}
const reseterrordefault=()=>{
  setEmptyError("")
  setEmailError("")
  setGenderError("")
  setNameError("")
  setclassNAMEError("")
  setPhoneNumberError("")
  setFatherNameError("")
  setMotherNameError("")
  setAddressError("")
}

const handleSubmit=(e)=>{
  e.preventDefault()
  reseterrordefault()
  const isValid = validate()
  if(isValid){
    setName("")
    setEmail("")
    setGender("select any")
    setPhoneNumber("")
    setclassNAME("")
    setMotherName("")
    setFatherName("")
    reseterrordefault()
    setmessage(name)
    setAddress("")
  }
}
  return (
    <div className="App">
      <h1> Admission Form</h1>
    <form onSubmit={handleSubmit}>
  
    <label> Mother's Name</label>
      <input type="text" placeholder='Mother Name' value={mother} 
      onChange={(e)=>{setMotherName(e.target.value)}}/><br/>
      <div id="error">{mothernameError}</div><br/>

      <label>Father's Name</label>
      <input type="text" placeholder='Father Name' value={father} 
      onChange={(e)=>{setFatherName(e.target.value)}}/><br/>
      <div id="error">{fathernameError}</div><br/>

      <label>Student's Name</label>
      <input type="text" placeholder='Student Name' value={name} 
      onChange={(e)=>{setName(e.target.value)}}/><br/>
      <div id="error">{nameError}</div><br/>

      <label>Email</label>
      <input type="text" placeholder='email' value={email}
      onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
      <div id="error">{emailError}</div><br/>

      <label> Address</label>
     <textarea rows="1" value={address} placeholder='enter address' onChange={(e)=>{setAddress(e.target.value)}}/><br/>
      <div id="error">{addressError}</div><br/>

      <label>Class Applying For</label> 
      <input type="text" value={classNAME} placeholder='Enter class'
      onChange={(e)=>{setclassNAME(e.target.value)}}/><br/>
      <div id="error">{classNAMEError}</div><br/>

      <label>Gender</label> 
      <select name="gender" value={gender} onChange={(e)=>{setGender(e.target.value)}}>
        <option value="Select Any" selected>Select Any</option>
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="other">other</option>
      </select><br/>
      <div id="error">{genderError}</div><br/>
      <label>Phone Number</label> 
      <input type="text" value={phoneNumber} placeholder='Phone Number'
      onChange={(e)=>{setPhoneNumber(e.target.value)}} /><br/>
      <div id="error">{phoneNumberError}</div><br/>
      
      <div id="error">{emptyError}</div><br/>
      <input id="bt" className=" btn btn-success" type="submit" value="Submit"/><br/>
      
    </form>
    <div>
      <h2 >{message?message+" registered":""}</h2>
    </div>
    </div>
  );
}

export default App;
