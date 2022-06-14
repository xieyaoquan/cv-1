let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/*
*你好，我叫小泉
*接下来我演示一下我的前端功底
*首先我要准本一个div
*/
#div1 {
  border: 1px red solid;
  width: 200px;
  height: 200px;
}
/*
*接下来我把 div 变成一个八卦图
*注意看好了
*首先把div变成一个圆
*/
#div1{
  border-radius: 50%;
  border:none;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  
}
/* 
*八卦是阴阳形成的
* 一黑一白
*/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个小球 */
#div1::before {
  position:absolute;
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background:#000;
  border-radius:50%;
}
#div1::after {
  position:absolute;
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background:#fff;
  border-radius:50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
`;
let string2 = "";
let n = 0;
let step = () => {
  setTimeout(() => {
    // 如果是回车，插入换行字符
    // 如果是空格，插入换空格字符
    // 两者不是，直接照搬字符串
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scroll(0, 99999);
    html.scroll(0, 99999);
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 5);
};
step();
