$(document).ready(function() {
    $.getJSON('https://jsonplaceholder.typicode.com/users', function(json) {
        var data = json.map(function(row) {
            var iniciales = row.name.replace(/^(\w)[\w\.]* (\w)\w* ?(\w)?.*$/, "$1$2$3");
            return $.extend({
                iniciales: iniciales,
                acciones: "<button class='btn btn-warning mr-4' data-id='" + row.id + "'>Editar</button><button class='btn btn-danger' data-id='" + row.id + "'>Eliminar</button>"
            }, row);
        });

        console.log(data);

        $('#dataTable').dataTable({
            data:data,
            "columns": [{
                title: "Iniciales",
                data: "iniciales"
            }, {
                title: "Usuario",
                data: "username"
            }, {
                title: "Acciones",
                data: "acciones"
            }, ],
            language: {
                "url": "public/src/plugins/DataTables Responsive/Spanish.json"
            },
            responsive: true,
        });
    });
});
var consulta = {
    "cod": "00",
    "obj": [{
        "codPro": 1,
        "nom": "Startup 1",
        "des": "",
        "frg": 1553618417926,
        "res": {
            "codUsu": 1,
            "nom": "Jorge Romaní"
        },
        "tip": {
            "codTpr": 7,
            "nom": "Fast Track"
        },
        "est": {
            "codEst": 1,
            "nom": "Pendiente"
        }
    }]
};