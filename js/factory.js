app.factory('AppService', function () {
    function setDemoData() {
        const demoData = {
            "pacientes": [
               {
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
                  "CódigoPostal":12,
                  "Ciudad":12
                },
                "listadoAseguradoras":{
                  "NombreAseguradora":"kjlkjl",
                  "TipoDeSeguro":12,
                  "NúmeroDeLaTarjeta":12
             
                }
              },
              {
                "datosPersonales":{
                  "TipoDeUsuario":"Paciente",
                  "NHC":12,
                  "Nombre":"iji",
                  "Apellido1":"jijj",
                  "Apellido2":"kjk",
                  "Genero":"Mujer",
                  "FechaDeNacimiento":12,
                  "NIFPasaporte":12434343
                },
                "direccion":{
                  "Calle":"jhjj",
                  "Numero":12,
                  "Puerta":12,
                  "CódigoPostal":12,
                  "Ciudad":"jhkjhk"
                },
                "listadoAseguradoras":{
                  "NombreAseguradora":"kjk",
                  "TipoDeSeguro":"Salud",
                  "NúmeroDeLaTarjeta":12
              
                }
              },
              {
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
                  "CódigoPostal":12,
                  "Ciudad":12
                },
                "listadoAseguradoras":{
                  "NombreAseguradora":"kjlkjl",
                  "TipoDeSeguro":"Familiar",
                  "NúmeroDeLaTarjeta":12
             
                }
              }
            ],
            "profesionales":[
              {
                "datosPersonales":{
                  "Nºcolegiado":12,
                  "Nombre":12,
                  "Apellido1":12,
                  "Apellido2":12,
                  "Género":12,
                  "Fecha de nacimiento":12,
                  "NifPasaporte":2323,
                  "TipoDeProfesional":"Médico"
                },
                "direccion":{
                  "Calle":12,
                  "Numero":12,
                  "Puerta":12,
                  "CódigoPostal":12,
                  "Ciudad":12
                }
              },
              {
                "datosPersonales":{
                  "Ncolegiado":12,
                  "Nombre":12,
                  "Apellido1":12,
                  "Apellido2":12,
                  "Género":12,
                  "Fecha de nacimiento":12,
                  "NifPasaporte":3898
                },
                "direccion":{
                  "Calle":12,
                  "Numero":12,
                  "Puerta":12,
                  "CódigoPostal":12,
                  "Ciudad":12,
                  "TipoDeProfesional":"Enfermero"
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