import React,{ Component } from 'react'
import '../css/cash.css'
import jifen from '../images/222.png'
import Hammer from 'react-hammerjs'

class Cash extends Component {
  state = {
    num:''
  }
  handleTap = () => {
    this.props.history.go(-1)
  }
  handleGo = (url) => {
    this.props.history.push(url)
  }
  render () {
    const { path } = this.props.match
    const newPath = path.slice(14)
    console.log(newPath);
   return (
     <div className="cash">
       <header>
         <Hammer onTap={this.handleTap}><span>取消</span></Hammer>
         <span>积分兑换</span>
         <span></span>
       </header>
       <div className="cash-main">
         <div>
           <img src={jifen} alt=""/>
         </div>
         <h2>积分兑现</h2>
         <input type="type" value={this.state.num} onChange={this.handleChange}/>
         <p>积分余额 860 <em>全部兑现</em></p>
         <Hammer onTap={() => this.handleGo(`/card/extract/${newPath}`)}><button>确定</button></Hammer>
         <span>2小时到帐</span>
       </div>
     </div>
   )
  }
}

export default Cash