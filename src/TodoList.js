import React,{Component,Fragment} from 'react';

class TodoList extends Component{
    render(){
        return(
            <Fragment>
                <input></input>
                <ul>
                    <li>learn React</li>
                    <li>learn Component</li>
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;