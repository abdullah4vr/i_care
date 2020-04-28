import React,{Component} from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from '../NavBar/NavBar';
import InfoSlab from '../InfoSlab/InfoSlab'
import Issue from '../Issue/Issue';
import axios from 'axios';
import Comments from '../Comments/Comments'
import './SingleIssue.css'

class SingleIssue extends Component{

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
        let issue = 
            {'id' : '1','ward' : '78','location' : '13,Garden Reach Road,Kol:700023',
             'uploader' : 'Salman','image_url' : 'https://images.indianexpress.com/2015/04/raods.jpg','description' : 'Road is Broken',
            'comments' : [{'author' : 'Sanawwar','text' : 'Genuine issue'},
                           {'author' : 'kallu'   , 'text' : 'Not a priority'}]};

        
         return (
                   <Container>
                        <NavBar/>
                        <InfoSlab/>
                        <Container style ={ {'text-align' : 'center'}}>
                        <Issue item = {issue}/>
                         <Comments commentList ={issue.comments}/>
                        </Container>    
                        
                   </Container>
                    );
    }
}

export default SingleIssue;