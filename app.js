document.addEventListener("DOMContentLoaded", e => {

    const form = document.querySelector("#frmConversores");

    document.querySelector("#cboTipos").addEventListener("change", function(){
        
        var selDe = document.getElementById("cboDe");
        var selA = document.getElementById("cboA");

        var Convertir = document.querySelector("#cboTipos").value;

        var MonedasValor = ["dolar", "colones", "yenes", "rupia", "lempira", "peso", "bitcoin"];
        var MonedasText = ["Dolar", "Colones", "Yenes", "Rupia", "Lempiras", "Peso", "bitcoin"];

        var Convertir = document.querySelector("#cboTipos").value;

        var AlmacenamientoValor = ["megabyte", "bit", "bite", "kilobyte", "gigabyte", "terabyte"];
        var AlmacenamientoText =  ["megabyte", "bit", "bite", "kilobyte", "gigabyte", "terabyte"];

        var Convertir = document.querySelector("#cboTipos").value;

        var AlmacenamientoValor = ["metro", "centimetro", "pulgadas", "pies", "varas", "yardas", "km","milla"];
        var AlmacenamientoText =  ["metro", "centimetro", "pulgadas", "pies", "varas", "yardas", "km","milla"];


        console.log(Convertir);

        selDe.length = 0;
        selA.length = 0;

        switch (Convertir){

            case "Moneda":
                
                for (let i = 0; i < MonedasValor.length; i++) {
                    selDe.options[i] = new Option(MonedasText[i],MonedasValor[i]);
                    selA.options[i] = new Option(MonedasText[i],MonedasValor[i]);
                }

                break;
                case "Longitud":
                
                for (let i = 0; i < LongitudValor.length; i++) {
                    selDe.options[i] = new Option(LongitudText[i],LongitudValor[i]);
                    selA.options[i] = new Option(LongitudText[i],LongitudValor[i]);
                }

                break;
            case "Almacenamiento":
                
                for (let i = 0; i < AlmacenamientoValor.length; i++) {
                    selDe.options[i] = new Option(AlmacenamientoText[i],AlmacenamientoValor[i]);
                    selA.options[i] =  new Option(AlmacenamientoText[i],AlmacenamientoValor[i]);
                }

                break;

        }



    },false);

    form.addEventListener("submit",event => {

        event.preventDefault();

        let Convertir = document.querySelector("#cboTipos").value;

        let de = document.querySelector("#cboDe").value, 
            a = document.querySelector("#cboA").value,
            cantidad = document.querySelector("#txtCantidadConversor").value;

        let $res = document.querySelector("#lblRespuesta");

        let Convertidor;

        switch (Convertir){

            case "Moneda":

                Convertidor = {"dolar":1, "colones":8.75, "yenes":11.27, "rupia":69.75, "lempira":24.36, "peso":19.36, "bitcoin":0.00026 };

                break;
                case "Longitud":

                Convertidor = {"metro":1, "centimetro":100, "pulgadas":39.3701, "pies":3.28084, "varas":1.1963081929167, "yardas": 1.09361, "km":0.001, "milla":0.000621371 };

                break;
            case "Almacenamiento":

                Convertidor = {"megabyte":1, "bit":8.388, "byte":1.048, "kilobyte":1.024, "gigabyte":0.0009765625, "terabyte":0.00000095367431660625};

                break;

        }
        
        let A = Convertidor[a];
        let DE = Convertidor[de];
        let Cantidad = cantidad;
            fetch(`respuesta.php?A=${A}&DE=${DE}&Cantidad=${Cantidad}`)
                .then(resp=>resp.text())
                 .then(respuesta=>{
                    $res.innerHTML = respuesta;
                });

        //$res.innerHTML = `Respuesta: ` + (Convertidor[a]/Convertidor[de]*cantidad).toFixed(2);

    });

});

