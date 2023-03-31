import usuarios from "./usuarios.js";
const cinta=document.querySelector('.tabla')
const ico=document.getElementById('boton')
const prueba=document.getElementById('prueba')


let user=''
let encontrado=''


if(localStorage.getItem('usuarios')!=null){
    user=JSON.parse(localStorage.getItem('usuarios'))
    console.log(user)
}else{
    user=usuarios
    console.log(user)
}


user.forEach(elemento => {
    cinta.innerHTML+=`
    <div class="item" id="item">
        <div class="are">
            ${elemento.area}
        </div>
        <div class="nombr">
            ${elemento.nombres} ${elemento.apellidos}
        </div>
        <div class="use">
             ${elemento.usuario}
        </div>
        <div class="emai">
            ${elemento.email}
        </div>
        <div class="eda">
        ${elemento.edad}
        </div>
    </div>
    `
});

prueba.addEventListener('click',()=>{
    if(user.find(usuarios=> usuarios.nombres==buscar.value)){
        const indice=user.findIndex(usuarios=>usuarios.nombres==buscar.value)
        encontrado=user[indice]
        user==encontrado
        console.log(encontrado)
        document.getElementById("item").classList.add("filtro")        
    }else{
        console.log('No encontre nada')
    }
})





ico.addEventListener('click',()=>{
    location.href="registrar.html"
})


