import React,{Component} from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from '../NavBar/NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import LocMap from "../LocMap/LocMap";
class AddIssue extends Component{
    state = {
        myLat : 47.44,
        myLong : -122.444,
        up : 0
    }
    componentDidMount()
    {
        axios.get('https://mighty-shelf-14586.herokuapp.com/')
        .then(response =>{
            console.log(response.status);
        })
        
        let x = navigator.geolocation;
        
		let success =(position) =>
		{
            if(this.state.up === 0)
			 {
                 this.setState({up : 1,myLat : position.coords.latitude,myLong : position.coords.longitude});
                 console.log("what");
             }
			//myLong = position.coords.longitude;
			//let map = new google.maps.Map(document.getElementById("map"),mapOptions);
			//let marker = new google.maps.Marker({map: map,position : coords});
            console.log(position.coords);
            console.log(this.state.up);
		}
        x.getCurrentPosition(success,failure);
    

		function failure(){
			console.log("Error occured");
        }
    }
    render()
    {  
        let mymap =null;
        if(this.state.up !== 0)
           mymap = (
            <Container style = {{'height' : '50%','width' : '50%','display' : 'block','marginTop' : '10px'}}>
            <LocMap lat={this.state.myLat} long = {this.state.myLong}/> 
            </Container>  
           ); 
         return (
                   <React.Fragment>
                   <Container>
                        <NavBar/>
                    <Container style ={ {'textAlign' : 'center'}}>
                    <Container style ={{'dispay' : 'block','width' : '50%',
                     'marginTop' : '100px'}}>
                    <Form>
                    <Form.Label><strong>Image of the place</strong></Form.Label>
                    <Form.Group controlId="Upload the image">
                    <Form.File 
                          id="custom-file"
                          label="Upload the image"
                               custom
                              />
                    </Form.Group >
                   <Form.Group controlId="IssueDesc" style = {{'marginTop' : '10%'}}>
                   <Form.Label><strong>Issue Description</strong></Form.Label>
                   <Form.Control type="email" placeholder="Briefly describe the issue " />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                        </Form>  
                        </Container>                            
                    </Container> 
                   </Container>
                   {mymap}
                   </React.Fragment>
                    );
    }
}

export default AddIssue;