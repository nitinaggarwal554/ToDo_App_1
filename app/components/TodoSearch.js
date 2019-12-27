var React = require('react');

var TodoSearch=React.createClass({
handelSearch:function(){
    var showCompleted=this.refs.showCompleted.checked;
    var searchText=this.refs.searchText.value;

    this.props.onSearch(showCompleted ,searchText)
},

    render: function()
{
return(
<div className="container__header">
<div>
    <input type="search" ref="searchText" placeholder="search todos" onChange={this.handelSearch}/>
</div>
<div>
    <label>
        <input type="checkbox" ref="showCompleted" onChange={this.handelSearch}/>
    show completed todos
    </label>
</div>
</div>
        )
    }
})

module.exports=TodoSearch;