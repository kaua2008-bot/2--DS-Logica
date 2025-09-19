// cria titulo
const titulo = document. createElement ('h1');
titulo.textContent = 'lista de compras';
document.body.appendChild(titulo);
 
// cria input de texto
const inputItem = document.createElement('input');
inputItem.type  = 'text';
inputItem.placeholder = 'Digite um item ';
document.body.appendChild(inputItem);

//cria botão de adicionar  
const btnAdd = document.createElement('button');
btnAdd.textContent = 'Adicionar';
document.body.appendChild(btnAdd);

// cria lista
const lista = document.createElement('ul');
document.body.appendChild(lista);

// função para adicionar item 
function adicionarItem() {
    const valor = inputItem.value.trim();
    if (valor !== '') {
    const li = document.createElement('li');
    li.textContent = valor;
    lista.appendChild(li);
    inputItem.value = '';
    inputItem.focus(); // volta o foco para o campo 
    }
} 

// evento do botão 
btnAdd.addEventListener('click', adicionarItem);

//evento para tecla enter no input
inputItem.addEventListener('keydown'), (Event) => {
 if (Event.key === 'enter')  {
    adicionarItem();
 }
}
