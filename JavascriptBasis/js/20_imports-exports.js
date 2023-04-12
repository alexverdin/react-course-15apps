/**
 * Importar y exportar funciones permite reutilizar código de diferentes scripts
 * a fin de evitar duplicarlo.
 * No es necesario cargar todos los scripts en el HTML, sólo se cargan los que interactúan con el mismo,
 * por lo que en este ejemplo, el script de "funciones.js" es invisible para el index.html
 * Recuerda que para que sea posible usar el import y export, es necesario que en la etiqueta <script>
 * se agregue el tipo "module" a fin de permitir las importaciones.
 * ejemplo: <script src="./nombreScript.js" type="module"></script>
 */

import { sumar } from "./funciones.js";

const res = sumar(20, 16);
console.log(res);
