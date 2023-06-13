var noti=document.querySelector('h4');
var select=document.querySelector('.select');
var button =document.getElementsByTagName('button');
for(but of button)
{
    but.addEventListener('click', (e)=>{
        var add=Number(noti.getAttribute('data-count')||0);
        noti.setAttribute('dat-count', add+1);
        noti.classList.add('zero');

        var parent = e.target.parentNode;
        var clone= parent.cloneNode(true);
        select.lastElementChild.innerText= "Buy-Now";
        if(clone){
            noti.onclick = ()=>{
                select.classList.toggle('display');
            }
        }

        var image =e.target.parentNode.querySelector('img');
        var span =e.target.parentNode.querySelector('span');
        var s_image= image.cloneNode(false);
        span.appendChild(s_image);
        span.classList.add('active');
        setTimeout(()=>{
            span.removeChild(s_image);
            span.classList.remove('active');
        })

    } )
}