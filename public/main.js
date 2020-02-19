// console.log('Hi Ajax');

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/style.css')
    request.onload = () => {
        console.log('成功');
        let style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
    }
    request.onerror= () => {
        console.log('失败');
    }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/2.js')
    request.onload = () => {
        console.log('成功');
        let script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror= () => {
        console.log('失败');
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/3.html')
    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4) {
            console.log('下载完成');
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            } else {
                console.log('加载失败');
            }
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                let dom = request.responseXML
                let text = dom.getElementsByTagName('warning')
                let textTrim = text[0].innerHTML.trim()
                console.log(textTrim);
            } else {
                console.log('加载失败');
            }
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                let json = JSON.parse(request.response)
                console.log(json.name);
                console.log(myName.textContent);
                myName.textContent = json.name

            } else {
                console.log('加载失败');
            }
        }
    }
    request.send()
}