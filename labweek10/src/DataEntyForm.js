import React, {Component } from 'react'
import {Form, Row, Button, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class DataEntyForm extends Component{

    constructor(props){
        super(props)

        this.state = {
            email:" ",
            name: " ",
            address: " ",
            address2: " ",
            city: " ",
            province: " ",
            postal: " ",
            checkbox:false,
            showDisplay:false
        }
       
    }
    
    readData = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    checkbox = (event) =>{
        event.preventDefault();
        this.setState({checkbox:true})
    }


    submitData = (event) =>{
        event.preventDefault();
        if(this.state.checkbox == true){
            this.setState({showDisplay:true});
        }
        else{
            alert('Please Agree to the Terms Condition')
        }
    }


    provinces = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador",
                "Nova Scotia", "Ontario", "Prince Edwards Island", "Quebec", "Saskatchewan"]

    render(){
        
        return(
            <div>
                 <h1 >Data Entry Form</h1>
      <Form onSubmit={this.submitData}>
          <Row className="mb-3">
            <Col>
            <Form.Group >
              <Form.Label>Email</Form.Label>
              <Form.Control value = {this.state.email} onChange={this.readData} name="email" type="email" placeholder="Enter email" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group  >
                <Form.Label>Name</Form.Label>
                <Form.Control value = {this.state.name} onChange={this.readData} name="name" type="Name" placeholder="Full Name" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
              <Form.Group  >
                <Form.Label>Address</Form.Label>
                <Form.Control value = {this.state.address} onChange={this.readData} name="address" placeholder="1234 Main St" />
              </Form.Group>
          </Row >
          <Row className="mb-3">
              <Form.Group  >
                <Form.Label>Address 2</Form.Label>
                <Form.Control value = {this.state.address2} onChange={this.readData} name="address2"  placeholder="Apartment, studio, or floor" />
              </Form.Group>
          </Row>

          <Row className="mb-3">
            <Col>
            <Form.Group  >
              <Form.Label>City</Form.Label>
              <Form.Control value = {this.state.city} name="city" onChange={this.readData} />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group  >
                <Form.Label>Province</Form.Label>
                <Form.Select value = {this.state.province} name="province" onChange={this.readData} defaultValue="Choose...">
                    <option>Choose...</option>
                    {
                        this.provinces.map(v => {
                            return (<option>{v}</option>)
                        })
                    }
                </Form.Select>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control value = {this.state.postal} name="postal" onChange={this.readData} />
              </Form.Group>
            </Col>
          </Row>

       
          <Form.Group className="mb-3" >
            <Form.Check value = {this.state.checkbox} name="checkbox"  onChange={this.checkbox} type="checkbox" label="Agree Terms Condition?"/>
          </Form.Group>
          <button>send</button>
         </Form>

          {this.state.showDisplay && 
          <div>
            <p>Email: {this.state.email}</p>
            <p>Full Name: {this.state.name}</p>
            <p>Address: {this.state.address} {this.state.address2}</p>
            <p>City: {this.state.city}</p>
            <p>Province: {this.state.province}</p>
            <p>Postal Code: {this.state.postal}</p>
        </div>
          }
     </div>
        )
    }
}