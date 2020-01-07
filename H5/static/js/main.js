// 设计宽度
var deviseW = 750
// 设计高度
var deviseH = 1508

var scaleHeight = 0
function getScale () {
  const scaleBox = document.getElementsByClassName('scale-box')[0]
  // 如果比例大于1则进入电脑模式
  if ((window.innerWidth / window.innerHeight) < 1) {
    var scale = window.innerWidth / deviseW
    scaleBox.style.width = deviseW + 'px'
    scaleBox.style.height = deviseH + 'px'
    scaleBox.style.transform = `scale(${scale}, ${scale})`
    // console.log(window.innerHeight, deviseH * scale)
    scaleBox.style.transformOrigin = `0 ${(window.innerHeight - deviseH * scale) + 'px' } 0`
  } else {
    document.body.classList.add('pc')
    var scale = (window.innerHeight / deviseH).toFixed(2)
    scaleBox.style.width = deviseW + 'px'
    scaleBox.style.height = deviseH + 'px'
    scaleBox.style.transform = `scale(${scale}, ${scale}) translate(${(window.innerWidth - deviseW * scale) / 2 / scale + 'px' }, 0)`
    scaleBox.style.transformOrigin = '0 0 0'
  }
  setTimeout(() => {
    scaleHeight = scaleBox.offsetHeight * scale
    if (window.innerHeight > scaleHeight) {
      document.body.style.height = 100 + '%'
    } else {
      document.body.style.height = scaleHeight + 'px'
    }
  }, 0)
}

getScale()

let timer = null
window.onresize = () => {
  // console.log(timer)
  window.clearTimeout(timer)
  timer = setTimeout(() => {
    getScale()
  }, 300)
}

function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false})

var toast = function (text, config) {
  if (!config) config = {}
  time = config.time || 2000
  fontSize = config.fontSize || 14
  container = config.container || document.body
  if (window.owo.state.toastClock) {
    clearTimeout(window.owo.state.toastClock)
    hideToast()
  }
  var toast = document.createElement("div")
  toast.setAttribute("id", "toast")
  toast.setAttribute("class", "toast")
  // 设置样式
  toast.style.cssText = "position:fixed;z-index:999;background-color:rgba(0, 0, 0, 0.8);top:17%;border-radius:" + parseInt(fontSize / 3) + "px;left:50%;transform: translateX(-40%) translate3d(0, 0, 0);margin:0 auto;text-align:center;color:white;max-width:60%;padding:" + parseInt(fontSize / 2) + "px 10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:" + fontSize + 'px;'

  toast.innerHTML = text
  container.appendChild(toast)
  function hideToast() {
    document.getElementById('toast').outerHTML = ''
    window.owo.state.toastClock = null
  }
  window.owo.state.toastClock = setTimeout(hideToast, time)
}