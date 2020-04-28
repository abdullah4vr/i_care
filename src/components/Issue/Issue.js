import React,{Component} from 'react';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import './Issue.css';

class Issue extends Component{
    render()
    {
        return(
            <React.Fragment>
            <Row style ={ {'display': 'inline-block','marginBottom' : '40px'}}>
                <Image src={this.props.item.image_url} thumbnail />
            </Row>
            <Row style ={ {'display': 'block'}}>
               <strong>Uploaded by {this.props.item.uploader}</strong>
            </Row>
            <Row style ={ {'display': 'block'}}>
               <p><strong>Location :</strong> {this.props.item.location}</p>
            </Row>
           <Row style ={ {'display': 'block'}}><p>{this.props.item.description}</p>
           </Row>
            </React.Fragment>
        );
    }
}

export default Issue;