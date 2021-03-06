app.factory('AppService', function () {
    function setDemoData() {
        const demoData = {
          "pacientes": [
             {
               "id":"1",
              "datosPersonales":{
                "TipoDeUsuario":"Paciente",
                "NHC":12,
                "Nombre":"Edu",
                "Apellido1":"Alcover",
                "Apellido2":"Miranda",
                "Genero":"Mujer",
                "FechaDeNacimiento":"12/03/1977",
                "NIFPasaporte":"12838383X"
              },
              "direccion":{
                "Calle":"Sarrión",
                "Numero":12,
                "Puerta":12,
                "CodigoPostal":12,
                "Ciudad":12
              },
              "listadoAseguradoras":{
                "NombreAseguradora":"kjlkjl",
                "TipoDeSeguro":12,
                "NumeroDeLaTarjeta":12
           
              }
            },
            {
              "id":"2",
              "datosPersonales":{
                "TipoDeUsuario":"Paciente",
                "NHC":12,
                "Nombre":"iji",
                "Apellido1":"jijj",
                "Apellido2":"kjk",
                "Genero":"Mujer",
                "FechaDeNacimiento":12,
                "NIFPasaporte":"12434343"
              },
              "direccion":{
                "Calle":"jhjj",
                "Numero":12,
                "Puerta":12,
                "CodigoPostal":12,
                "Ciudad":"jhkjhk"
              },
              "listadoAseguradoras":{
                "NombreAseguradora":"kjk",
                "TipoDeSeguro":"Salud",
                "NumeroDeLaTarjeta":12
            
              }
            },
            {
              "id":"3",
              "datosPersonales":{
                "TipoDeUsuario":"Paciente",
                "NHC":12,
                "Nombre":"Miranda",
                "Apellido1":"Miranda",
                "Apellido2":"Miranda",
                "Genero":"Mujer",
                "FechaDeNacimiento":"12/03/1977",
                "NIFPasaporte":"12838383X"
              },
              "direccion":{
                "Calle":"Sarrión",
                "Numero":12,
                "Puerta":12,
                "CodigoPostal":12,
                "Ciudad":12
              },
              "listadoAseguradoras":{
                "NombreAseguradora":"kjlkjl",
                "TipoDeSeguro":"Familiar",
                "NumeroDeLaTarjeta":12
           
              }
            }
          ],
          "profesionales":[
            {
              "id":"4",
              "datosPersonales":{
                "NumColegiado":12,
                "Nombre":12,
                "Apellido1":12,
                "Apellido2":12,
                "Genero":12,
                "Fecha de nacimiento":12,
                "NIFPasaporte":2323,
                "TipoDeUsuario":"Profesional",
                "TipoDeProfesional":"Medico"
                
        
              },
              "direccion":{
                "Calle":12,
                "Numero":12,
                "Puerta":12,
                "CodigoPostal":12,
                "Ciudad":12
              }
            },
            {
              "id":"5",
              "datosPersonales":{
                "NumColegiado":12,
                "Nombre":12,
                "Apellido1":12,
                "Apellido2":12,
                "Genero":12,
                "Fecha de nacimiento":12,
                "NIFPasaporte":3898,
                "TipoDeUsuario":"Profesional",
                "TipoDeProfesional":"Enfermero"
        
              },
              "direccion":{
                "Calle":12,
                "Numero":12,
                "Puerta":12,
                "CodigoPostal":12,
                "Ciudad":12
              }
            }
          ]
        }
        
        
        
          window.localStorage.setItem('users', JSON.stringify(demoData));
          return demoData;
    }
      
    return{
        getUsers: function () {

            return JSON.parse(window.localStorage.getItem('users')) || setDemoData();


        }
    }
});