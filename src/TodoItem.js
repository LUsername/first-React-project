import React,{Component,Fragment} from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(){
        
    }

    render(){
        // 子组件通过this.props的属性，从父组件接受传递过来的值
        const {content} = this.props;
        return (
        <li onClick={this.handleItemClick}>{content}</li>
        );
    }
}

export default TodoItem;