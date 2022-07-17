import React from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Edituser(props) {
let navigate = useNavigate();
    let params = useParams();

    // console.log(params);

    // console.log(props.user.user[params.id].name);

const [name,setName]=useState(props.user.user[params.id].name);
const [email,setEmail]=useState(props.user.user[params.id].email);
const [age,setAge]=useState(props.user.user[params.id].age);
const [mobile,setMobile]=useState(props.user.user[params.id].mobile);
const [batch,setBatch]=useState(props.user.user[params.id].batch);




function edit() {


    let data = {
      name,
      email,
      age,
      mobile,
      batch
    }
    console.log(data);

    let users = [...props.user.user];
    users.splice(params.id,1,data)
    props.user.addUser(users);
    navigate('/user-list');

  }


return <div className='mt-5 container-fluid' style={{ width: "50%" }}>
<Form>

  <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="" plactexteholder="Enter name" value={name} onChange={(e) => { setName(e.target.value); }} />



  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Age</Form.Label>
    <Form.Control type="text" placeholder="Enter age" value={age}  onChange={(e) => { setAge(e.target.value); }} />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Mobile</Form.Label>
    <Form.Control type="number" placeholder="Enter mobile no" value={mobile}  onChange={(e) => { setMobile(e.target.value); }} />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Batch</Form.Label>
    <Form.Control type="text" placeholder="Enter batch"  value={batch}  onChange={(e) => { setBatch(e.target.value); }} />
  </Form.Group>

  <div className='d-flex justify-content-center' onClick={() => { edit() }}><Button variant="primary" >
    Update user
  </Button></div>

</Form>
</div>
}

export default Edituser