import React, { Component } from 'react'
import style from './index.less'
export default class Poem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      poem: [
        {
          title: '相思',
          time: '唐代',
          author: '王维',
          type: '五言律诗',
          poem: '红豆生南国，春来发几枝，愿君多采撷，此物最相思。',
          translation: '红豆生长在阳光明媚的南方，每逢春天不知长多少新枝，希望思念的人儿多多采摘，因为它最能寄托相思之情。'
        },
        {
          title: '终南别业',
          time: '唐代',
          author: '王维',
          type: '五言律诗',
          poem: '中岁颇好道，晚家南山陲。兴来每独往，胜事空自知。行到水穷处，坐看云起时。偶然值林叟，谈笑无还期。',
          translation: '中年以后存有较浓的好道之心，直到晚年才安家于终南山边陲。兴趣浓时常常独来独往去游玩，有快乐的事自我欣赏自我陶醉。间或走到水的尽头去寻求源流，间或坐看上升的云雾千变万化。偶然在林间遇见个把乡村父老，偶与他谈笑聊天每每忘了还家。'
        },
        {
          title: '赤壁',
          time: '唐代',
          author: '杜牧',
          type: '七言绝句',
          poem: '折戟沉沙铁未销，自将磨洗认前朝。东风不与周郎便，铜雀春深锁二乔。',
          translation: '赤壁的泥沙中，埋着一枚未锈尽的断戟。自己磨洗后发现这是当年赤壁之战的遗留之物。倘若不是东风给周瑜以方便，结局恐怕是曹操取胜，二乔被关进铜雀台了。'
        },
        {
          title: '登金陵凤凰台',
          time: '唐代',
          author: '李白',
          type: '七言绝句',
          poem: '凤凰台上凤凰游，凤去台空江自流。吴宫花草埋幽径，晋代衣冠成古丘。三山半落青天外，二水中分白鹭洲。总为浮云能蔽日，长安不见使人愁。',
          translation: '凤凰台上曾经有凤凰来悠游，凤去台空只有江水依旧奔流。吴国宫殿的鲜花芳草遮没荒凉小径，晋代多少王族已成荒冢古丘。三山云雾中隐现如落青天外，江水被白鹭洲分成两条河流。那些悠悠浮云总是遮蔽太阳的光辉，登高不见长安城，怎么不让人内心沉痛忧郁。'
        }
      ]
    }
  }
  componentDidMount () {
  }
  render () {
    const { poem } = this.state
    return (
      <div className={style.poem}>
        {
          poem.map(item => <div className={style.itemPoem} style={{ width: item.type === '五言律诗' ? '330px' : item.type === '七言绝句' ? '420px' : '0px' }}>
            <h3 className={style.title}>{item.title}</h3>
            <div className={style.author}>{item.time} {item.author}</div>
            <article className={style.content}>
              {item.poem}
            </article>
          </div>)
        }
      </div>
    )
  }
}
