
import { combineReducers } from 'redux'
import home from './home'
import comment from './comment'
import lookfor from './lookfor'
import news from './news'
import cards from './cards'
import accounts from './accounts'
import extract from './extract'
import integral from './integral'


export default combineReducers({
    home,
    comment,
    lookfor,
    news,
    cards,
    accounts,
    extract,
    integral
})