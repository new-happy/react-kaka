import React,{ Component} from 'react'
import kaka from '../images/u75.svg'
import card0 from '../images/card0.png'
import user1 from '../images/user1.png'
import Hammer from 'react-hammerjs'
import { Link } from 'react-router-dom'
import '../css/card.css'

 class Card extends Component {
     state = {
         userId:''
     }
     componentDidMount() {
        const id = sessionStorage.id
        this.setState({
        userId:id
    })
  }
     handlePush = (url) => {
    this.props.history.push(url)
  }
  render () {
      console.log(this.props);
      
      const { card, task, about } = this.props.cards
      const cardOne = card.map(item => {
          return (<Hammer onTap={() => this.handlePush(`/card/${item.url}`)} key={item.id}><div>
              <img src={item.img} alt="1" />
              <span>{item.text} <img src={item.qianjin} alt="1" /></span>
          </div></Hammer>)
      })
      const taskOne = task.map(item => {
          return (<Link to={ `/business-card/${item.id}`} key={item.id}><div>
                  <img src={item.img} alt="1" />
                  <span>{item.text} <img src={item.qianjin} alt="1" /></span>
              </div></Link>)
      })
      const aboutOne = about.map(item => {
          return (<Hammer onTap={() => this.handlePush(`/card/${item.url}`)} key={item.id}><div>
              <img src={item.img} alt="1" />
              <span>{item.text} <img src={item.qianjin} alt="1" /></span>
          </div></Hammer>)
      }) 
   return (
    <div className='Card'>
        <div className="card-title">
         <header>
          <span></span>
           <img src={kaka} alt="1"/>
           <span></span>
         </header>
         <div>
           <span><img src={card0} alt="1"/>签到</span>
           <img src={user1} alt="1"/>
           <span>{this.state.userId}</span>
           <Hammer onTap={() => this.handlePush('/card/my-card')}><button>我的名片</button></Hammer>
         </div>
       </div>
       <div className="card-down">
         <div className="card-downa">{cardOne}</div>
         <div className="card-downb">{taskOne}</div>
         <div>{aboutOne}</div>
       </div>
    </div>
    )
 }
}
export default Card