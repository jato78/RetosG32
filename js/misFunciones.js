function traerInformacion(){
    $.ajax({
        url:"https://geedd9418d60ac2-slcdso65zpx1jg4z.adb.us-chicago-1.oraclecloudapps.com/ords/admin/car/car",
        type: "GET",
        datatype:"JSON",
        success: function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)

        }

    });
}

function pintarRespuesta(items){
    
    let myTable ="<table>";
    for(i=0;i<items.length;i++) {
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].model+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax({
        url:"https://geedd9418d60ac2-slcdso65zpx1jg4z.adb.us-chicago-1.oraclecloudapps.com/ords/admin/car/car",
        type: "POST",
        data:myData,
        datatype:"JSON",
        success: function(respuesta){
        $("#resultado").empty();
        $("#id").val("");
        $("#brand").val("");
        $("#model").val("");
        $("#category_id").val("");
        traerInformacion();
        alert("El dato se ha guardado")
        }
    });
}

function editarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
    };
    console.log(myData);
    let dataTosend=JSON.stringify(myData);
    $.ajax({
    url:"https://geedd9418d60ac2-slcdso65zpx1jg4z.adb.us-chicago-1.oraclecloudapps.com/ords/admin/car/car",
    type: "PUT",
    data:dataTosend,
    contentType:"application/JSON",
    datatype:"JSON",
    success: function(respuesta){
        $("#resultado").empty();
        $("#id").val("");
        $("#brand").val("");
        $("#model").val("");
        $("#categoty_id").val("");
        traerInformacion();
        alert("El dato se ha actualizado")
    }
});
}
function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax({
        url:"https://geedd9418d60ac2-slcdso65zpx1jg4z.adb.us-chicago-1.oraclecloudapps.com/ords/admin/car/car",
        type: "DELETE",
        data:dataTosend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
        $("resultado").empty();
        traerInformacion();
        alert("Se ha eliminado.")
        }
        
    });
}

function traerInformacion_Clientes(){
    $.ajax({
        url:"https://geedd9418d60ac2-slcdso65zpx1jg4z.adb.us-chicago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        datatype:"JSON",
        success: function(respuesta){
            console.log(respuesta);
            pintarRespuesta_Clientes(respuesta.items)

        }

    });
}

function pintarRespuesta_Clientes(items){
    
    let myTable ="<table>";
    for(i=0;i<items.length;i++) {
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion_Clientes(){
    let myData={
        id:$("#id").val(),
        brand:$("#name").val(),
        model:$("#email").val(),
        category_id:$("#age").val(),
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax({
        url:"https://geedd9418d60ac2-slcdso65zpx1jg4z.adb.us-chicago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data:myData,
        datatype:"JSON",
        success: function(respuesta){
        $("#resultado").empty();
        $("#id").val("");
        $("#name").val("");
        $("#email").val("");
        $("#age").val("");
        traerInformacion_Clientes();
        alert("El dato se ha guardado")
        }
    });
}

function editarInformacion_Cliente(){
    let myData={
        id:$("#id").val(),
        brand:$("#name").val(),
        model:$("#email").val(),
        category_id:$("#age").val(),
    };
    console.log(myData);
    let dataTosend=JSON.stringify(myData);
    $.ajax({
    url:"https://geedd9418d60ac2-slcdso65zpx1jg4z.adb.us-chicago-1.oraclecloudapps.com/ords/admin/client/client",
    type: "PUT",
    data:dataTosend,
    contentType:"application/JSON",
    datatype:"JSON",
    success: function(respuesta){
        $("#resultado").empty();
        $("#id").val("");
        $("#name").val("");
        $("#email").val("");
        $("#age").val("");
        traerInformacion_Clientes();
        alert("El dato se ha actualizado")
    }
});
}

function borrarElemento_Cliente(idElemento){
    let myData={
        id:idElemento
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax({
        url:"https://geedd9418d60ac2-slcdso65zpx1jg4z.adb.us-chicago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data:dataTosend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
        $("resultado").empty();
        traerInformacion_Clientes();
        alert("Se ha eliminado.")
        }
        
    });
}

