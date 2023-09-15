let contactos = [
    {
        name: `Alejandro Peña`
    },
    {
        name: `Alexandra Silva`
    },
    {
        name: `Natalia Piña`
    },
    {
        name: `Jhon Farfan`
    }
];

contactos.push(
    {
        name: `Angie Osorio`
    }
)

contactos = contactos.filter(item=>item.name!==`Alexandra Silva`);

console.log(contactos);