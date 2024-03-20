
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url)); //definir el __dirname

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que el formulario se envíe
  
      // Obtener los valores de los campos
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const mensaje = document.getElementById('mensaje').value;
  
      // Crear un objeto con los datos del formulario
      const formData = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
      };
  
      // Agregar el objeto de datos al array
      const datos = [];
      datos.push(formData);
  
      // Mostrar los datos en la consola (solo para demostración)
      console.log('Datos del formulario:', datos);
  
      // Aquí puedes realizar cualquier acción adicional, como enviar los datos a un servidor
    });
  });

// Convertir el objeto JSON a formato de cadena
const datosString = JSON.stringify(datos, null, 2);

// Nombre del archivo
const nombreArchivo = 'archivo.txt';

const pat = path.dirname(__dirname)

console.log(pat)

// Escribir en el archivo
fs.writeFile(nombreArchivo, datosString, 'utf8', (err) => {
  if (err) {
    console.error('Error al escribir en el archivo:', err);
    return;
  }
  console.log(`Se ha creado el archivo ${nombreArchivo} con éxito.`);
});