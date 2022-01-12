var num=0;
parseInt(document.getElementById("num").innerText)=num;

function count() {
    if(num>=0)
    {
        num++;
        document.getElementById("num").innerText=num;
    }
    
}
