import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';
import Alert from '../utils/alert';

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rollno: '',
      dateOfBirth:'',
      level: '',
      section: '',
      gender: '',
      fatherName:'',
      motherName:'',
      address:'',
      contactNumber: '',
      alertVariant: 'none',
      alertMsg: '',
    }
  }

  handleStudentNameChange = (evt) => {
    this.setState({
      name: evt.target.value,
    })
  }


  handleStudentRollnoChange = (evt) => {
    this.setState({
      rollno: evt.target.value,
    })
  }

  handleStudentdateOfBirthChange = (evt) => {
    this.setState({
      dateOfBirth: evt.target.value,
    })
  }

  handleStudentlevelChange = (evt) => {
    this.setState({
      level: evt.target.value,
    })
  }

  handleStudentsectionChange = (evt) => {
    this.setState({
      section: evt.target.value,
    })
  }

  handleStudentgenderChange = (evt) => {
    this.setState({
      gender: evt.target.value,
    })
  }

  handleStudentfatherNameChange = (evt) => {
    this.setState({
      fatherName: evt.target.value,
    })
  }

  handleStudentmotherNameChange = (evt) => {
    this.setState({
      motherName: evt.target.value,
    })
  }

  handleStudentaddressChange = (evt) => {
    this.setState({
      address: evt.target.value,
    })
  }

  handleStudentcontactNumberChange = (evt) => {
    this.setState({
      contactNumber: evt.target.value,
    })
  }

  handleSubmitDetails = () => {
    const { name, rollno, dateOfBirth, level, section, gender, fatherName, motherName, address, contactNumber } = this.state;
    const data = {
      name,
      rollno,
      dateOfBirth,
      level,
      section,
      gender,
      fatherName,
      motherName,
      address,
      contactNumber
    };

    if (name === '' || rollno === ''||dateOfBirth===''||level===''||section===''||gender===''||fatherName===''||motherName===''||address===''||contactNumber==='') {
      this.setState({
        alertVariant: 'danger',
        alertMsg: 'All field are required',
      })
    } else {
      axios.post('https://fierce-dusk-60690.herokuapp.com/students/create-student', data)
        .then((res) => {
          console.log(res.data);
          this.setState({
            alertVariant: 'success',
            alertMsg: 'Student successfully created'
          })
        }).catch((error) => {
          this.setState({
            alertVariant: 'danger',
            alertMsg: 'Something went wrong! Please try again later.',
          })
          console.log(error);
        })
      this.resetFormValue();
    }

  }

  resetFormValue = () => {
    this.setState({
      name: '',
      rollno: '',
      dateOfBirth:'',
      level: '',
      section: '',
      gender: '',
      fatherName:'',
      motherName:'',
      address:'',
      contactNumber: ''
    })
  }

  handleAlertClose = () => {
    this.setState({
      alertVariant: 'none',
      alertMsg: '',
    })
  }

  render() {
    const { name, rollno,dateOfBirth, level, section, gender, fatherName, motherName, address, contactNumber, alertVariant, alertMsg } = this.state;
    return (
      <div className="student-create-wapper">
        <h1> Create student list</h1>
        {
          alertVariant === 'none' ? null : <Alert alertVariant={alertVariant} alertMsg={alertMsg} handleAlertClose={this.handleAlertClose}/>
        }
        <Form>
        <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" value={name} onChange={(evt) => this.handleStudentNameChange(evt)} />
          </Form.Group>

          <Form.Group controlId="Roll No">
            <Form.Label>Roll No</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Roll No" value={rollno} min='0' onChange={(evt) => this.handleStudentRollnoChange(evt)} />
          </Form.Group>

            <Form.Group controlId="DOB">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" placeholder="Date of Birth" value={dateOfBirth}  onChange={(evt) => this.handleStudentdateOfBirthChange(evt)} />                    
            </Form.Group>
          
          <Form.Group controlId="Class">
            <Form.Label>Class</Form.Label>
            <Form.Control as="select" placeholder="Select Your Class" value={level}  onChange={(evt) => this.handleStudentlevelChange(evt)} >
            <option>Select your Class</option>
               <option value="I">I</option>
               <option value="II">II</option>
               <option value="III">III</option>
               <option value="IV">IV</option>
               <option value="V">V</option>
               <option value="V1">V1</option>
               <option value="V11">V11</option>
               <option value="V111">V111</option>
               <option value="1X">1X</option>
               <option value="X">X</option>
               <option value="X11">X11</option>
               <option value="X12">X12</option>
      </Form.Control>
          </Form.Group>

          <Form.Group controlId="Section">
            <Form.Label>Section</Form.Label>
            <Form.Control as="select" placeholder="Select Your Section" value={section}  onChange={(evt) => this.handleStudentsectionChange(evt)} >
            <option>Select your Section</option>
               <option value="A">A</option>
               <option value="B">B</option>
               <option value="C">C</option>
    </Form.Control>
          </Form.Group>

          <Form.Group controlId="Gender">
            <Form.Label>Gender</Form.Label>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3" value={gender}  onChange={(evt) => this.handleStudentgenderChange(evt)}>
                <Form.Check
                    inline
                    label="Male"
                    value="Male"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                />
                <Form.Check
                    inline
                    label="Female"
                    value="Female"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Father Name</Form.Label>
            <Form.Control type="text" placeholder="Father Name" value={fatherName} min='0' onChange={(evt) => this.handleStudentfatherNameChange(evt)} />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Mother Name</Form.Label>
            <Form.Control type="text" placeholder="Mother Name" value={motherName} min='0' onChange={(evt) => this.handleStudentmotherNameChange(evt)} />
          </Form.Group>

          <Form.Group controlId="Address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address Here" value={address} min='0' onChange={(evt) => this.handleStudentaddressChange(evt)} />
          </Form.Group>

          <Form.Group controlId="Number">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="text" placeholder="Valid Contact Number" value={contactNumber} min='0' onChange={(evt) => this.handleStudentcontactNumberChange(evt)} />
          </Form.Group>
          <br/>

          <Button variant="success" size="lg" block="block" onClick={(evt) => this.handleSubmitDetails(evt)}>
            Create Student
          </Button>
        </Form>
      </div>
    );
  }
}
