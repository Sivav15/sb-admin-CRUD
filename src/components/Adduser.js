import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Adduser(props) {
  console.log(props.user);
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [age, setAge] = useState(" ");
  const [mobile, setMobile] = useState(" ");
  const [batch, setBatch] = useState(" ");

  let navigate = useNavigate();

  function submithandle() {


    let data = {
      name,
      email,
      age,
      mobile,
      batch
    }
    console.log(data);

    let users = [...props.user.user];
    users.push(data);
    props.user.addUser(users);
    navigate('/user-list');

  }


  return <div className='mt-5 container-fluid' style={{ width: "50%" }}>
    <Form>

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e) => { setName(e.target.value); }} />



      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value); }} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter age" onChange={(e) => { setAge(e.target.value); }} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" placeholder="Enter mobile no" onChange={(e) => { setMobile(e.target.value); }} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter batch" onChange={(e) => { setBatch(e.target.value); }} />
      </Form.Group>

      <div className='d-flex justify-content-center' onClick={() => { submithandle() }}><Button variant="primary" >
        Add user
      </Button></div>

    </Form>
  </div>
}

export default Adduser