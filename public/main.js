
console.log('hello world')
let n = 2
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET',`/page${n}`);
  request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200) {
      console.log(request.response)
      const array = JSON.parse(request.response);
      array.forEach(item => {
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        li.textContent = item.id;
        xxx.appendChild(li);
      })
      n++
      if(n-1 === 3){
        n = 3
      }
      console.log(n)

    }
  }
  request.send();
}
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET','/5.json');
  request.onreadystatechange = (res) => {
    if(request.readyState === 4 && request.status == 200){
      console.log(request.response)
      const obj = JSON.parse(request.response)
      console.log(obj)
      console.log(obj)
    }
  }
  request.send();
}
getXML.onclick = () => {
  console.log(1)
  const request = new XMLHttpRequest();
  request.open('GET','/4.xml');
  request.onreadystatechange = (res) => {
    if(request.readyState === 4 && request.status === 200){
      const dom = request.responseXML;
      console.log(dom)
      const content = dom.getElementsByTagName('message')[0]
      console.log(content)
      document.body.appendChild(content)
    }else{
      console.log(res.currentTarget.response)
    }
  }
  request.send()
}
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
  // 请求
  request.send();
}