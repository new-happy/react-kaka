import React,{ Component} from 'react'
import imgSrc from '../images/sousuo.png'
import imgSrc1 from '../images/dz.png'
import kaka from '../images/u75.svg'
import imgSrc2 from '../images/banner1.jpg'
import imgSrc3 from '../images/banner2.png'
import imgSrc4 from '../images/banner3.jpg'
import imgSrc7 from '../images/11.png'
import imgSrc8 from '../images/12.png'
import imgSrc9 from '../images/13.png'
import Hammer from 'react-hammerjs'
import { Carousel } from 'antd'
import 'antd/dist/antd.css';
import '../css/home.css'
import { Link } from 'react-router-dom'


 class Home extends Component {
     state = {
         hometext:''
     }
     componentDidMount(){
         if(sessionStorage.office === undefined){
             this.props.history.push('lead')
             sessionStorage.office = false    
         }else{
             this.setState({
             hometext:this.props.home
         })
         }  
     }
     handleTap = (url) => {
         this.props.history.push(url)
     }
  render () {
      console.log(this.props);
      const { newtask, recommends, check,like,comment } = this.state.hometext
      const content = newtask ? newtask.map(item => {
          return (<div className='task' key={item.id}>
              <div className='text'>
                  <p><Link to={{
                      pathname: `/the-task/${item.id}`,
                      state: { item }
                  }}>{item.text}</Link></p>
                  <img src={item.img} alt="" />
              </div>
              <div className="pople">
                  <img src={item.url} alt="2" />
                  <div>
                      <div className="pople-a">
                          <div>
                              <span>{item.name}</span>
                              <img src={item.icon} alt="" />
                          </div>
                          <div>
                              <img src={item.icon1} alt="" />
                              <span>{item.integral}</span>
                          </div>
                      </div>
                      <div className="address">
                          <img src={item.imgdz} alt="" />
                          <span>{item.address}</span>
                      </div>
                  </div>
              </div>
          </div>)
      }) : '请稍后'
      const { goEvent } = this.props
      console.log(goEvent);
      const recommend = recommends ? recommends.map( (item,i) => {
          return <img src={item} alt="a" key={i} />
      }) : '请稍后'
   return (
       <div className="home-page">
          <header>
               <Hammer onTap={() => this.handleTap('city')}><span>武汉<img src={imgSrc1} alt="1" /></span></Hammer>
               <img src={kaka} alt="" />
               <span><img src={imgSrc} alt="s" /></span>
           </header>
           <div className="banner">
             <Carousel autoplay = "true" >
                <div><img src={imgSrc2} alt='1'/></div>
                <div><img src={imgSrc3} alt='1'/></div>
                <div><img src={imgSrc4} alt='1'/></div>
            </Carousel>
           </div>
           <div className="content">
               <div className="content-title"><h2>最新任务</h2></div>
                <div className="content-a">
                    { content }
                </div>
               <div className="content-title"><h2>今日推荐</h2></div>
                   <div>
                       <div className="recommend">
                          { recommend }
                       </div>
                       <div className="jianjie">
                           <p>所罗门-R-古根海娒美术馆（The Solomon R .Guggenheim Museum)</p>
                           <span>古根海娒美术馆</span>
                           <div>
                           <span><img src={imgSrc9} alt="" />{check}</span>
                               <span><img src={imgSrc7} alt="" />{like}</span>
                               <Link to='/comments'><span><img src={imgSrc8} alt="" />{comment}</span></Link>
                           </div>
                       </div>
                   </div>
           </div>
       </div>
    )
 }
}
export default Home
