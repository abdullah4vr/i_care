import React,{Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Issue from './Issue/Issue';
import axios from 'axios';


class Issues extends Component{

    state = {
        il : []
    };
    componentDidMount()
    {
        axios.get('https://mighty-shelf-14586.herokuapp.com/')
        .then(response =>{
            console.log(response.status);
        })

    }
    render()
    {
        let issue_list = [
            {'id' : '1','ward' : '78','location' : '13,Garden Reach Road,Kol:700023',
             'uploader' : 'Salman','image_url' : 'https://images.indianexpress.com/2015/04/raods.jpg','description' : 'Road is Broken'},
             {'id' : '2','ward' : '78','location' : '13,Garden Reach Road,Kol:700023',
             'uploader' : 'Salman','image_url' : 'https://images.indianexpress.com/2015/04/raods.jpg','description' : 'Road is Broken'},
             {'id' : '3','ward' : '78','location' : '13,Garden Reach Road,Kol:700023',
             'uploader' : 'Salman','image_url' : 'https://images.indianexpress.com/2015/04/raods.jpg','description' : 'Road is Broken'},
             {'id' : '4','ward' : '78','location' : '13,Garden Reach Road,Kol:700023',
             'uploader' : 'Salman','image_url' : 'https://images.indianexpress.com/2015/04/raods.jpg','description' : 'Road is Broken'},
             {'id' : '5','ward' : '78','location' : '13,Garden Reach Road,Kol:700023',
             'uploader' : 'Salman','image_url' : 'https://images.indianexpress.com/2015/04/raods.jpg','description' : 'Road is Broken'}            
        ];

        let issues = (
            issue_list.map(item => {
                return (
                        <Col md="12" lg="6">
                        <Issue item={item}/>
                        </Col>
                    );
              }));
         return (
                   <Container>
                   <Row>
                     {issues}
                   </Row>
                   </Container>
                    );
    }
}

export default Issues;