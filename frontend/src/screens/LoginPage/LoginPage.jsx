import React,{ useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MainScreen from '../../component/MainScreen';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loarding from '../../component/Loarding';
import ErrorMessage from '../../component/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userActions';


const LoginPage = ({history}) => {

    const [email,setEmail] = useState("");
    const [password,setPassword]= useState(""); 
    // const [error,setError] = useState(false);
    // const [loading,setLoading] = useState(false);    

    const dispatch  = useDispatch();
    const userLogin  = useSelector((state)=> state.userLogin);
    const { loading,error,userInfo} = userLogin;


    useEffect(() => {
  if(userInfo){
    history.push('/category');
  }
}, [history,userInfo]);

console.log(userInfo);
const submitHandler =async (e) =>{
   e.preventDefault();
   dispatch(login(email,password));
}


  return (
    <>
        <MainScreen>
        <div className='m-5'>
        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}    
        {loading && <Loarding/>}
        <h1>Login</h1>
        <hr />
        <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className='p-2'>
        Submit
      </Button>
    </Form>
    <Row className='my-3'>
        <Col>
         New Customer ? <Link to='/register'>Register Here</Link>
        </Col>
    </Row>
    </div>
    </MainScreen>
    
    </>
  )
}

export default LoginPage