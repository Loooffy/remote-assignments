function ajax(src, callback){
    // your code here
    xhr=new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            callback(JSON.parse(this.response))
        }
    }
    xhr.open("GET", src, true)
    xhr.send();
}

function render(data){
    // your code here.
    // document.createElement() and appendChild() methods are preferred.
    let info = document.getElementsByClassName("products")[0]
    for (item in data){
        let product = document.createElement("DIV")
        product.setAttribute("class", "product")
        info.appendChild(product)
        for (prop in data[item]){
            let property = document.createElement("DIV")
            property.setAttribute("class", "property")
            property.innerHTML=prop
            product.appendChild(property)
            let value = document.createElement("DIV")
            value.setAttribute("class", "value")
            value.innerHTML=data[item][prop]
            product.appendChild(value)
        }
    }
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
    render(response);
}); // you should get product information in JSON format and render data in the page
