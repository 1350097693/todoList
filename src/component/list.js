import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../action'
import { VisibilityFilters } from '../action'

class list extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo) =>
                    <li
                        key={todo.id}
                        onClick={() => this.props.toggleTodo(todo.id)}
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none'
                        }}

                    >
                        {todo.text}
                    </li>
                )}
            </ul>
        );
    }
}
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => !todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => todo.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

function mapStateToProps(state) {
    return {
        todos: getVisibleTodos(state.todo,state.visibilityFilter)
    };
}
const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(list);
