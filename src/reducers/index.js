
import { combineReducers } from 'redux'
import home from './home'
import comment from './comment'
import lookfor from './lookfor'


export default combineReducers({
    home,
    comment,
    lookfor
})