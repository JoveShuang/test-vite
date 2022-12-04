// 主要帮助学习加载静态图片资源
import tempPicUrl from '@assets/images/temp.png'

// 服务端 会去读取这个图片文件的内容---> Buffer 二进制字符串
// import tempPicUrl from '@assets/images/temp.png?raw'

console.log(tempPicUrl)

const img = document.createElement('img')

img.src = tempPicUrl

document.body.appendChild(img)

