import React,{ Component} from 'react'
import { Link } from 'react-router-dom'
import Hammer from 'react-hammerjs'
import imgSrc1 from '../images/11.svg'
import imgSrc2 from '../images/12.svg'
import imgSrc3 from '../images/13.svg'
import imgSrc4 from '../images/u310.png'
import kaka from '../images/u75.svg'
import imgSrc5 from '../images/u371.png'
import '../css/look-for.css'
import { Modal } from 'antd'
import Footer from './Footer'

 class LookFor extends Component {
     state = {
         visible:false
     }
     handleCancel = () => {
         this.setState({
             visible: false
         })
     }
     showModal = () => {
         this.setState({
             visible: true,
         })
     }
  render () {
      const { lookfor } = this.props
      const { visible } = this.state
      const lookfors = lookfor.map(item => {
          return (<div key={item.id}>
              <div className='looks-title'>
                  <div>
                      <Link to={`/infor-mation/${item.id}`}>
                      <img src={item.url} alt="1" /></Link>
                      <span>{item.name}<img src={item.icon} alt="" /></span>
                  </div>
                  <Hammer onTap={this.showModal}><img src={imgSrc4} alt="1" /></Hammer>
              </div>
              <div className='looks-content'>
                  <p>{item.text}</p>
                  <div className='looks-pic'>
                      {
                          item.pics.map((t, i) => {
                              return <img src={t} alt="1" key={i} />
                          })
                      }
                  </div>
              </div>
              <div className="looks-address">
                  <div>
                      <span><img src={item.imgdz} alt="1" />{item.address}</span>
                      <span>{item.data}</span>
                  </div>
                  <div>
                      <span><img src={imgSrc3} alt="" />{item.look}</span>
                      <span><img src={imgSrc1} alt="" />{item.hot}</span>
                      <Link to="/comments"><span><img src={imgSrc2} alt="" />{item.comment}</span></Link>
                  </div>
              </div>
          </div>)
      })
   return (
    <div className='look-for'>
           <header>
               <span></span>
               <img src={kaka} alt="1" />
               <span></span>
           </header>
         {lookfors}
           <Modal
               visible={visible}
               onCancel={this.handleCancel}
               footer={false}
               closable={false}
           >
               <img src={imgSrc5} alt="" className="imgUrl" />
           </Modal>
           <Footer />
    </div>
    )
 }
}
export default LookFor

