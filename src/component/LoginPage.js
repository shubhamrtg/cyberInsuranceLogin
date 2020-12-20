import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css'
class LoginPage extends React.Component{
  state={
    zipcode:'',
    Name:''
  }

 validateForm = () => {
    return this.state.zipcode.length === 6 && this.state.Name.length > 0;
  }

  handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target
    this.setState({[name]:value})
  }

 handleSubmit = (event) => {
    event.preventDefault();
    this.props.isLoggedIn(true)
    console.log("Form Submitted")

    if (typeof Storage !== "undefined") {
        localStorage.setItem("zipCode",JSON.stringify(this.state.zipcode))
        localStorage.setItem("Name",this.state.Mame)
    }

    console.log(localStorage.getItem("zipCode"))    
    console.log(localStorage.getItem("Name"))
    

  }
  render(){
    return (

      

      <div className="Login">
              <div class="body">
                
              </div>
          
          
          <br></br>
          
        <Form onSubmit={this.handleSubmit}>
          <div className="login">
            <input
            type="text"
            name="zipcode"
             pattern="[0-9]{6}" 
             required
            placeholder="ZipCode"
              autoFocus
              value={this.state.zipcode}
              onChange={this.handleChange}
            />
            <br/>
            <br/>
            <input
            type="text"
            name="Name"
            placeholder="Name"
              value={this.state.Name}
              onChange={this.handleChange}
            />
          <br/>
          <br/>
          <Button block size="lg" type="submit" disabled={!this.validateForm()}>
            Get a Quote
          </Button>
          </div>
        </Form>
      </div>
    );
  }
  
}

export default LoginPage