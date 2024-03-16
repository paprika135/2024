import avator1 from '../asset/pic/avator1.png'
import avator2 from '../asset/pic/avator2.png'
import avator3 from '../asset/pic/avator3.png'
import avator4 from '../asset/pic/avator4.png'
import avator5 from '../asset/pic/avator5.png'
import mockjs from 'mockjs'

const newsList = [];

for (let i = 0; i < 5; i++) {
    newsList.push({
        avator:avator1,
    title:mockjs.Random.title(1),
    auhtor:mockjs.Random.name(5),
    publishDate:mockjs.Random.date(),
    content:mockjs.Random.sentence(40),
    })
}

export default newsList;