const app = new Vue({
    el:'#app',
    data:{

        /* array de usuarios para la primera tabla */
        usuarios:[
            {
                avatar:"./img/avatar1.png",
                nombre:"Ariel Bernardo",
                rol:"Administrador",
                estado: true
            },
            {
                avatar:"./img/avatar2.png",
                nombre:"Noelia Gonzalez",
                rol:"Editor",
                estado: true
            },
            {
                avatar:"./img/avatar3.png",
                nombre:"Laura Gomez",
                rol:"Usuario Comun",
                estado: false
            },
            {
                avatar:"./img/avatar4.png",
                nombre:"Juan Gabriel Maquez",
                rol:"Usuario Comun",
                estado: false
            },
            {
                avatar:"./img/avatar5.png",
                nombre:"Juan Gabriel Maquez",
                rol:"Usuario Comun",
                estado: true
            },
        ],
        /* propiedades tabla usuario */
        propiedades_tabla_usuario:{
            table_strip:'table-striped',
            table_hover:'table-hover',
            header_th:'table-info',
            table_fondo:'',//table-dark
            table_texto:'text-secondary',
            table_align:'text-center',
            header_bgcolor:'bg-danger',
            header_textcolor:'text-white',
            texttransform:'text-uppercase', //text-lowercase text-capitalize
            heder_textweight:'fw-bold'
        },
        /* label de cabecera de usuarios */
        labelheader_usuarios:['#','Avatar','Nombre','Rol','Estado'],
        /* titulo para la tabla */
        titulo:'Usuarios del Sistema',
        /* Cantidad de columnas para el titulo coldspan para usuario y personajes */
        columnas:5,
        /* array de heroes para la primera tabla */
        heroes:[
            {
                avatar:"./img/marvel1.jpg",
                nombre:"Jennifer Walters",
                rol:"She-Hulk",
                estado: true
            },
            {
                avatar:"./img/marvel2.png",
                nombre:"Steve Grant Rogers",
                rol:"Capitan America",
                estado: false
            },
            {
                avatar:"./img/avatar3.png",
                nombre:"Tony Stark",
                rol:"Iron Man",
                estado: false
            }
        ],
        /* propiedades tabla usuario */
        propiedades_tabla_heroes:{
            table_strip:'table-striped',
            table_hover:'table-hover',
            header_th:'table-light',
            table_fondo:'table-dark',//table-dark
            table_texto:'text-white',
            table_align:'text-center',
            header_bgcolor:'bg-dark',
            header_textcolor:'text-white',
            texttransform:'text-capitalize', //text-lowercase text-capitalize
            heder_textweight:'fw-bold'
        },
         /* label de cabecera de heroes */
        labelheader_heroes:['cant','Avatar','Nombre','Personaje','Está vivo?'],
        /* array de Autos para la primera tabla */
        autos:[
            {
                avatar:"./img/auto1.png",
                nombre:"Porche mod.2008",
                estado: false
            },
            {
                avatar:"./img/auto2.png",
                nombre:"Chevrolet Camaro",
                estado: true
            },
            {
                avatar:"./img/auto3.png",
                nombre:"PapaMovil",
                estado: true
            },
            {
                avatar:"./img/auto4.png",
                nombre:"Auto Volador",
                estado: false
            }
        ],
        /* propiedades tabla autos */
        propiedades_tabla_autos:{
            table_strip:'table-striped',
            table_hover:'',
            header_th:'table-light',
            table_fondo:'table-success',//table-dark
            table_texto:'text-danger',
            table_align:'text-center',
            header_bgcolor:'bg-success',
            header_textcolor:'text-white',
            texttransform:'text-capitalize', //text-lowercase text-capitalize
            heder_textweight:'fw-bold'
        },
        /* label de cabecera de autos */
        labelheader_autos:[' - ','Foto','Auto','Puede Circular?'],
        /* Cantidad de columnas para el titulo coldspan */
        columnas_autos:4,
        /* color horrible  para la cabecera de auto */
        cabeceraauto:{
            color: '#FF0000',
            background:'#0000FF'
        }
    }
})