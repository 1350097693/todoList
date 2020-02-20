import { combineReducers} from 'redux'
import todo from './addTodo'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    todo,
    visibilityFilter
})