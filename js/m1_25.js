var req = new XMLHttpRequest(); 
req.onreadystatechange = function a(){
    console.log(this.readyState, this.status);
    
    if(this.readyState == 4)
    {
        console.log(this.response);
        var data = JSON.parse(this.response);
        for(var i in data){
            var t = document.getElementById("template").cloneNode(true);
            t.removeAttribute("id"); // 더 이상 template이란 id를 사용하지 않도록 한다.
            
            t.children[0].innerText = data[i].id;
            t.children[1].innerText = data[i].msg;
            document.body.appendChild(t);
        }
    }
}

req.open("GET", "../json_data.txt");
req.send();