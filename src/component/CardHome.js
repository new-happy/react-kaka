import React,{ Component} from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
import CardContainer from '../containers/CardContainer'
import Account from './Account'
import Extract from './Extract'
import Balance from './Balance'
import Cash from './Cash'

 class CardHome extends Component {
     
  render () {
   return (
    <div className='CardHome'>
         <Switch>
            <Route path='/card/extract/:id' component={Extract} />
            <Route path='/card/account/balance' component={Balance} />
            <Route path='/card/account/cash' component={Cash} />
            <Route path='/card/account' component={Account} />
            <Route path='/card' component={CardContainer } />
         </Switch>
    </div>
    )
 }
}
export default CardHome