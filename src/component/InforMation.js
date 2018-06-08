import React,{ Component} from 'react'
import store from '../store'
import Hammer from 'react-hammerjs'
import imgSrc from '../images/fanhui.png'
import chui from '../images/chui.jpg'
import '../css/infor-mation.css'

 class InforMation extends Component {
     handleTap = () => {
         this.props.history.go(-1)
     }
  render () {
      const { lookfor } = store.getState()
      const { id } = this.props.match.params
      const user = lookfor.find(t => t.id===id)
      console.log(lookfor,user);
   return (
       <div className="infor-mation">
           <header>
               <Hammer onTap={this.handleTap}><span><img src={imgSrc} alt="1" /></span></Hammer>
               <span>个人资料</span>
               <span>操作</span>
           </header>
           <div className="user-infor">
               <div className="infor-title">
                   <img src={user.url} alt="" />
                   <span>{user.name}<img src={user.icon} alt="" /></span>
               </div>
               <div>
                   <button>关注</button>
                   <button>私信</button>
               </div>
               <div>
                   <span>0发布</span>
                   <span>124获赞</span>
                   <span>10关注</span>
                   <span>5粉丝</span>
               </div>
           </div>
           <div className="infor-footer">
               <h2>个人发布</h2>
               <div><img src={chui} alt="" />
                   <span>空空如也 快去发布吧</span>
               </div>
           </div>
       </div>
    )
 }
}
export default InforMation