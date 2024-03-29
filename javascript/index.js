/*
const form = document.getElementById('contact-form');
const contactList = document.getElementById('contact-list');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = form.name.value;
    const phone = form.phone.value;

    // Adicione a linha à tabela de contatos
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${name}</td><td>${phone}</td>`;
    contactList.appendChild(newRow);

    // Limpe os campos do formulário
    form.reset();
});
*/

const form = document.getElementById('contact-form');
const contactList = document.getElementById('contact-list');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = form.name.value;
    const phone = form.phone.value;

    // Formate o telefone (DDD entre parênteses e traço)
    const formattedPhone = `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`;

    // Adicione a linha à tabela de contatos
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${formattedPhone}</td>
        <td class="delete-icon"><i class="fas fa-trash"></i></td>
    `;
    contactList.appendChild(newRow);

    // Limpe os campos do formulário
    form.reset();

    // Adicione a funcionalidade de exclusão
    const deleteIcons = document.querySelectorAll('.delete-icon');
    deleteIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const row = icon.parentElement;
            row.remove();
        });
    });
});