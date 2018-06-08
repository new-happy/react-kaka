
import { combineReducers } from 'redux'
import home from './home'
import comment from './comment'
import lookfor from './lookfor'
import news from './news'
import cards from './cards'
import accounts from './accounts'


export default combineReducers({
    home,
    comment,
    lookfor,
    news,
    cards,
    accounts
})