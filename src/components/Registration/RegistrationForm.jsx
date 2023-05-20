import React,{useState} from  "react";
import { Container, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { useSpring, animated }  from '@react-spring/web';
import { Link } from "react-router-dom";
import Header from '../header/Header';
import axios from "axios";
import Config from "../Settings/config";


const  RegistrationForm = () => {
 const [name,setName]=useState('');
 const [first_name,setFirs_tName]=useState('');
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');
 const [confirm_Password,setConfirmPassword]=useState('');
 const [showSocialButtons, setShowSocialButtons] = useState(false);
 const [errorMessage,setErrorMessage] = useState('');
 const [successMessage,setSuccessMessage]=useState('');
 const socialButtonsAnimation = useSpring({
    opacity: showSocialButtons ? 1 : 0,
    transform: showSocialButtons ? 'translateY(0px)' : 'translateY(50px)',
  });

const handleEmailChange= (e)=>{
    setEmail(e.target.value);
    console.log(email)

}

const handleNameChange= (e)=>{
    setName(e.target.value)
    console.log(name)
}
const handleFirtsNameChange = (e)=>{
    setFirs_tName(e.target.value)
    console.log(first_name)
}


const handlePasswordChange=(e)=>{
    setPassword(e.target.value)
    console.log(password)

}
const handleConfirmPasswordChange=(e)=>{
    setConfirmPassword(e.target.value);
    console.log(confirm_Password)
}
const handleShowSocialButtons = () => {
    setShowSocialButtons(true);
  };


  const handleSubmit=(e)=>{
    e.preventDefault();

    if (password !== confirm_Password) {
      alert("Passwords don't match");
      return;
    }
    const data = {
      name: name,
      first_name: first_name,
      email: email,
      password: password,
      confirm_Password: confirm_Password
    };
    
    axios.post(Config.url_registration, data)
      .then(res => {
        console.log(res.data)
        setSuccessMessage(res.data.message)
        
      })
      .catch(error => { 
        console.log(error.response)
        setErrorMessage(error.response.data.message)
      });
    
  }
  

 return (
    <><Header/>
      
      <Container className="mt-5">
      {errorMessage && <h2 className="alert alert-danger">{errorMessage}</h2>}
      {successMessage && <h2 className="alert alert-success">{successMessage}</h2>}

        <Form onSubmit={handleSubmit} className="border p-4 shadow">
          <h1 className="text-center mb-4">Register</h1>


          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" value={name} onChange={handleNameChange} />
          </Form.Group>


          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your First Name" value={first_name} onChange={handleFirtsNameChange} />
          </Form.Group>
  


          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your Password" value={password} onChange={handlePasswordChange} />
          </Form.Group>

          <Form.Group controlId="formBasicComfirmPassword">
            <Form.Label>Comfirm Password</Form.Label>
            <Form.Control type="password" placeholder="comfirm your Password" value={confirm_Password} onChange={handleConfirmPasswordChange} />
          </Form.Group>
    <br />
          <Button variant="success" type="submit" block>
            Register
          </Button>
  
          <animated.hr className="mt-4 mb-4" style={socialButtonsAnimation} />
     <p className="text-success"> Or use </p>
          <div className="mb-3 d-flex ">
          <Button variant="danger" onMouseEnter={handleShowSocialButtons}>
            <FaGoogle /> <Link to={'http://localhost:5000/auth/google'} style={{ textDecoration:'none',color:'white' }}> Google</Link>
          </Button>
          <span style={{ width: '10px' }}></span>
          <Button variant="primary" onMouseEnter={handleShowSocialButtons}>
            <FaFacebook /> <Link to={'http://localhost:5000/auth/facebook'} style={{ textDecoration:'none',color:'white' }}>Facebook</Link>
          </Button>
          <span style={{ width: '10px' }}></span>
          <Button variant="info" onMouseEnter={handleShowSocialButtons}>
            <FaLinkedin /> <Link to={'http://localhost:5000/auth/linkedin'} style={{ textDecoration:'none',color:'white' }}> LinkedIn</Link>
          </Button>
        </div>
        </Form>
      </Container>
      </>
    );
  };
  

  

export default RegistrationForm;