import user5 from '../images/user5.png'
import news1 from '../images/news1.png'
import news2 from '../images/news2.jpg'


const initialState =  [
        {
            id: 1,
            url: user5,
            name: '初夏',
            text: '在吗?',
            data: '昨天17:43',
            link: '/news/chat'
        },
        {
            id: 2,
            url: news1,
            name: '系统通知',
            text: '30秒带你体验随享咔咔',
            data: '下午01:25',
            link: '/news/system'
        },
        {
            id: 3,
            url: news2,
            name: '欢迎加入随享咔咔',
            text: '主人，小咔已经恭候多时了，200积分奉上，可在钱包查看，有任何建议可直接在消息中回复小咔',
            data: '2017-01-15',
            link: '/card/account'
        }
    ]



const news = (state = initialState, action) => {
    return state
}

export default news