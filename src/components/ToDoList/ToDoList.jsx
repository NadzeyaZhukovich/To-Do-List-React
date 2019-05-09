import './ToDoList.scss';

import React, {Component} from 'react';
import nanoid from 'nanoid';

import {ToDoItem} from 'components/ToDoItem';


export class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            taskDescription: '',
            addButtonEnabled: false
        }
    }

    handleDescriptionChange = (event) => {
        const text = event.target.value
        this.setState({
            taskDescription: text,
            addButtonEnabled: text.trim().length > 0
        })
    }

    onChanged = (event) => {
        const tasks = this.state.tasks;
        let requiredItem;

        tasks.map(task => {
            if(task.id === event.target.parentElement.id) {
                requiredItem = task;
                return;
            }
        })
        requiredItem.completed = !requiredItem.completed;
        this.setState({tasks})
    }

    onDelete = (event) => {
        const tasks = this.state.tasks;
        const currentTaskId = event.target.parentElement.id;
        const newTasks = tasks.filter(task => task.id !== currentTaskId);
        this.setState({
            tasks: newTasks,
        })
    }

    handleAddClick = (event) => {
        event.preventDefault() 
        const {taskDescription, tasks} = this.state;
        const task = {
            text: taskDescription,
            completed: false,
            id: nanoid(),
        }
        tasks.push(task);
        this.setState({
            taskDescription: '',
            tasks: tasks,
            addButtonEnabled: false
        })
    }
   
    render(){
        const {tasks, addButtonEnabled} = this.state;
        return (
           <main className="toDoList">
                <h1>ToDo List</h1>
                <section className="createTask">
                    <form>
                        <input type="text" placeholder="Enter a task" className="inputText" value={this.state.taskDescription} onChange={this.handleDescriptionChange}/>
                        <button className="btn" disabled={!addButtonEnabled} onClick={this.handleAddClick}>Add</button>
                    </form>
                </section>
                {tasks.map(task => <ToDoItem text={task.text} id={task.id} completed={task.completed} onComplete={this.onChanged} onDelete={this.onDelete}/>)}
           </main>
       )
   } 
}