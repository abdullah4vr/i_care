import React,{Component} from 'react';
import NavBar from '../NavBar/NavBar'
import Container from 'react-bootstrap/Container';
import InfoSlab from '../InfoSlab/InfoSlab'
import Issues from '../Issues/Issues';


class IssueListing extends Component{
    render()
    {
         return (<Container>
                    <NavBar/>
                    <InfoSlab/>
                    <Issues/>
                    </Container>
                    );
    }
}

export default IssueListing;