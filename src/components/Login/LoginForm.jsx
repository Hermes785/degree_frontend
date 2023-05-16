import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { useSpring, animated }  from '@react-spring/web';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSocialButtons, setShowSocialButtons] = useState(false);
  const socialButtonsAnimation = useSpring({
    opacity: showSocialButtons ? 1 : 0,
    transform: showSocialButtons ? 'translateY(0px)' : 'translateY(50px)',
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    
    console.log(email)
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(password)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
let bodyFormData=new FormData()
 bodyFormData.set('email',email)
 bodyFormData.set('password',password)

axios.get('http://127.0.0.1:5000/login', bodyFormData)
.then(res => {
    console.log(res.data)
    localStorage.setItem('token', res.data.token); // stocker le token dans le localStorage
    // this.setState({ redirect: true })
   // this.setState({ redirect: true })
})
.catch(error => {
    
      alert("Une erreur est servenu veuillez ressayer")

    
})
    // Submit login data to backend
  };

  const handleShowSocialButtons = () => {

    setShowSocialButtons(true);
  };

  /*
  const handleLinkedInLogin = async () => {
    try {
      const response = await axios.get('http://localhost:5000/auth/linkedin');
      if (response.data && response.data.accessToken) { 
       // const urlToGetLinkedInAccessToken = 'https://www.linkedin.com/oauth/v2/accessToken';
        localStorage.setItem('accessToken',response.data.accessToken);
        console.log(response.data.accessToken);
      } else {
        console.error('Access token not found in response');
      }
    } catch (error) {
      console.error('Error occurred during LinkedIn login:', error);
    }
  };
  */
  const handleLinkedInLogin = async () => {
    try {
      const response = await axios.get('http://localhost:5000/auth/linkedin');
      if (response.data && response.data.accessToken) { 
        // Récupérer le token d'accès depuis la réponse
        const accessToken = response.data.accessToken;
        console.log(accessToken);
        
        // Stocker le token dans le localStorage ou effectuer toute autre opération nécessaire
        localStorage.setItem('accessToken', accessToken);
      } else {
        console.error('Access token not found in response');
      }
    } catch (error) {
      console.error('Error occurred during LinkedIn login:', error);
    }
  };
  
  

  return (
  <><Header/>
    
    <Container className="mt-2">
      <Form onSubmit={handleSubmit} className="border p-4 shadow">
        <h1 className="text-center mb-4">Login</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </Form.Group>
  <br />
        <Button variant="success" type="submit" block>
          Login
        </Button>
        <div>
          <p>You dont have Account ? click <Link to={"/registration"}> Here </Link> </p>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <Form.Check type="checkbox" label="Remember me" />
          <a href="/" className='text-success'>Forgot password?</a>
        </div>

        <animated.hr className="mt-4 mb-4" style={socialButtonsAnimation} />
        <p className='text-success'>Or</p>

        <div className="mb-3 d-flex ">
          <Button variant="danger" onMouseEnter={handleShowSocialButtons}>
            <FaGoogle /> <Link to={'http://localhost:5000/auth/google'} style={{ textDecoration:'none',color:'white' }}>Login with Google</Link>
          </Button>
          <span style={{ width: '10px' }}></span>
          <Button variant="primary" onMouseEnter={handleShowSocialButtons}>
            <FaFacebook /> <Link to={'http://localhost:5000/auth/facebook'} style={{ textDecoration:'none',color:'white' }}> Login with Facebook</Link>
          </Button>
          <span style={{ width: '10px' }}></span>
          <Button variant="info" onMouseEnter={handleShowSocialButtons}>
      <FaLinkedin />{' '}
      <Link to="#" onClick={handleLinkedInLogin} style={{ textDecoration: 'none', color: 'white' }}>
        Login with LinkedIn
      </Link>
    </Button>
        </div>
      </Form>
    </Container>
    </>
  );
};

export default LoginForm;
