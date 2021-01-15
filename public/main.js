
console.log('hello world')
getJS.onclick = ()=>{
  const request = new XMLHttpRequest();
  request.open('GET','/2.js')
  request.onload = (res) => {
    console.log('res-------')
    console.log(res)
    console.log(res.currentTarget.response)
    console.log('request.response')
    console.log(request.response)
    const script = document.createElement('script')
    script.innerHTML = request.response

    console.log(script)
    document.body.appendChild(script)
  }
  request.onerror = (err) => {
    console.log('gun')
  }
  request.send()
}

getCSS.onclick = () => {
  //创建
  const request = new XMLHttpRequest();
  //设置
  request.open('GET','/style.css')
  //成功
  request.onload = () => {
    // 创建style标签
    const style = document.createElement('style')
    // 添加style内容
    style.innerHTML = request.response
    // 插到head里
    document.head.appendChild(style)
  }
  //报错
  request.onerror = () => {
    console.log('error')
  }
  // 请求
  request.send();
}