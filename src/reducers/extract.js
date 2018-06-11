import biao from '../images/biao.jpg'
import jifen from '../images/222.png'

const initalState = [
    {
        id:1,
        img:biao,
        title:'提现详情',
        time:'2017-03-26 16:04:34',
        card:'储蓄卡',
        account:'工商银行 尾号9647',
        money:'提现金额',
        num:'￥ 26',
        cost:'手续费',
        num1:'￥ 0.01',
        url:'balance'
    },
    {
        id: 2,
        img:jifen,
        title: '兑现详情',
        time: '2017-03-05 12:14:44',
        card: '到账号',
        account: 'chen xx',
        money: '兑换积分',
        num: 'B 600',
        cost: '手续费',
        num1: 'B 10',
        url:'cash'
    }
]

const extract = (state = initalState, action) => {
    return state
}

export default extract