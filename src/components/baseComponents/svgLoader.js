import svgIcon from '@assets/svgs/check.svg?url'
import svgRaw from '@assets/svgs/close.svg?raw'

console.log(svgIcon)

// 第一种使用svg的方式
// const img = document.createElement('img')

// img.src = svgIcon

// document.body.appendChild(img)

// 第二种加载svg的方式
document.body.innerHTML = svgRaw

const svgElement = document.getElementsByTagName('svg')[0]
svgElement.addEventListener('mouseenter', () => {
  // 更改svg颜色 不是background color 而是fill属性
  svgElement.style.fill = 'red'
})

svgElement.addEventListener('mouseleave', () => {
  svgElement.style.fill = 'black'
})