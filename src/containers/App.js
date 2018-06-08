import React,{ Component } from 'react'
import '../assets/global.css'
import {
  HashRouter as Router,Route
} from 'react-router-dom'
import LeadContainer from './LeadContainer'
import HomeContainer from './HomeContainer'
import LayoutContainer from './LayoutContainer'
import TheTaskContainer from './TheTaskContainer'
import SubmitTask from '../component/SubmitTask'
import CommentContainer from './CommentContainer'
import LookForContainer from './LookForContainer'
import NewsContainer from './NewsContainer'
import CardHomeContainer from './CardHomeContainer'
import InforMation from '../component/InforMation'

class App extends Component {
  render () {
   return (
     <Router>
        <div className="app">
           <Route exact path='/' component={HomeContainer} />  
           <Route path='/lead' exact component={LeadContainer} />
           <Route component={LayoutContainer} />
           <Route path='/the-task/:id' exact component={TheTaskContainer} />
           <Route path='/submit-task' component={SubmitTask} />
           <Route path='/comments' component={CommentContainer} />
           <Route path='/look-for' component={LookForContainer} />
           <Route path='/news' component={NewsContainer} />
           <Route component={CardHomeContainer} />
           <Route path='/infor-mation/:id' component={InforMation } />
        </div>
     </Router>

   )
  }
}

export default App