var React=require('react');
var uuid=require('node-uuid');
var moment=require('moment');

var TodoList=require('TodoList');
var AddTodo=require('AddTodo');
var TodoSearch=require('TodoSearch');
var TodoApi=require('TodoApi');

var TodoApp=React.createClass({
    getInitialState:function(){
        return{
            showCompleted:false,
            searchText:'',
            todos:TodoApi.getTodos()
        }
    },
    componentDidUpdate:function(){
        TodoApi.setTodos(this.state.todos);
    },
    handleAddTodos:function(text){
        this.setState({
            todos:[
                ...this.state.todos,
                {
                    id:uuid(),
                    text:text,
                    completed: false,
                    createdAt: momemnt().unix(),
                    completedAt:undefined
                }
            ]
        })
    },
    handleToggle:function(id){
        var updatedTodos = this.state.todos.map((todo)=>{
            if(todo.id ===id){
                todo.completed=!todo.completed;
                todo.completedAt=todo.completedAt ? moment().unix() :undefined;

            }
            return todo;
        })
        this.setState({todos:updatedTodos})
    },
    handleSearch: function(showCompleted, searchText){
        this.setState({
            showCompleted:showCompleted,
            searchText:searchText.toLowercase()
        })
    },
    render : function(){
        var {todos, showCompleted, searchText} = this.setState;
        var filteredTodos=TodoApi.filterTodos(todos, showCompleted,searchText);
        return(
            <div>
            <h1 className="page-title">Todo APP</h1>
            <div className="row">
                <div className="column small-centered small-11 medium-6 large-5">
                    <div className="container"> 
                    <TodoSearch onSearch={this.handleSearch}/>
                    <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                    <AddTodo onAddTodo={this.handleAddTodos}/>
                        </div>
                        </div>
            </div>
            </div>
        )
    }

})
module.exports=TodoApp;