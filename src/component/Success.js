import React,{ Component} from 'react'
import store from '../store'
import styled from 'styled-components'
import Hammer from 'react-hammerjs'

 class Success extends Component {
     handleGo = (url) => {
         this.props.history.push(`/card/account`)
     }
  render () {
      const {id} = this.props.match.params
      const { integral } = store.getState()
      const payment = integral.payments.find(t => t.id === id)
   return (
    <div className='Success'>
         <header>
         <span></span>
         <span>积分充值</span>
         <span></span>
       </header>
       <Main>
            <Img><img src={payment.url} alt=""/></Img>
            <h3>支付成功</h3>
            <p>预计十分钟到账，充值遇到高峰期可能会延迟</p>
       </Main>
       <Submit className="submit-a">
        <Hammer onTap={this.handleGo}><button>提交</button></Hammer>
       </Submit>
    </div>
    )
 }
}
export default Success
const Main = styled.div`
    padding-top:10%;
    h3 {
      text-align: center; 
      font-size:1.5em;
      margin-bottom:1em;
    }
    p{
      text-align: center;
      color:#ccc;
    }
`
const Img = styled.div`
    width:35%;
    margin:0 auto;
    border-radius: 3%;
    padding-bottom:5%;
    img{
        display: block;
        width: 100%;
    }
`
const Submit = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 4em 0;
`