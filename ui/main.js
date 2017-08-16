console.log('Loaded!');
var button=document.getElementNyId('counter');
button.onClick=function(){
    //make a request to the counter endpoint
    
    
    
    //render the variable in the correct pan
    conter=counter+1;
    var span =document.getElementById('count');
    span.innerHTML=counter.toString();
}