import imgSrc1 from '../images/user3.png'
import imgSrc2 from '../images/user4.png'
import boy from '../images/45.png'
import girl from '../images/76.png'

const initalState = [
        {
            id: 1,
            name: 'H.H',
            url: imgSrc1,
            icon: boy,
            text: '古根海姆博物馆的外部非常朴实无华，只是将博物馆的名字装饰了一下，平滑的白色混凝土覆盖在墙上，使它们仿佛更像一座巨大的雕塑而不是建筑物。',
            huifu: [
                {
                    id: 1456,
                    name: 'BIG BOSS',
                    text: '把你的评论看完之后我想去看一看了'
                }
            ]
        },
        {
            id: 2,
            name: '泡沫',
            url: imgSrc2,
            icon: girl,
            text: '光是建筑外观就与众不同啊!',
            huifu: []
        }
    ]

const comment = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
        const { comment } = action
            return [...state,
                comment]
        default:
            return state
    }
}

export default comment