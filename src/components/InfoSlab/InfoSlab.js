import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

class InfoSlab extends Component{
    render()
    {
        return (
            <Jumbotron>
            <h1>Hello user ,</h1>
            <p>
              Here we have all the different issues raised in your ward. Please
              upvote an issue which you think needs to be delt with. 
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>  
                    );
    }
}

export default InfoSlab;

