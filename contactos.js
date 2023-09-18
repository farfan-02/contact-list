let contactos = [
    {
        id: `Alejox424`,
        nombre: `Alejandro`,
        apellido: `Peña`,
        telefono: 3215489674,
        ubicacion:{
            ciudad: `Bogota`,
            direccion: `calle 15 # 25-13`,
        }
    },
    {
        id: `Alexa0_0`,
        nombre: `Alexandra`,
        apellido: `Silva`,
        telefono: 3114685247,
        ubicacion:{
            ciudad: `Bogota D.C`,
            direccion: `carrera 30 # 10-11`
        }
    },
    {
        id: `Nata13250`,
        nombre: `Natalia`,
        apellido: `Piña`,
        telefono: 3202048910,
        ubicacion:{
            ciudad: `Mosquera`,
            direccion: `calle 2 # 20-01`,
        }
    },
    {
        id: `Farfanserna_`,
        nombre: `Jhon`,
        apellido: `Farfan`,
        telefono: 3104108692,
        ubicacion:{
            ciudad: `Manizales`,
            direccion: `carrera 19 # 21-11`,
        }
    }
];

contactos.push(
    {
        id: `Angie123`,
        nombre: `Angie`,
        apellido: `Osorio`,
        telefono: 3228017506,
        ubicacion:{
            ciudad: `Quimbaya`,
            direccion: `carrera 5 # 02-22`,
        }
    }
);

contactos = contactos.filter(
    item=>item.id!==`Alexa0_0`,
    item=>item.nombre!==`Alexandra`,
    item=>item.apellido!==`Silva`,
    item=>item.telefono!==3114685247,
    item=>item.ubicacion,
    );

console.log(contactos);