import React,{ Component} from 'react'
import store from '../store'
import Hammer from 'react-hammerjs'
import imgSrc from '../images/fanhui.png'
import chui from '../images/chui.jpg'
import styled from 'styled-components'

 class Business extends Component {
     handleTap = () => {
         this.props.history.go(-1)
     }
  render () {
      const { cards } = store.getState()
      const { id } = this.props.match.params
      const task = cards.task.find(t => t.id === id)
   return (
    <div className='Business'>
         <header>
         <Hammer onTap={this.handleTap}><span><img src={imgSrc} alt="1"/></span></Hammer>
         <span>{task.text}</span>
         <span></span>
       </header>
       <BusinessCard>
         <img src={chui} alt=""/>
         <p>{task.value}</p>
       </BusinessCard>
    </div>
    )
 }
}
export default Business
const BusinessCard = styled.div`
    width: 100%;
    background-color: #fff;
    text-align: center;
    padding:60% 0;
    img {
        width: 40%;
        margin-left: 4em;
        margin-bottom: 1em;
    }
    p {
        color: #ccc;
    }
`