import React,{Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Issue from '../Issue/Issue';
import axios from 'axios';
import {NavLink} from 'react-router-dom';


class Issues extends Component{

    state = {
        issue_list : []
    };
    componentDidMount()
    {
        axios.get('https://mighty-shelf-14586.herokuapp.com/')
        .then(response =>{
            var titli =JSON.parse(response.data);
            this.setState({issue_list : titli.issues});
        })

    }
    render()
    {

        let issues = (
            this.state.issue_list.map(item => {
                return (
                       
                        <Col md="12" lg="6" key ={item.id}>
                        <NavLink to={"/issue/"+item.id}
                        exact
                        activeClassName="my-active"
                        activeStyle={{  
                        textDecoration: 'None'
                        }}>
                        <Issue item={item}/>
                        </NavLink>
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