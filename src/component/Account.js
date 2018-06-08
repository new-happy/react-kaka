import React,{ Component} from 'react'
import store from '../store'
import Hammer from 'react-hammerjs'
import imgSrc from '../images/fanhui.png'
import zhuan from '../images/zhuan.png'
import account3 from '../images/account3.png'
import account4 from '../images/account4.png'
import account5 from '../images/account5.png'
import '../css/account.css'

 class Account extends Component { 
     handleClick = (url) => {
         this.props.history.push(url)
     }
  render () {
      const { accounts } = store.getState()
      const account = accounts.map( t => {
          return <div  key={t.id}>
              <img src={t.img} alt="1"/>
              <div>
                 <p>{t.title}</p>
                 <span>{t.num}</span>
              </div>
              <Hammer onTap={()=>this.handleClick(`/card/account/${t.url}`)}><button>提现</button></Hammer>
          </div>
      })
   return (
       <div className="account">
           <header>
               <Hammer onTap={this.handleTap}><span><img src={imgSrc} alt="1" /></span></Hammer>
               <span>我的账户</span>
               <span><img src={zhuan} alt="" /></span>
           </header>
           <div className="tixian">
               {account}
           </div>
           <div className="account-down">
               <div><img src={account3} alt="1" /></div>
               <div>
                   <Hammer onTap={() => this.handleClick('/card/account/detailed')}>
                       <span>
                           <img src={account4} alt="1" />
                           收支明细
                       </span>
                   </Hammer>
                   <span>
                       <img src={account5} alt="1" />
                       常见问题
                   </span>
               </div>
           </div>
       </div>
    )
 }
}
export default Account