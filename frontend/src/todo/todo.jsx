import React, { Component } from 'react'
import Header from '../template/header'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    render() {
        return(
            <div>
                <Header name='Tasks' small='Registration'></Header>
                <todoForm />
                <TodoList />
            </div>
        )
    }
}