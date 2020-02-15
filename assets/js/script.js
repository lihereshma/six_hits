var result = document.getElementById('output');
var btn = document.getElementById('hit');

btn.addEventListener("click",function(){
    var request = new XMLHttpRequest();
    request.open('GET','https://jsonplaceholder.typicode.com/posts',true);
    request.onload = function(){
        if(this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(request.responseText);  
            display(data);
        }
    };    
    request.send();
});
var num = 6;
function display(data){
    debugger; 
    var rem = data.length%6;
    console.log(rem) ;
    if(num == data.length-rem) {
        btn.style.display = "none";
    }   
    for(var i=num; i< num+6; i++){
        var ulRow = document.createElement("ul"); 
        var liTitle = document.createElement("li");
        liTitle.textContent = "Title: "+data[i].title;
        ulRow.appendChild(liTitle);

        var liBody = document.createElement("li");
        liBody.textContent =  "Description: "+data[i].body;
        ulRow.appendChild(liBody);  
        
        console.log(ulRow); 
        var box = document.getElementById('output');
        box.appendChild(ulRow); 
    }
    num += 6;    
}