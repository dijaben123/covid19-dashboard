const ctx = document.getElementById('myChart').getContext('2d');
let list=document.getElementById('side');
let str="<ul>";

function dicli(e){
    let code=e.target.getAttribute("id");
    let httpreq=new XMLHttpRequest();
    httpreq.open("GET","https:/api.covid19api.com/dayone/country",true);
}

let httpreq=new XMLHttpRequest();
httpreq.open("GET","https:/api.covid19api.com/countries",true);
httpreq.onreadystatechange=function(){
    if(httpreq.readyState==4 && httpreq.status==200){

        let raw=JSON.parse(httpreq.response);
    
           resp=raw.sort((a,b)=>a.Country<b.Country?-1:1);
    resp.forEach(e => {
        let d=document.createElement("div");
        d.setAttribute('id',e.ISO2)
        d.setAttribute('class',"listitem");
        d.innerHTML=e.Country;
       
        d.addEventListener("click",dicli);
        list.appendChild(d);
        
    });
}}

httpreq.send();






















// str+="</ul>"
// list.innerHTML=str;

// list.innerHTML='<ul><li>un</li> <li>un</li> <li>un</li> <li>un</li>  <li>un</li>  <li>un</li> <li>un</li> </ul>'







































const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: []
    },
    options: {
        scales: {
        yAxes:[{
            tiks:{
                beginAtZero: true
            }
        }]
    }}
});

