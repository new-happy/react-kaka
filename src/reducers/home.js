import imgDz from '../images/654.png'
import imgSrc5 from '../images/7777.jpg'
import imgSrc6 from '../images/222.png'
import boy from '../images/45.png'
import girl from '../images/76.png'
import user1 from '../images/user1.png'
import user2 from '../images/user2.png'
import recommend from '../images/5.jpg'
import recommend1 from '../images/7.jpg'
import recommend2 from '../images/6.jpg'
import user5 from '../images/user5.png'
import news1 from '../images/news1.png'
import news2 from '../images/news2.jpg'


const initialState ={
      recommends: [recommend, recommend1, recommend2 ],
      newtask: [
            {
                  id: '1',
                  name: 'chen XX',
                  url: user1,
                  icon: boy,
                  icon1: imgSrc6,
                  integral: 50,
                  text: '想了解一下武汉市武昌区汉街的街景和街上的几个咖啡店里面的情况.....',
                  address: '上海市浦东新区 988km 2017-03-09',
                  imgdz:imgDz
            },
            {
                  id: '2',
                  name: 'an 然',
                  url: user2,
                  icon: girl,
                  icon1: imgSrc6,
                  integral: 100,
                  text: '我想知道这个星巴克现在..',
                  address: '上海市浦东新区 988km 2017-03-09',
                  img: imgSrc5,
                  imgdz: imgDz
            }
      ],
      news: [
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
      ],
      check:'6326',
      like:'70',
      comment:'261'
}


const home = (state = initialState, action) => {
      return state
}

export default home