
var counter=0;
var button=document.getElementById('counter');
button.onClick=function(){
    //make a request to the counter endpoint
    
    
    
    //render the variable in the correct pan
    counter=counter+1;
    var span =document.getElementById('count');
    span.innerHTML=counter.toString();
};