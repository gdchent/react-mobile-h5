

// 是否为移动端
export const isMobile =
  /mobile/i.test(window.navigator.userAgent) || document.body.clientWidth < 1200
// 延时
export const delay = time => new Promise(resolve => setTimeout(resolve, time))

// 数组对象深拷贝
export const deepCopy = (source) => {
  if (!source || typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  for (let keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = deepCopy(source[keys])
      } else {
        targetObj[keys] = source[keys]
      }
    }
  }
  return targetObj
}

/**
* @description 绑定事件 on(element, event, handler)
*/
export const on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

// 预加载图片
export const loadImg = async ({ images }) => {
  return new Promise(resolve => {
    const seq = images.map(img => {
      return new Promise(resolve => {
        let imgObj = new Image()
        imgObj.onload = () => {
          resolve()
        }
        imgObj.onerror = () => {
          resolve()
        }
        imgObj.src = img
      })
    })
    Promise.all(seq)
      .then(() => {
        resolve()
      })
      .catch(console.error)
  }).catch(console.error)
}
