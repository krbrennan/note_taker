(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),l=a.n(i),c=(a(16),a(2)),s=a(3),r=a(6),h=a(4),m=a(1),u=a(5),d=(a(8),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(h.a)(t).call(this,e))).state={isComplete:!1},a.handleCheckbox=a.handleCheckbox.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleCheckbox",value:function(e){e.persist(),"delete-item-checkbox"===e.target.className?this.props.onClick(this.props.content.id,e.target.className):(this.setState({isComplete:!!this.state.isComplete}),this.props.onClick(this.props.content.id,e.target.className))}},{key:"render",value:function(){var e=!0===this.props.content.isComplete?1:0;return o.a.createElement("div",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",onClick:this.handleCheckbox,defaultChecked:e}),o.a.createElement("p",{className:"todo-words",style:1===e?{textDecoration:"line-through"}:{textDecoration:"none"}},this.props.content.text),o.a.createElement("div",{className:"delete-item-col"},o.a.createElement("h3",null,"Delete"),o.a.createElement("input",{className:"delete-item-checkbox",type:"checkbox",onClick:this.handleCheckbox})))}}]),t}(o.a.Component)),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(h.a)(t).call(this,e))).state={toDoItemValue:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.clearInputField=a.clearInputField.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({toDoItemValue:e.target.value})}},{key:"clearInputField",value:function(){this.setState({toDoItemValue:""})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(e.target[0].defaultValue),this.clearInputField()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,o.a.createElement("h3",null,"Add Item:"),o.a.createElement("input",{type:"text",placeholder:"New Item, Wow, Incredible",onChange:this.handleChange,value:this.state.toDoItemValue,className:"add-item-text"}))))}}]),t}(o.a.Component);var b=function(){return o.a.createElement("div",{className:"header"},o.a.createElement("h1",{className:"header-text"},"Revolutionary To-Do List (WoW!)"))},C=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(r.a)(this,Object(h.a)(t).call(this))).state={toDoItems:[{id:1,text:"Add a new item!",isComplete:!0}]},e.handleNewItem=e.handleNewItem.bind(Object(m.a)(e)),e.handleClick=e.handleClick.bind(Object(m.a)(e)),e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e,t){if("delete-item-checkbox"===t){var a=[{id:1,text:"Add a new item!",isComplete:!0}];this.state.toDoItems.map(function(t){t.id!=e&&a.concat(t)}),this.setState({toDoItems:a})}else this.state.toDoItems.map(function(t){t.id===e&&(t.isComplete=!t.isComplete)})}},{key:"handleNewItem",value:function(e){var t=this.state.toDoItems.length+1,a=this.state.toDoItems.concat({id:t,text:e,isComplete:!1});this.setState(function(e){return e.toDoItems=a,{state:e}})}},{key:"render",value:function(){var e=this,t=this.state.toDoItems.map(function(t){return o.a.createElement(d,{content:t,onClick:e.handleClick,onChange:e.handleChange})});return o.a.createElement("div",{className:"App"},o.a.createElement(b,null),o.a.createElement("div",{className:"todo-container"},o.a.createElement(p,{onSubmit:this.handleNewItem}),t))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.6dc79ba2.chunk.js.map