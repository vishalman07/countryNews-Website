let iterateThis;

let apiKey=`7e086a2f42494942b1e2380246a8372b`;
let sources=`bbc-news`;
let category='business';
let url= `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;

function getData(){
fetch(url).then((response)=>{
  return response.json();
}).then((data)=>{
 
  let string=``;
  let obj=data.articles;
  
  obj.forEach((element,index)=>{

    iterateThis=` <div class="accordion-item">
<h2 class="accordion-header" id="flush-heading${index}">
  <button class="accordion-button collapsed" style='color:blue;' type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
   <b style='color:blue;'>Breaking News ${index+1}:</b>&nbsp ${element.title}
  </button>
</h2>
<div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#accordionContainer">
  <div class="accordion-body"> ${element.description} <a type='button' href='${element.url}' style=' background-color: lightblue;
  color: black;
  font-weight: bold;
  border-radius: 20px;' target='_blank' class='btn btn-primary btn-sm'>Read More</a></div>
</div>
</div>
`;
    string +=iterateThis;

  })
  let news=document.getElementById('accordionContainer');
  news.innerHTML=string;
})
};

getData();

let msg=document.getElementById('msg');
let subscribe=document.getElementById('Btn');

subscribe.addEventListener('click',postRequest);
let elem=document.getElementById('newsletter1');
function postRequest(){
  let url2=`https://reqres.in/api/users`;

  let data1=elem.value;
  let email=data1;
  let params= {
    method:'post',
    header:{
      'Content_Type':'application/json'
    },
    body: email
  }
  fetch(url2,params).then((response1)=>{
    return response1.json();
  }).then((data2)=>{
    console.log(data2)
    if(data2!=null)
    {
      elem.value='';
      msg.innerText=`Thank you!`
      setTimeout(() => {
        msg.innerText=``
      }, 1000);
    }
  })
}
