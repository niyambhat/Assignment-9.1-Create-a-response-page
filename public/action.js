let stats = document.querySelector('.statistics');


main();

function main(){
    document.addEventListener('DOMContentLoaded', getStats);
}

function getStats(){

dataPars();
}


function dataPars(){
    fetch("/stats")
    .then((response) => {
    //   console.log("resolved", response);
      return response.json();
    }).then((data)=>{
        data.forEach(myFunction);
        function myFunction(value){
        let wrap=document.createElement('ul');
        wrap.innerHTML= 
        `<li><strong>${value.outcome}</strong></li>
        <li>Total site visits: ${value.id}</li>
        <li>Total win: ${value.wins}</li>
        <li>Total loss:${value.loss}</li>
        `
        stats.appendChild(wrap);
    
        }
    })
    .catch((err) => {
      console.log("error retrieving data", err);
    });
}

