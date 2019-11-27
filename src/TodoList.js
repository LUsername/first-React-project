import React,{Component,Fragment} from 'react';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue:'hello world',
            list:[]
        }
    }

    render(){
        return(
            <Fragment>
                <input value={this.state.inputValue}></input>
                <ul>
                    <li>learn React</li>
                    <li>learn Component</li>
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;