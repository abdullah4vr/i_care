import React,{Component} from 'react';
import Row from 'react-bootstrap/Row';


class Comments extends Component{
    render()
    {
        let comment_list = (
            this.props.commentList.map(item => {
                return (
                    <React.Fragment>
                        <Row style ={{'display': 'block','margin-bottom' : '40px'}}>
                              {item.text}
                              <br/>
                              <strong>{item.author}</strong>
                        </Row>
                </React.Fragment>
                );
            }
        ));
        return(
           <React.Fragment>
               <h3>Comments</h3>
               {comment_list}
           </React.Fragment> 
        );
    }
}

export default Comments;