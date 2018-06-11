import React,{ Component} from 'react'
import store from '../store'
import Hammer from 'react-hammerjs'
import '../css/extract.css'

 class Extract extends Component {
     handleTap = () => {
         this.props.history.push('/card/account')
     }
  render () {
      const { extract } = store.getState()
      const {id} = this.props.match.params
      const user = extract.find( t => t.url === id)
      console.log(user, extract);
   return (
    <div className="extract-one">
       <header>
         <span></span>
         <span>{user.title}</span>
         <span></span>
       </header>
       <div className="extract-title">
         <img src={user.img} alt=""/>
         <span>提现申请已提交</span>
       </div>
       <div className="extract-main">
         <div>
           <span>预计到账时间</span>
           <span>{user.time}</span>
         </div>
         <div>
           <span>{ user.card }</span>
           <span>{ user.account }</span>
         </div>
         <div>
           <span>{user.money}</span>
           <span>{user.num}</span>
         </div>
         <div>
           <span>{user.cost}</span>
           <span>{user.num1}</span>
         </div>
       </div>
        <Hammer onTap={this.handleTap}><button>完成</button></Hammer>
     </div>
    )
 }
}
export default Extract