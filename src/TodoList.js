import React,{Component,Fragment} from 'react';

class TodoList extends Component{
    // constructor 在组件创建的第一个时刻自动被执行
    constructor(props){
        super(props);
        // 在组件中创建了两个数据，数据一定要定义在state中
        this.state = {
            inputValue:'',
            list:[]
        }
    }

    handleInputChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }

    handleKeyUp(e){
        if(e.keyCode === 13){
            const list = [...this.state.list,this.state.inputValue];
            this.setState({
                list,
                inputValue:''
            });
        }
    }

    handleItemClick(index){
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({list});
    }

    render(){
        return(
            <Fragment>
                <input 
                    value={this.state.inputValue}
                    onChange={this.handleInputChange.bind(this)}
                    onKeyUp={this.handleKeyUp.bind(this)}
                ></input>
                <ul>
                    {
                        this.state.list.map((value,index)=>{
                            return (
                            <li 
                                key={index}
                                onClick={this.handleItemClick.bind(this,index)}
                            >{value}</li>)
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;