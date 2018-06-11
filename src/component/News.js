import React,{ Component} from 'react'
import Hammer from 'react-hammerjs'
import kaka from '../images/u75.svg'
import '../css/news.css'
import Footer from './Footer'

 class News extends Component {
     handleTap = (url) => {
         this.props.history.push(url)
     }
  render () {
      console.log(this.props);
      
      const { news } = this.props
      const newa =  news.map(item => {
          return (<Hammer key={item.id} onTap={() => this.handleTap(item.link)}><div>
              <img src={item.url} alt="1" />
              <div>
                  <h2>{item.name}</h2>
                  <p>{item.text}</p>
                  <span>{item.data}</span>
              </div>
          </div></Hammer>)
      })
   return (
    <div className='News'>
        <header>
            <span></span>
            <img src={kaka} alt="" />
            <span></span>
        </header>
        <div className="news-main">
            {newa}
        </div>
        <Footer />
    </div>
    )
 }
}
export default News