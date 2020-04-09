import React,{Component} from 'react';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';


class Issue extends Component{
    render()
    {
        return(
            <React.Fragment>
            <Row>
                <Image src={this.props.item.image_url} thumbnail />
            </Row>
            <Row>
               <strong>Uploaded by {this.props.item.uploader}</strong>
            </Row>
            <Row>
               <p><strong>Location :</strong> {this.props.item.location}</p>
            </Row>
           <Row><p>{this.props.item.description}</p>
           </Row>
            </React.Fragment>
        );
    }
}

export default Issue;