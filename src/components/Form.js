import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false    
  });
  
  // const formData2 = { ...formData, firstName: "Ezra", occupation: "student" }
  // console.log(formData2)

  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     firstName: event.target.value
  //   });
  // }

  // function handleLastNameChange(event) {
  //   setFormData(event.target.value);  setFormData({
  //     ...formData,
  //     lastName: event.target.value
  //   });
  // }

  function HandleChange(event) {
    const name = event.target.name
    let value = event.target.value

    if (event.target.type === "checkbox") {
      value = event.target.checked
    }

    setFormData({...formData, [name]: value})
  }

  function HandleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={HandleSubmit}>
      <input type="text" onChange={HandleChange} name="firstName" value={formData.firstName} />
      <input type="text" onChange={HandleChange} name="lastName" value={formData.lastName} />
      <input type="checkbox" onChange={HandleChange} name="admin" value={formData.admin} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
