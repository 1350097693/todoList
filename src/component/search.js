import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../action'

const search = ({ dispatch }) => {
    let input;
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                input.focus()
                if(!input.value.trim()){
                    return
                }
                
                dispatch(addTodo(input.value))
                input.value=''
            }

            }>
                <input ref={(e)=>input=e}/>
                <button type="submit">添加任务</button>
            </form>
        </div>
    );

}

export default connect()(search);