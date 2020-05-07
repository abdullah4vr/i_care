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
        up : 0,
        selectedFile : null
    }


    fileSelectedHandler = event =>{
        console.log(event.target.files[0]);
        this.setState({selectedFile : event.target.files[0]});
        let desc = document.getElementById('desc').value;
        console.log(desc);
    }


    fileUploadHandler = () =>{
        const fd = new FormData();
        let desc = document.getElementById('desc').value;
        console.log(desc);
        //fd.set('desc',desc);
        //fd.append('upfile',this.state.selectedFile,this.state.selectedFile.name);
        fd.set('title',desc);
        fd.set('body','foo');
        fd.set('userId','1');
        console.log(fd);
        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: fd,
            headers: {'content-Type': 'multipart/form-data' }
            }).then(response =>{
            console.log(response);
            document.writeln("Bad");
            alert("Nothing happened");
        }).catch(error => {
            document.writeln(error);
               alert("Something happened");
          });
        alert("What has happened");
    }

    componentDidMount()
    {
                
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
                    <Form >
                    <Form.Label><strong>Image of the place</strong></Form.Label>
                    <Form.Group controlId="Upload the image">
                    <Form.File 
                          id="custom-file"
                          label="Upload the image"
                          name="upfile"
                          onChange = {this.fileSelectedHandler}
                               custom
                              />
                    </Form.Group >
                   <Form.Group  style = {{'marginTop' : '10%'}}>
                   <Form.Label><strong>Issue Description</strong></Form.Label>
                   <Form.Control name='desc' type="text" placeholder="Briefly describe the issue " id="desc"/>
                    </Form.Group>
                    <Button type="submit" onClick={this.fileUploadHandler}>Submit form</Button>
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