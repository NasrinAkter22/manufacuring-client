import React from 'react';
import { Button } from 'react-bootstrap';

const ManageSingleItem = ({inventory,DeleteItem}) => {
    console.log(inventory)
    const{name,_id,email}=inventory
    return (
        <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>  <Button onClick={()=>DeleteItem(_id)} variant="outline-danger">Delete</Button></td>
        
      </tr>
    );
};

export default ManageSingleItem;