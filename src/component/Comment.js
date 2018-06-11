import React,{ Component} from 'react'
import '../css/comment.css'
import Hammer from 'react-hammerjs'
import imgSrc from '../images/fanhui.png'
import yuyin from '../images/yinpin.png'
import imgSrc3 from '../images/user1.png'
import boy from '../images/45.png'
import shortid from 'shortid'

 class Comment extends Component {
     state = {
         inputText:''
     }

     handleChange = (e) => {
         this.setState({
             inputText: e.target.value
         })
     }
     handelComment = () => {
       const id = shortid()
       const { inputText } = this.state
       if(inputText !== ''){
           const pople1 = {
               id: id,
               name: 'chen xx',
               url: imgSrc3,
               icon: boy,
               text: this.state.inputText,
               huifu: []
           }
           this.props.addComment(pople1)
           this.setState({
               inputText: ''
           }) 
       }
     }
     handleGo = (num) => {
         this.props.history.go(num)
     }
  render () {
      const { comment } = this.props
      const comments = comment ? comment.map(item => {
          return (<div key={item.id} className="comments-user">
              <div className='user-title'>
                  <img src={item.url} alt="1" />
                  <span>{item.name} <img src={item.icon} alt="1" /></span>
              </div>
              <div className="comment-a">
                  <p>{item.text}</p>
                  {
                      item.huifu.map(t => {
                          return <div key={t.id}>
                              <p><span>{`${t.name}:`}</span>{t.text}</p>
                          </div>
                      })
                  }
              </div>
          </div>)
      }) : ''
   return (
    <div className='comments'>
           <header>
               <Hammer onTap={() => this.handleGo(-1)}>
                   <span><img src={imgSrc} alt="1" /></span>
               </Hammer>
               <span>评论详情</span>
               <span></span>
           </header>
           <h2>评论（{comment.length}）</h2>
                { comments }
           <div className="texts">
               <img src={yuyin} alt="" />
               <input type="text" value={this.state.inputText} onChange={this.handleChange} />
               <Hammer onTap={this.handelComment}><button>回复</button></Hammer>
           </div>
    </div>
    )
 }
}
export default Comment