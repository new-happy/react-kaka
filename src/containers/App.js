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
import Release from '../component/Release'
import System from '../component/System'

class App extends Component {
  render () {
   return (
     <Router>
        <div className="app">
            <Route exact path='/' component={HomeContainer} /> 
            <Route component={LayoutContainer} />
            <Route component={CardHomeContainer} />
            <Route path='/lead' exact component={LeadContainer} />
            <Route path='/the-task/:id' exact component={TheTaskContainer} />
            <Route path='/submit-task' component={SubmitTask} />
            <Route path='/comments' component={CommentContainer} />
            <Route path='/look-for' component={LookForContainer} />
            <Route path='/system' component={System} />
            <Route path='/news' component={NewsContainer} />
            <Route path='/infor-mation/:id' component={InforMation } />
            <Route path='/release' component={Release} />
        </div>
     </Router>

   )
  }
}

export default App