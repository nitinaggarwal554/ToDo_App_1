var $ =require('jquery');

module.exports={
    setTodos: function(todos){
        if($.isArray(todos)){
            localStorage.setItem('todos' , JSON.stringify(todos));
            return todos;
        }
    },
    getTodos:function(){
    var stringTodos=localStorage.getItem('todos');

    var todos=[];
    try{
        todos=JSON.parse(stringTodos);//TRY TO FETCH ALL THE RECORDS WHICH IS FETCH IN THE FORM OF STRING AND PASS IT IN THE FORM OF OBJECT

    }catch(e){

    }
    return $.isArray(todos) ? todos:[]; //IF ANYTHING IN TODO THEN RETURN OTHERWISE RETURN EMPTY

    },

    
    filterTodos: function(todos,showCompleted,searchText){
        var filteredTodos = todos;

        //filter by showcompleted
        filteredTodos = filteredTodos.filter((todo)=>{
        return !todo.completed || showCompleted
    
        });
        //filter by search text
        filteredTodos=filteredTodos.filter((todo)=>{
            var text=todo.text.toLowercase();
            return searchText.length ===0 || text.indexOf(searchText) > -1;
        });
        //sort todos with non completed first

        filteredTodos.sort((a,b)=>{
            if(!a.completed && b.completed){
                return -1;
            }else if(a.completed && !b.completed){
                return 1;
            }else{
                return 0;
            }
        })
        return filteredTodos;
    }

}