// JavaScript code 

function search_docs() { 

    let input = document.querySelector('.search').value 

    input=input.toLowerCase(); 

    let x = document.getElementsByClassName('docs'); 

      

    for (i = 0; i < x.length; i++) {  

        if (!x[i].innerHTML.toLowerCase().includes(input)) { 

            x[i].style.display="none"; 

        } 

        else { 

            x[i].style.display="list-item";                  

        } 

    } 

} 

