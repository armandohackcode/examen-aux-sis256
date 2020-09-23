/**
 * Respuesta a la pregunta 2;
 */
var p2 =  document.getElementById('p2');
p2.addEventListener('click',function(){
    fetch('./src/components/tres-en-raya.html')
        .then((res,req)=>{
            return res.text(req);
        })
        .then((data)=>{
            let secBody = document.getElementById('respuestas');
            secBody.innerHTML =data;
            //console.log(data);
        })
        .catch((e)=>console.error(e));
});

function play(id){
            
    var user = document.querySelector("#user");
    var btn = document.getElementById(`btn${id}`);
    if(user.innerText == "1"){
        btn.classList.add('fa-times');
        btn.classList.remove('fa-question');
        user.innerText = 2 ;
    }
    else{
        btn.classList.add('fa-circle-o');
        btn.classList.remove('fa-question');
        user.innerText = 1;
    }
}

/**
 * Respuesta pregunta 3
 */
var p3 =  document.getElementById('p3');
p3.addEventListener('click',function(){
    fetch('./src/components/login.html')
        .then((res,req)=>{
            return res.text(req);
        })
        .then((data)=>{
            let secBody = document.getElementById('respuestas');
            secBody.innerHTML =data;
            //console.log(data);
        })
        .catch((e)=>console.error(e));
});
function autentificar(){
    let formData = new FormData();
    formData.append('email',document.getElementById('email').value);
    formData.append('password',document.getElementById('pass').value);
    fetch('./src/components/authentificar.php',{
        method:'POST',
        body: formData
    }).then((res,req)=>{
        return res.text(req);
    }).then((data)=>{
        let secBody = document.getElementById('respuestas');
            secBody.innerHTML =data;
    }).catch((e)=>console.error(e));
}
/**
 * Respuesta pregunta 4
 */

var p4 =  document.getElementById('p4');
p4.addEventListener('click',function(){
    fetch('./src/components/listar.php')
        .then((res,req)=>{
            return res.text(req);
        })
        .then((data)=>{
            let secBody = document.getElementById('respuestas');
            secBody.innerHTML =data;
            //console.log(data);
        })
        .catch((e)=>console.error(e));
});