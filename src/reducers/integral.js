import zhiFuBao from '../images/zhifubao.svg'
import weiZhiFu from '../images/weixinzhifu.svg'


const initialState = {
    buttons: [10, 30, 50, 100, 200, 500, 1000],
    payments: [
        {
            id:'1',
            name: '微信支付',
            url: weiZhiFu 
        },
        { 
            id:'2',
            name: '支付宝', 
            url: zhiFuBao 
        }
    ]
}

const integral = (state = initialState, action) => {
    return state
}

export default integral