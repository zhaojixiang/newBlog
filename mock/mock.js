import Mock from 'mockjs'

import new1 from '../src/assets/images/new1.jpg'
import new2 from '../src/assets/images/new2.jpg'
import new3 from '../src/assets/images/new3.jpg'
const Random = Mock.Random;

const size = [
  new1, new2, new3
]
Mock.mock('/Get/blogList', [
  {
    'title': '@string( 2, 10)',
    'description': '@url',
    'img': Random.image(Random.size)
  }
])