import user4 from '../images/user4.png'
import user5 from '../images/user5.png'
import user6 from '../images/user6.png'
import look1 from '../images/look1.jpg'
import look2 from '../images/look2.jpg'
import look3 from '../images/look3.jpg'
import look4 from '../images/look4.jpg'
import look5 from '../images/look5.svg'
import look6 from '../images/look6.jpg'
import look7 from '../images/look7.jpg'
import boy from '../images/45.png'
import girl from '../images/76.png'
import imgDz from '../images/654.png'



const initialState = [
     {
        id:1,
        name:'泡沫',
        url:user4,
        icon: girl,
        look:326,
        hot:70,
        comment:75,
        data:'58分钟前',
        text:'安徽宏村秀里驿境精品文化酒店，喜欢的可以去看看哦... ',
        pics:[look1,look2,look3],
        address:'宏村秀里精品文化酒店',
        imgdz: imgDz
      },
      {
        id:2,
        name:'初夏',
        url:user5,
        icon: girl,
        look:371,
        hot:128,
        comment:26,
        data:'1小时前',
        text:'在乌镇，入夜后,和闺蜜一起在酒吧窗前喝一杯甘甜的“三白酒”，让人回味无穷,去年的这个时间我们同样坐在今天的位置，回忆着那是的点点滴滴...',
        pics:[look4,look5,look6],
        address:'浙江省桐乡市乌镇酒吧',
        imgdz: imgDz
      },
      {
        id:3,
        name:'陈 xx',
        url:user6,
        icon: boy,
        look:371,
        hot:128,
        comment:26,
        data:'1小时前',
        text:'',
        pics:[look7],
        address:'浙江省桐乡市乌镇酒吧',
        imgdz: imgDz
      }
    ]


const lookfor = (state = initialState, action) => {
    return state
}

export default lookfor