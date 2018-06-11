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
import Detailed from './Detailed'
import Business from './Business'
import Integral from './Integral'
import Success from './Success'
import SetUp from './SetUp'
import Feedback from './Feedback'
import About from './About'
import SetPassword from './SetPassword'

 class CardHome extends Component {
     
  render () {
   return (
    <div className='CardHome'>
         <Switch>
            <Route path='/card/business/:id' component={Business} />
            <Route path='/card/extract/:id' component={Extract} />
            <Route path='/card/account/detailed' component={Detailed} />
            <Route path='/card/account/balance' component={Balance} />
            <Route path='/card/account/cash' component={Cash} />
            <Route path='/card/account' component={Account} />
            <Route path='/card/success/:id' component={Success} />
            <Route path='/card/integral' component={Integral} />
            <Route path='/card/set-up' component={SetUp} />
            <Route path='/card/set-password' component={SetPassword} />
            <Route path='/card/feedback' component={Feedback} />
            <Route path='/card/about' component={About} />
            <Route path='/card' component={CardContainer } />
         </Switch>
    </div>
    )
 }
}
export default CardHome