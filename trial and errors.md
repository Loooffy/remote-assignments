### Week-4
#### Assignment-1
- error1: 在setTimeout裡不能直接用callback(params)傳參數，而應該用callback.bind(this, params)\
ref. [將參數傳送到 callback 函式](https://www.jstips.co/zh_tw/javascript/passing-arguments-to-callback-functions/)

#### Assignment-2
- error1: 知道是語法錯誤，但不知道發生在哪裡，可以用現成的工具，e.g. JsrHint\
ref. [JSHint](https://jshint.com/)
- error2:\ 
在let info = document.getElementsByClassName("info") 下考慮以下三段code\
\
code-1 console.log(info[0])\
code-2 setTimeout(() => console.log(info[0]), 1000)\
code-3 console.log(info)\
\
code-1 會得到undifened，我想應該是頁面還沒載完就去抓info，所以抓不到\
於是在code-2設個timeout驗證，回傳div element，表示結果上述的假設沒錯\
ref. Arthur: 把javascript放在html的最底或是在body放onload可以確保讀完content之後才執行javascript\
alter. document.DOMContentLoaded\

- error3: 要注意到底傳回來的是array還是object\

#### Assignment-3

- error1:\
設定帳號密碼：先`sudo mysql`進mysql之後`use mysql` 然後`create user 'name'@'localhost' identified by 'password'`\
帳號密碼必須包含一個大寫、一個小寫、一個數字、一個特殊符號\

- error2:\
auto_increment對應的應該是int而非char

- error3:\
一定要搞清楚到底是在後端還是前端執行！

- error4:\
到mysql取資料也需要時間，所以得設定取完資料後的callback

- tip1:\
.vimrc中設定let curr=@% <---目前檔案的名稱，再用:execute '!node ' . curr來啟動執行

- error5:\
無法取得form data，還不是非常確定原因，但是有找到解法\
ref. [multipart/form-data](https://medium.com/cubemail88/node-js-express-js-body-parser-%E8%99%95%E7%90%86multipart-form-data%E7%9A%84%E8%A7%A3%E6%B1%BA%E6%96%B9%E6%A1%88-d89d2699b9f)
