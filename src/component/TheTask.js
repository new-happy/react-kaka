import React,{ Component} from 'react'
import '../css/the-task.css'
import imgSrc from '../images/fanhui.png'
import Hammer from 'react-hammerjs'
import zhuYi from '../images/zhuyi.png'

 class TheTask extends Component {
     state = {
         pople: [],
         off: false,
         check: false
     }
     handleTap = () => {
         this.props.history.go(-1)
     }
     handleOff = () => {
         if (sessionStorage.off !== 'false') {
             this.setState({
                 off: true
             })
         } else {
             this.props.history.push('/submit-task')
         }
     }
     handleNo = () => {
         this.setState({
             off: false
         })
         if (this.state.check === false) {
             this.props.history.push('/submit-task')
         } else {
             sessionStorage.off = false
             this.props.history.push('/submit-task')
         }
     }
     handleChange = () => {
         this.setState({
             check: !this.state.check
         })
     }
  render () {
      console.log(this.props);
      
      const { match,home } = this.props
      const task = home.newtask.find(t => t.id === match.params.id)
      
   return (
    <div className='TheTask'>
           <div className="masking" style={{ display: this.state.off ? 'block' : 'none' }}>
               <div className='masking-title'>
                   <img src={zhuYi} alt="" />
                   <h2>注意事项</h2>
               </div>
               <div>
                   <p>1、请尽量发布真实、有价值的问题答案</p>
                   <p>2、发送内容支持最多5张照片、视频时间不可超过10秒</p>
               </div>
               <div>
                   <p>1、所有发送内容都会被审查</p>
                   <p>2、禁止发送色情、血腥暴力等不当内容</p>
                   <p>3、如有违反《 随享咔咔内容条约 》将会受到相应的惩罚，严重者追究法律责任</p>
               </div>
               <div className='prompt'>
                   <Hammer onTap={this.handleNo}><button>我知道了</button></Hammer>
                   <div>
                       <input type="checkbox" onChange={this.handleChange} />
                       <span>不再提示</span>
                   </div>
               </div>
           </div>
           <header>
               <Hammer onTap={this.handleTap}><span><img src={imgSrc} alt="1" /></span></Hammer>
               <span>任务详情</span>
               <span></span>
           </header>
           <div className='client'>
               <img src={task.url} alt="" />
               <span>{task.name}</span>
           </div>
           <div className='entrust'>
               <p>{task.text}</p>
               <img src={task.img} alt="" />
               <div>
                   <img src={task.icon1} alt="" /><h1>{task.integral}</h1>
               </div>
               <div>
                   <img src={task.imgdz} alt="" /><span>{task.address}</span>
               </div>
           </div>
           <div className="buttona">
               <Hammer onTap={this.handleOff}><button>接受任务</button></Hammer>
           </div>
    </div>
    )
 }
}
export default TheTask