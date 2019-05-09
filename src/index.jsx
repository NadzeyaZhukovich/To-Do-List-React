import React, {Component} from 'react';
import ReactDome from 'react-dom';
import {ToDoList} from 'components/ToDoList';

class App extends Component {   
    render() {
       return( 
            <div><ToDoList/></div>
        )
    }
}

ReactDome.render(<App/>, document.getElementById('taskList'));