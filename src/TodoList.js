import React,{Component,Fragment} from 'react';
import './style.css';

class TodoList extends Component{
    // constructor 在组件创建的第一个时刻自动被执行
    constructor(props){
        super(props);
        // 优化一：避免因事件触发，同一函数多次生成
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
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
        if(e.keyCode === 13 && e.target.value !== ''){
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

    // 优化二
    getListItems(){
        return this.state.list.map((value,index)=>{
            return (
            <li 
                key={index}
                onClick={this.handleItemClick.bind(this,index)}
                dangerouslySetInnerHTML={{__html:value}}
            ></li>)
        });
    }

    render(){
        return(
            <Fragment>
                {/* 这是jsx中的注释 */}
                <label htmlFor="myinput">请输入内容：</label>
                <input 
                    id='myinput'
                    className='input'
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleKeyUp}
                ></input>
                <ul>{this.getListItems()}</ul>
            </Fragment>
        )
    }
}

export default TodoList;