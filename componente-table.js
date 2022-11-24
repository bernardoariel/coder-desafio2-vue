Vue.component('componente-table', {
    props:{ 
        //aca viene el array de objetos con usuarios personajes o autos
        datos_tabla:{
            type: Array,
            default: () => ({}),
            required:true
        },
        //Objeto que tiene varias propiedades con clases de bootstrap
        props_tabla:{
            type:Object,
            required:true
        },
        // no esta requerido así en la tabla de autos se muestra ese div vacio en verde
        titulo_tabla:String,
        // es para el coldspan requerido
        col:{ 
            type:Number,
            required:true
        },
        // el array de datos con los nombres de las columnas de cada tabla
        cabeceras:{
            type:Array,
            required:true
        },
        // Con esta prop puedo modificar el aspecto de la tabla 
        tipo:{
            type:String,
            required:true
        },
        // modifico una cabecera en particular con la etiqueta style
        estilo_objeto:Object  
    },
    computed:{
        cantidadDeElementos(){
            return this.datos_tabla.length
        }
    },
    template:`
        <table class="table" 
            :class="[props_tabla.table_strip, props_tabla.table_hover,
            props_tabla.table_fondo,props_tabla.table_texto,props_tabla,
            props_tabla.table_texto]">

            <thead :class="props_tabla.header_th">
              <tr>
                <td :colspan="col" 
                :class='[props_tabla.table_align, props_tabla.header_bgcolor,
                    props_tabla.header_textcolor,props_tabla.texttransform,
                    props_tabla.heder_textweight]'>
                {{titulo_tabla}}
                </td>
              </tr>
              <tr>
                <th scope="col" v-for="(label,index) of cabeceras"
                :style="estilo_objeto">{{label}}</th>
                
              </tr>
            </thead>
            
            <tbody>
             
                <tr v-for="(item,index) of datos_tabla">
                    <th scope="row">{{index + 1}}</th>
                    <td><img  width="50px" :src="item.avatar" ></td>
                    <td>{{item.nombre}}</td>

                    <td v-if="(tipo!='autos')">{{item.rol}}</td>
                    <td v-else>
                        <span :class="['badge', (item.estado)? 'bg-secondary':'bg-info']">
                        {{(item.estado)? 'No puede Circular':'Puede Circular'}}
                        </span>
                    </td>

                    <td v-if="(tipo=='usuarios')">
                        <span :class="['badge', (item.estado)? 'bg-success':'bg-danger']">
                        {{(item.estado)? 'Habilitado':'Inhabilitado'}}
                        </span>
                    </td>
                    <td v-if="(tipo=='heroes')">
                        <span :class="['badge', (item.estado)? 'bg-primary':'bg-warning']">
                        {{(item.estado)? 'Life':'Dead'}}
                        </span>
                    </td>
                
                </tr>
              
            </tbody>

            <tfoot>

                <tr>

                <th :colspan="col" :class="[props_tabla.table_align,props_tabla.table_texto]">
                Total de {{tipo}}: <span class="float-end badge text-bg-danger"><strong>{{cantidadDeElementos}}</strong></span>
                </th>

                

                </tr>

            </tfoot>
        </table>
    
    `
})