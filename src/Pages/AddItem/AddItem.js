import React, { Fragment } from 'react';
import { Form } from 'react-bootstrap';
import Navbar from '../Shared/Navbar/Navbar';
import { toast, ToastContainer } from 'react-toastify'
import Footer from '../Shared/Footer/Footer';

const AddItem = () => {
  const fromsubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const supplierName = event.target.supplierName.value;
    const imgURL = event.target.imgURL.value;
    const quantity = event.target.quantity.value;
    const price = event.target.price.value;

    const description = event.target.description.value;
    const email = event.target.email.value;
    const user = { name, supplierName, imgURL, quantity, price, description, email };

    fetch('http://localhost:5000/inventorys', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(Response => Response.json())
      .then(data => {
        toast('Your Data Submit is sucess');
        event.target.reset()
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (

    <Fragment>
      <Navbar></Navbar>
      <div className="container">
        <section id="contact" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body mt-5">
                    <h4 className="text-center text-uppercase pb-4">Please Update your item</h4>
                    <form onSubmit={fromsubmit} >
                      <div className="row mt-4">
                        <div className="col-md-6 ">
                          <div className="form-group">
                            <input type="text" name='name' required placeholder="Name" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6 ">
                          <div className="form-group">
                            <input name='supplierName' required type="text" placeholder="supplier Name" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6 my-2">
                          <div className="form-group">
                            <input name='imgURL' type="text" required placeholder=" img Url " className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6 my-2 ">
                          <div className="form-group">
                            <input name='quantity' type="number" required placeholder="quantity" className="form-control" />
                          </div>
                        </div>

                        <div className="col-md-6 my-2">
                          <div className="form-group ">
                            <input name='price' required type="number" placeholder="Price" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6 w-50 my-2">
                          <div className="form-group ">
                            <input name='email' required type="email" placeholder="Email" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-12 mt-4">
                          <div className="form-group">
                            <textarea name='description' required cols="30" rows="5" className="form-control" placeholder="Description"></textarea>
                          </div>
                        </div>

                        <div className="col-md-12 my-4">
                          <input type="submit" className="btn btn-block btn-dark" value="Add" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

          
      </div>
      <Footer/> 
      <ToastContainer/>
    </Fragment>
  );
};

export default AddItem;
