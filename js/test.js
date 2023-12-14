import * as util from './utils.js'
const arr = [1, 2, 3, 4, 5, 6]
const cat = [1, 2, 3, 4]
const map = 
[
{
    key: 2,
    value: 'health'
},
{
    key: 1,
    value: 'news'
},
{
    key: 3,
    value: 'tech'
},
{
    key: 4,
    value: 'sport'
}]

const url = window.location.href.split('/')
const file = url[url.length - 1]
const num = file.split('.')[0]




util.shuffleArray(arr)
const urll = []
for (let i = 0; i < 6; ++i)
{
    const rand = util.getRandomInt(0, 3)
    const tmp = map.filter((key)=>{return key.key==cat[rand]})
    const {value} = tmp[0]
    if (value == url[4] && arr[i] == num)
    {
        i--
        continue
    }
    
    urll.push(`../../../images/${value}/${arr[i]}.jpg`)

}
console.log(urll)

for (let i = 1; i <= 6; ++i)
{
    const x = document.getElementById(`${i}`)
    const y = document.getElementById(`t${i}`)
    x.src = urll[i - 1]
    console.log(y)

    console.log(x.src)
}