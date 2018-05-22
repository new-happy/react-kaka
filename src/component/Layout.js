import React,{ Component} from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
import Login from  './Login'
 class Layout extends Component {
  render () {
   return (
    <div className='Layout'>
         <Switch>
            <Route path='/login' component={Login} />
         </Switch>
    </div>
    )
 }
}
export default Layout