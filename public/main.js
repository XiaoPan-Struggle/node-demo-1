
console.log('hello world')
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET','/3.html')
  request.onload = (res) => {
    const template = document.createElement('div')
    console.log(res.currentTarget.response === request.response)
    template.innerHTML = res.currentTarget.response
    console.log(template)
    document.body.appendChild(template)
  }
  request.onerror = () =>{}
  request.send()
}
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
    console.log(err)
    console.log('gun')
  }
  request.send()
}

getCSS.onclick = () => {
  //创建
  const request = new XMLHttpRequest();
  //设置
  request.open('GET','/style.css')

  request.onreadystatechange = (res) => {
    if(request.readyState === 4){
      if(request.status>= 200 && request.status < 300){
        // 创建style标签
        const style = document.createElement('style')
        // 添加style内容
        style.innerHTML = request.response
        // 插到head里
        document.head.appendChild(style)
      }else{
        console.log(res.currentTarget.response)
      }
    }
  }
  // //成功
  // request.onload = () => {
  //   // 创建style标签
  //   const style = document.createElement('style')
  //   // 添加style内容
  //   style.innerHTML = request.response
  //   // 插到head里
  //   document.head.appendChild(style)
  // }
  // //报错
  // request.onerror = () => {
  //   console.log('error')
  // }
  // 请求
  request.send();
}