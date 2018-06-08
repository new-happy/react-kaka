import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'
import card4 from '../images/card4.png'
import card5 from '../images/card5.png'
import card6 from '../images/card6.png'
import card7 from '../images/card7.png'
import card8 from '../images/card8.png'
import qianjin from '../images/qianjin.svg'


const initialState = {
    card: [
        {
            id: 1,
            text: '我的账户',
            img: card1,
            url: 'account',
            qianjin: qianjin
        }, {
            id: 2,
            text: '积分充值',
            img: card2,
            url: 'integral',
            qianjin: qianjin
        }
    ],
    task: [
        {
            id: 3,
            text: '已完成任务',
            img: card3,
            value: '您还没有完成的任务',
            qianjin: qianjin
        }, {
            id: 4,
            text: '已发布任务',
            img: card4,
            value: '您还没有发布任务',
            qianjin: qianjin
        }, {
            id: 5,
            text: '我的收藏',
            img: card5,
            value: '您还没有收藏',
            qianjin: qianjin
        }
    ],
    about: [
        {
            id: 6,
            text: '意见反馈',
            img: card6,
            url: 'feedback',
            qianjin: qianjin
        },
        {
            id: 7,
            text: '关于我们',
            img: card7,
            url: 'about',
            qianjin: qianjin
        },
        {
            id: 8,
            text: '设置',
            img: card8,
            url: 'set-up',
            qianjin: qianjin
        }
    ]
}

const cards = (state = initialState, action) => {
    return state
}

export default cards