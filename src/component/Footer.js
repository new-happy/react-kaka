import React,{ Component} from 'react'
import { withRouter } from 'react-router-dom'
import Hammer from 'react-hammerjs'
import footer1 from '../images/footer2.png'
import footer3 from '../images/footer4.png'
import footer5 from '../images/footer5.png'
import footer7 from '../images/footer7.png'
import footer9 from '../images/footer9.png'
import footer2 from '../images/footer1.png'
import footer4 from '../images/footer3.png'
import footer6 from '../images/footer6.png'
import footer8 from '../images/footer8.png'
import footer10 from '../images/footer10.png'
import '../css/footer.css'

class Footer extends Component {
    state = {
        tabs: [
            {
                id:0,
                url: footer1,
                img:footer2,
                text: '首页',
                type: '/'
            },
            {
                id:1,
                url: footer3,
                img: footer4,
                text: '发现',
                type: '/look-for'
            },
            {
                id:2,
                url: footer5,
                img: footer6,
                text: '发布',
                type: '/release'
            },
            {
                id:3,
                url: footer7,
                img: footer8,
                text: '消息',
                type: '/news'
            },
            {
                id:4,
                url: footer9,
                img: footer10,
                text: '我的',
                type: '/card'
            },
        ],
        num: 0
    }
     componentDidMount() {
        const { path } = this.props.match
        const tab = this.state.tabs.find(item => item.type === path)
        this.setState({
            num:tab.id
        })
     }
    handleGo = (type) => {
        this.props.history.push(type)
    }
    render() {
        const { path } = this.props.match
        const tab = this.state.tabs.map((item, index) => {
            return (<Hammer key={index} onTap={() => this.handleGo(item.type)}>
                <div>
                    <img src={`${item.type === path ? item.img : item.url}`} alt="1" />
                    <span className={`${this.state.num === index && 'active'}`}>{item.text}</span>
                </div>
            </Hammer>)
        })
        return (
            <div className="footer">
                {tab}
            </div>
        )
    }
}

export default withRouter(Footer)
