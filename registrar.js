import usuarios from "./usuarios.js";

const formulario=document.getElementById('formu');
const icono=document.getElementById('ico')

let personas=''



formulario.addEventListener('click',(e)=>{
e.preventDefault()
console.log(e.target)
if(e.target.id=='agregar'){
    if(localStorage.getItem('usuarios')==null){
        personas=[...usuarios]
    }else{
        personas=JSON.parse(localStorage.getItem('usuarios'))
    }
    personas.push({nombres:nombre.value, apellidos:apellido.value, area:area.value, usuario:usuario.value, edad:edad.value,direccion:direccion.value,email:email.value})
    localStorage.setItem('usuarios',JSON.stringify(personas))
    nombre.value=""
    apellido.value=""
    area.value=""
    usuario.value=""
    edad.value=""
    direccion.value=""
    email.value=""
    location.href="index.html"
}
})


ico.addEventListener('click',()=>{
    location.href="index.html"
})
