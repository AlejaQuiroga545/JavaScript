
let array = ['Morado', 'Azul', 'Rosado', 'Naranja']
let container = document.getElementById('container')

container.innerHTML += `<h3>Colores</h3>`
array.forEach (color => {
    container.innerHTML += `<div class="box">El color <b>${color}</b> es muy bonito</div>`;
})

let motArray = ['"Cree en ti mismo y todo será posible."', '"La innovación distingue a un líder de un seguidor."', '"No limites tus desafíos, desafía tus límites."']
let space = document.getElementById('motivation')

space.innerHTML += `<h3>Frases motivadoras</h3>`
motArray.forEach( phrase => {
    space.innerHTML += `<p>${phrase}</p>`
})
