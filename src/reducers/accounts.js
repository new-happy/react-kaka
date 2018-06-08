import account2 from '../images/account1.png'
import account1 from '../images/account2.png'

const initialState =[
    {
        id:1,
        title:'现金余额',
        num:'26.00',
        img:account1,
        url:'balance'
    },
    {
        id: 2,
        title: '积分余额',
        num: '180.00',
        img: account2,
        url:'cash'
    }
]

const accounts = (state = initialState, action) => {
    return state
}

export default accounts