import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {Link,useNavigate} from 'react-router-dom';

function Userlist(props) {
let navigate = useNavigate();
   function handleDelete(i){
 
    let del = [...props.user.user];
    del.splice(i,1);
    props.user.addUser(del);

  
   }

  return <>
  
  <div className="container-fluid">

  <div className="container-fluid  d-flex justify-content-center mt-3">

  <Link to='/add-user'> <Button variant="secondary" >Create new user</Button></Link>
  </div>


<div className='overflow'>
<Table  bordered className=' mt-3 ' >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Mobile</th>
          <th>Batch</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
    props.user.user.map((e,i)=>{
      return<tr key={i}>


<td>{i+1}</td>
          <td>{e.name}</td>
          <td>{e.email}</td>
          <td>{e.age}</td>
          <td>{e.mobile}</td>
          <td>{e.batch}</td>
          <td><Button variant="success" onClick={()=>{navigate(`/edit-user/${i}`)}}>Edit</Button>&nbsp;&nbsp;<Button variant="danger" onClick={()=>{handleDelete(i)}}>Delete</Button></td>
        </tr>
            
    })
}
      </tbody>
    </Table>

</div>
  

  </div>
  </>
}

export default Userlist;