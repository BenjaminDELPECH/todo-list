import React, {Component} from 'react'

class TodoList extends Component {
    constructor(){
        super();
        this.state={
            userInput:'',
            items:[]
        };
    }

    onChange(event){
        this.setState({
            userInput: event.target.value
        });
    }
    
    addTodo(event){
        event.preventDefault();
        this.setState({
            items: [...this.state.items, this.state.userInput],
            // Input reseted
            userInput: ''
        }, ()=> console.log(this.state));
    }

    deleteTodo(item){
        let array = this.state.items;
        const index= array.indexOf(item);
        array.splice(index,1)
        this.setState({
            items: array
        });
    }

    renderTodos(){
        return this.state.items.map((item) =>{
            return (
                <li key={item} className="list-group-item">
                    {item} | <button onClick={this.deleteTodo.bind(this, item)}>X</button>
                </li>
            )
        });
    }

    

    render(){
        return(
            <div>
                <h1 align="center">Ma TodoList</h1>
                <form className="form-row align-items-center">
                    <input 
                        value={this.state.userInput} 
                        onChange={this.onChange.bind(this)}
                        type="text" 
                        placeholder="Renseigner un item..." 
                        className="form-control mb-2"
                    />
                    <button 
                        type="submit"
                        onClick={this.addTodo.bind(this)}
                        className="btn btn-primary">
                    Ajouter
                    </button>
                       
                </form>
                <ul class="list-group">
                    {this.renderTodos()}
                </ul>
            </div>
        )
    }
}

export default TodoList;