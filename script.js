const mesange = document.querySelector('div')
const boton = document.querySelector('#cambiar-mensaje')

boton.addEventListener('click',()=>{
	mesange.textContent = 'nuevo msk'
	alert('hola mundo')
})

