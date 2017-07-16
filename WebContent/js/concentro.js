
$(document).ready(concentroo);
       function concentroo(){
         localStorage.setItem('con', '0');
          localStorage.setItem('val', '0');
         var x=$("#concentro");
          x.append("<!-- Nav tabs -->"
           +"<ul class='nav nav-tabs' role='tablist'>"
             +"<li role='presentation' class='active'><a href='#rol' role='tab' data-toggle='tab' id='rol2'>Rol</a></li>"
             +"<li role='presentation'><a href='#usuario' role='tab' data-toggle='tab' id='usuario2'>Usuario</a></li>"
             +"<li role='presentation'><a href='#servicios' role='tab' data-toggle='tab' id='servicios2'>Servicios</a></li>"
             +"<li role='presentation'><a href='#equipos' role='tab' data-toggle='tab' id='equipos2'>equipos</a></li>"
             +"<li role='presentation'><a href='#crearServicio' role='tab' data-toggle='tab' id='crearServicios2'>Orden de servicio</a></li>"
             +"<li role='presentation'><a href='#asignarequipo' role='tab' data-toggle='tab' id='asignarequipo2'>asignar equipo</a></li>"
            +"</ul>"
           +"<!-- Tab panes -->"
           +"<div class='tab-content'>"
             +"<div role='tabpanel' class='tab-pane active' id='rol'></div>"
             +"<div role='tabpanel' class='tab-pane' id='usuario'></div>"
             +"<div role='tabpanel' class='tab-pane' id='servicios'></div>"
             +"<div role='tabpanel' class='tab-pane' id='equipos'></div>"
              +"<div role='tabpanel' class='tab-pane' id='crearServicio'></div>"
             +"<div role='tabpanel' class='tab-pane' id='asignarequipo'></div>"
          +"</div>");


       x=$("#memoria");
       var xs1=3,xs2=5,xs3=2;
       var sm1=2,sm2=6,sm3=2;
       var md1=3,md2=5,md3=2;
       var lg1=3,lg2=5,lg3=2;
       
     var nota= "FALTA LA CLASES DE LOS SELECT"; 
//     $("#usuMoni").append(nota);
//     $("#programas").append(nota);
//     $("#asistencia").append(nota);
//     $("#roles").append(nota);
       
       var rol= "" 
       		+"<div class='row bs-example'>"
	                   +"<div class='col-xs-"+xs1+" col-sm-"+sm1+" col-md-"+md1+" col-lg-"+lg1+"'><label>Rol</label></div>"
	                   +"<div class='col-xs-"+xs2+" col-sm-"+sm2+" col-md-"+md2+" col-lg-"+lg2+"'>"
	                   	   +"<input type='text' class='form-control' id='rolDato' placeholder='colocar Roles'>"
	                   +"</div>"
                   +"</div>"
                   //botones
                   +"<div class='row'>"
                   		+"<div class='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>"
	                    +"<div class='col-xs-2 col-sm-2 col-md-1 col-lg-1'>"
	                   		+"<button type='button' class='btn btn-primary' id='crol'>Crear</button>"
	                   +"</div>"
	                   //+"<div class='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>"
	                   +"<div class='col-xs-2 col-sm-2 col-md-1 col-lg-1'>"
	                   		+"<button type='button' class='btn btn-primary' id='trol'>cargar Tabla</button>"
	                   	+"</div>"
	                   	//+"<div class='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>"
	                   	+"<div class='col-xs-2 col-sm-2 col-md-1 col-lg-1'>"
	                   		+"<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.modalTemp'>Ver tabla</button>"
	                   	+"</div>"
                 +"</div>";
                 

       $("#rol").append(rol);

var usuario=""  
  +"<div class='row bs-example centert'>"
    +"<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>"
    //campo
    +"<div class='row'>"
        +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Rol</label></div>"
        +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5' id='rolesDivRol'>"
             //+"<input type='text' class='form-control' id='rolesRol' placeholder='colocar Nombre'>"
        +"</div>"
      +"</div>"
     //campo jornada $('input:radio[name=edad]:checked').val()
//    +"<div class='row'>"
//        +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Rol Usuarip</label></div>"
//        +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
//        +"<label class='radio-inline'>"
//          +"<input type='radio' name='UsuTipo' id='usuTipo' value='1'> Estudiante"
//        +"</label>"
//        +"<label class='radio-inline'>"
//            +"<input type='radio' name='UsuTipo' id='usuTipo' value='2' checked> Monitor"
//        +"</label>"
//        +"<label class='radio-inline'>"
//          +"<input type='radio' name='UsuTipo' id='usuTipo' value='3'> Administrador"
//          +"</label>"
//        +"</div>"
//      +"</div>"
      //campo
      +"<div class='row monitor'>"
          +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Nª Documento</label></div>"
          +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
               +"<input type='number' class='form-control' id='usuDocumen' placeholder='colocar documento'>"
          +"</div>"
        +"</div>"
      //campo
      +"<div class='row monitor'>"
          +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Nombre</label></div>"
          +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
               +"<input type='text' class='form-control' id='usuNombre' placeholder='colocar Nombre'>"
          +"</div>"
        +"</div>"
      
//      //campo jornada $('input:radio[name=edad]:checked').val()
//      +"<div class='row monitor admin'>"
//          +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Jornada</label></div>"
//          +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
//          +"<label class='radio-inline'>"
//            +"<input type='radio' name='inlineRadioOptions' id='usuJornada' value='d' checked> Diurna"
//          +"</label>"
//          +"<label class='radio-inline'>"
//              +"<input type='radio' name='inlineRadioOptions' id='usuJornada' value='n'> Noturna"
//          +"</label>"
//          +"</div>"
//        +"</div>"
       //campo   
      +"<div class='row monitor'>"
          +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Telefono</label></div>"
          +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
               +"<input type='text' class='form-control' id='usuTelefono' placeholder='colocar Telefono'>"
          +"</div>"
        +"</div>"
      //campo  $(“.pais”).attr(“value”);  $( "#mi_select option:selected" ).val();
//      +"<div class='row monitor admin'>"
//          +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Estrato</label></div>"
//          +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
//              +"<select class='form-control usuEstra' id='usuEstra'>"
//                +"<option>1</option>"
//                +"<option>2</option>"
//                +"<option>3</option>"
//                +"<option>4</option>"
//                +"<option>5</option>"
//              +"</select>"
//          +"</div>"
//        +"</div>"
      //campo
//      +"<div class='row monitor estud'>"
//          +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Login</label></div>"
//          +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
//               +"<input type='text' class='form-control' id='usuLogin' placeholder='colocar Login'>"
//          +"</div>"
//        +"</div>"
      //campo
      +"<div class='row monitor estud'>"
          +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Clave</label></div>"
          +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
               +"<input type='password' class='form-control' id='usuPass' placeholder='colocar Clave'>"
          +"</div>"
        +"</div>"
      //campo
//      +"<div class='row monitor'>"
//          +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Correo</label></div>"
//          +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5 input-group'>"
//           +"<div class='input-group-addon'>@</div>"
//           +"<input class='form-control' type='email' placeholder='Enter email' id='usoEmail'>" 
//          +"</div>"
//        +"</div>"
//      //campo
//      +"<div class='row'>"
//          +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Hoy</label></div>"
//          +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
//               +"<input type='date' class='form-control' id='usoFecha' placeholder='fecha Actual'>"
//          +"</div>"
//        +"</div>"
      //Boton
        +"<div class='row'>"
          +"<div class='col-xs-2 col-sm-2 col-md-2 col-lg-2'>"
             +"<button type='button' class='btn btn-primary' id='cUsu'>agregar</button>"
          +"</div>"
          +"<div class='col-xs-2 col-sm-2 col-md-2 col-lg-2'>"
             +"<button type='button' class='btn btn-primary' id='tUsu'>cargar Tabla</button>"
          +"</div>"
          +"<div class='col-xs-2 col-sm-2 col-md-2 col-lg-2'>"
          +"<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.modalTemp'>Ver tabla</button>"
          +"</div>"
        +"</div>"
  +"</div>"
+"</div>"
+"<div class='row table-responsive container'>"
  +"<div class='col-xs-8 col-sm-8 col-md-8 col-lg-8 table-responsive' id='usu3'></div>"
+"</div>";
  

$("#usuario").append(usuario);
//$("#usuario").append(nota);

          
var servicios=  "<div class='row bs-example'>"
	//campo
	+"<div class='row monitor'>"
	    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Tipo</label></div>"
	    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
	    	   +"<input type='text' class='form-control' id='sertipo' placeholder='Tipo'>"
	    +"</div>"
    +"</div>"
  //campo
	+"<div class='row monitor'>"
	    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Descripcion</label></div>"
	    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
	    	   +"<input type='text' class='form-control' id='serdescripcion' placeholder='Descripcion'>"
	    +"</div>"
    +"</div>"
	//Boton
	  +"<div class='row'>"
	    +"<div class='col-xs-2 col-sm-2 col-md-2 col-lg-2'>"
	    	+"<button type='button' class='btn btn-primary' id='cServicios'>agregar</button>"
	    +"</div>"
	    +"<div class='col-xs-2 col-sm-2 col-md-2 col-lg-2'>"
	       +"<button type='button' class='btn btn-primary' id='tServicios'>cargar Tabla</button>"
	    +"</div>"
	    +"<div class='col-xs-2 col-sm-2 col-md-2 col-lg-2'>"
	    +"<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.modalTemp'>Ver tabla</button>"
	    +"</div>"
	  +"</div>"
+"</div>";

$("#servicios").append(servicios);

var equipos=""  
+"<div class='row bs-example'>"
//placa
+"<div class='row monitor'>"
    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Placa</label></div>"
    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
         +"<input type='text' class='form-control' id='airPlaca' placeholder='Placa'>"
    +"</div>"
+"</div>"
//campo
+"<div class='row monitor'>"
    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Tipo de aire</label></div>"
    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
    	   +"<input type='text' class='form-control' id='airtipodeaire' placeholder='Tipo de aire'>"
    +"</div>"
+"</div>"
//campo
+"<div class='row monitor'>"
    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>BTU</label></div>"
    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
    	   +"<input type='number' class='form-control' id='airbtu' placeholder='Capacidad en BTU'>"
    +"</div>"
+"</div>"
//campo
+"<div class='row monitor'>"
    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Ubicacion</label></div>"
    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
    	   +"<input type='text' class='form-control' id='airubicacion' placeholder='Ubicacion'>"
    +"</div>"
+"</div>"
//campo
+"<div class='row monitor'>"
    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Amperaje</label></div>"
    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
    	   +"<input type='number' class='form-control' id='airamperaje' placeholder='Amperaje'>"
    +"</div>"
+"</div>"
//campo
+"<div class='row monitor'>"
    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Voltaje</label></div>"
    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
    	   +"<input type='number' class='form-control' id='airvoltaje' placeholder='voltaje'>"
    +"</div>"
+"</div>"
//campo
+"<div class='row monitor'>"
    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Presion Alta</label></div>"
    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
    	   +"<input type='number' class='form-control' id='airpresionalta' placeholder='Presion Alta'>"
    +"</div>"
+"</div>"
//campo
+"<div class='row monitor'>"
    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Presion Baja</label></div>"
    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
    	   +"<input type='number' class='form-control' id='airpresionbaja' placeholder='Presion Baja'>"
    +"</div>"
+"</div>"
//campo
+"<div class='row monitor'>"
    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Refrigerante</label></div>"
    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
    	   +"<input type='text' class='form-control' id='airrefrigerante' placeholder='Refrigerante'>"
    +"</div>"
+"</div>"
  //campo  $(“.pais”).attr(“value”);  $( "#mi_select option:selected" ).val();
//	+"<div class='row'>"
//	    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Usuario</label></div>"
//	    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5' id='asisListaEstuLugar'>"
////			    +"<select class='form-control asisListaEstu' id='asisListaEstu'>"
////				    +"<option>1</option>"
////				    +"<option>2</option>"
////				    +"<option>3</option>"
////				    +"<option>4</option>"
////				    +"<option>5</option>"
////			    +"</select>"
//	    +"</div>"
//    +"</div>"
    //Boton
    +"<div class='row'>"
	    +"<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>"
	       +"<button type='button' class='btn btn-primary' id='cAsis'>agregar</button>"
	    +"</div>"
	    +"<div class='col-xs-2 col-sm-2 col-md-2 col-lg-2'>"
        	+"<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.modalTemp'>Ver tabla</button>"
      +"</div>"
    +"</div>"
+"</div>";

$("#equipos").append(equipos);


var crearServicios=  ""  
  +"<div class='row bs-example centert'>"
  +"<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>"
     //campo
    +"<div class='row'>"
        +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Usuario</label></div>"
        +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5' id='craserUsuario'>"
             //+"<input type='text' class='form-control' id='rolesRol' placeholder='colocar Nombre'>"
        +"</div>"
      +"</div>"
       //campo
    +"<div class='row'>"
        +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Servicio</label></div>"
        +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5' id='crearserServicio'>"
             //+"<input type='text' class='form-control' id='rolesRol' placeholder='colocar Nombre'>"
        +"</div>"
      +"</div>"
     //Boton
      +"<div class='row'>"
        +"<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>"
           +"<button type='button' class='btn btn-primary' id='cCrearServicios'>agregar</button>"
        +"</div>"
      +"</div>"
      +"<div class='col-xs-2 col-sm-2 col-md-2 col-lg-2'>"
      	+"<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.modalTemp'>Ver tabla</button>"
    +"</div>"
+"</div>"
+"</div>";


$("#crearServicio").append(crearServicios);


var asignarequipo=  ""  
	+"<div class='row bs-example centert'>"
	+"<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>"
	 //campo
    +"<div class='row'>"
        +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Placa Equipo</label></div>"
        +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5' id='asiVerequi'>"
             //+"<input type='text' class='form-control' id='rolesRol' placeholder='colocar Nombre'>"
        +"</div>"
      +"</div>"
       //campo
    +"<div class='row'>"
        +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Id orden de servicio</label></div>"
        +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5' id='asiPeticionDeServicios'>"
             //+"<input type='text' class='form-control' id='rolesRol' placeholder='colocar Nombre'>"
        +"</div>"
      +"</div>"	
	 //campo
		+"<div class='row'>"
		    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Fecha</label></div>"
		    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
		    	   +"<input type='date' class='form-control' id='creaAsigFecha' placeholder='colocar fecha'>"
		    +"</div>"
	    +"</div>"
	   //campo
		+"<div class='row monitor'>"
		    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Hora</label></div>"
		    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
		    	   +"<input type='time' class='form-control' id='creaAsigHora' placeholder='colocar Nombre'>"
		    +"</div>"
	    +"</div>"
	  //Boton
	    +"<div class='row'>"
		    +"<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>"
		       +"<button type='button' class='btn btn-primary' id='cAsignarEqui'>agregar</button>"
		    +"</div>"
	    +"</div>"
	    +"<div class='col-xs-2 col-sm-2 col-md-2 col-lg-2'>"
        	+"<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.modalTemp'>Ver tabla</button>"
      +"</div>"
+"</div>"
+"</div>";


$("#asignarequipo").append(asignarequipo);

       
//datosIniciales4();
datosIniciales3("PetiBuscarRol","#rolesDivRol","3");
datosIniciales4("PetiBuscarUsuarioXCedu","#craserUsuario","3");
datosIniciales3("PetiBuscarServicios","#crearserServicio","3");
datosIniciales3("PetiBuscarEquipos","#asiVerequi","3");
datosIniciales3("PetiBuscarCrearServicios","#asiPeticionDeServicios","3");

//datosIniciales3("PetiBuscarRol","#rolesDivRol","3");
//datosIniciales2("PetiBuscarUsuarioXCedu","#prograUsuario","1");
//datosIniciales();

       }

 //******************************FIN CONCENTROO ****************************** 
       
//***************************************************************************
//*****************************DATOS INICIALES******************************
//**************************************************************************      
       //$(document).ready(datosIniciales);
       function datosIniciales(){
    	   
    	 //*****************************Lista inicial estudiantes******************************    	   
    	   $.ajax({
    			type: "POST",
    			url: 'PetiListaUsuario',
    			//data:{usuDocumen : document,usuNombre : nombre,usuApellido : apellido, usuTelefono : tel, usoEmail : email, usuLogin: login, usuPass: passs, usuCargo:cargo} ,
    			beforeSend: function(){
    		      // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
    				},
    			success: function(datos){
    				var autocompletar = new Array();
    		       	var obj = jQuery.parseJSON(datos);
    		        $.each( obj, function( index, row ){
    		        autocompletar.push(""+row);	
    		        });
    		       	
    		        $("#asisEstudiantes").autocomplete({source: autocompletar });
    		        
    		        },
    			error: function(){
    			//	$("#conte").html("Pailas esto no es Facil");
    				},
    		});	
    	  
       }  
      
       function datosIniciales2(url2, destino, val){
    	   
      	 //*****************************Lista inicial estudiantes******************************    	   
      	   
      	   $.ajax({
        			type: "POST",
        			url: ''+url2,
        			async:false,
        			data:{vall : val} ,
        			beforeSend: function(){
        		      // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
        				},
        			success: function(datos){
        				var autocompletarr = new Array();
        		     	var temp = new Array();
        				temp = datos.split(",");
        				
        				for (a in temp ) {
        					console.log(temp[a]);
        					autocompletarr.push(""+temp[a]);
        					}
        		        $(""+destino).autocomplete({source: temp });
        		       // $("#prograUsuario").autocomplete({source: autocompletarr });
        		        },
        			error: function(){
        			//	$("#conte").html("Pailas esto no es Facil");
        				},
        		});	
      	   
         } 
       
       function datosIniciales3(url2, destino, val){
    	   
        	 //*****************************Lista inicial estudiantes******************************    	   
        	   
        	   $.ajax({
          			type: "POST",
          			url: ''+url2,
          			async:false,
          			data:{valll : val} ,
          			beforeSend: function(){
          		      // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
          				},
          			success: function(datos){ 
          				console.log(datos);
          		        $(""+destino).append(datos);
          		        },
          			error: function(){
          			//	$("#conte").html("Pailas esto no es Facil");
          				},
          		});	
        	   
           }


       function datosIniciales4(url2, destino, val){
         
           //*****************************Lista inicial estudiantes******************************        
             
             $.ajax({
                type: "POST",
                url: ''+url2,
                async:false,
                data:{vall : val} ,
                beforeSend: function(){
                    //  $("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
                  },
                success: function(datos){ 
                  console.log(datos);
                      $(""+destino).append(datos);
                      },
                error: function(){
                //  $("#conte").html("Pailas esto no es Facil");
                  },
              }); 
             
           }
       
       function tablas(url3, destino, val){
    	   
        	 //*****************************Lista inicial estudiantes******************************    	   
        	   aler("tabñas");
        	   $.ajax({
          			type: "POST",
          			url: ''+url3,
          			async:false,
          			data:{valll : val} ,
          			beforeSend: function(){
          		      // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
          				},
          			success: function(datos){ 
          				console.log(datos);
          		        $(""+destino).append(datos);
          		        },
          			error: function(){
          			//	$("#conte").html("Pailas esto no es Facil");
          				},
          		});	
        	   
           } 
       
      
  //*****************************FIN DATOS INICIALES******************************     
       
   
       
  ///**********eventos///////

       $(document).ready(eventoss);
       
       function eventoss() {
    	   //ROL
    	   var x=$("#crol");
    	   x.click(vrol);
    	  
    	   x=$("#trol");    	   
    	   x.click(taabl);
    	   //fin ROL
    	   //usuario
    	   x=$("#cUsu");
    	   x.click(vusu);
    	   
    	   x=$("#tUsu");
    	   x.click(tusu);
    	   // fin usuario
         //servicios
          x=$("#cServicios");
         x.click(vServicios);
         
         x=$("#tServicios");
         x.click(vcServicios);
         //fin servicios
         //Equipo
         x=$("#cAsis");
  	     x.click(vAsis);
         //fin Equipo
  	     //crear servicios
  	     x=$("#cCrearServicios");
  	     x.click(vCrearServicios);
  	     //fin crear servicios
  	     //asignarEquipo
  	     x=$("#cAsignarEqui");
	     x.click(vAsignarEqui);
  	     //finAsignarEquipo
  	     


    	   
    	   x=$("#cUsuEs");
    	   x.click(vusuEs);
    	   
    	   x=$("#cAdmin");
    	   x.click(vAdminn);
    	   
    	  
    	   
    	   
    	   
    	   
    	   
    	   x=$("#trol");
    	   x.click(taabl);
    	   
    	   x=$("#tpro");
    	   x.click(tpro);    	   
    	   
    }
       
       
       function vrol(){
    			//var name = $('#userName').val();
//    			$.get('PetiRol', {
//    				userName : "coco"
//    			}, function(responseText) {
//    			//	$('#ajaxResponse').text(responseText);
//    			});
    		
    		      console.log("datos");
    		      var rolDatoo=$("#rolDato").val();
    		    	$.ajax({
    				type: "POST",
    				url: 'PetiRol',
    				data:{rolDatos : rolDatoo} ,
    				beforeSend: function(){
    		          // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
    					},
    				success: function(datos){
    				//	$('#ajaxResponse').text(datos);
    		           	console.log(datos);
    		           	alert(datos +" de "+rolDatoo);
    		            },
    				error: function(){
    				//	$("#conte").html("Pailas esto no es Facil");
    					},
    			});		
    				  

       }
       
       function vAsignarEqui(){
			//var name = $('#userName').val();
//			$.get('PetiRol', {
//				userName : "coco"
//			}, function(responseText) {
//			//	$('#ajaxResponse').text(responseText);
//			});
		
    	   var idListaequipos =$( "#listaEquipos option:selected" ).val();
    	   var idListaCreaServicios=$( "#listaCrearservicios option:selected" ).val();
    	   var creaAsigFecha=$("#creaAsigFecha").val();
    	   var creaAsigHora=$("#creaAsigHora").val();
    	   
    	   console.log("vAsignar Equipo");
		      
		    	$.ajax({
				type: "POST",
				url: 'PetiNewAsignaciondeEquipo',
				data:{idListaequiposs : idListaequipos, idListaCreaServicioss : idListaCreaServicios, creaAsigFechaa : creaAsigFecha, creaAsigHoraa : creaAsigHora} ,
				beforeSend: function(){
		          // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
					},
				success: function(datos){
				//	$('#ajaxResponse').text(datos);
		           	console.log(datos);
		           	alert(datos +" del servicio");
		            },
				error: function(){
				//	$("#conte").html("Pailas esto no es Facil");
					},
			});		
				  

  }
  
       function vCrearServicios(){
			//var name = $('#userName').val();
//			$.get('PetiRol', {
//				userName : "coco"
//			}, function(responseText) {
//			//	$('#ajaxResponse').text(responseText);
//			});
		
   	   var idUsuario =$( "#usuLista option:selected" ).val();
   	   var idServicio=$( "#listaServicios option:selected" ).val();
		      console.log("datos");
		      
		    	$.ajax({
				type: "POST",
				url: 'PetiNewCrearServicios',
				data:{idUsuarioo : idUsuario, idServicioo : idServicio} ,
				beforeSend: function(){
		          // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
					},
				success: function(datos){
				//	$('#ajaxResponse').text(datos);
		           	console.log(datos);
		           	alert(datos +" del servicio");
		            },
				error: function(){
				//	$("#conte").html("Pailas esto no es Facil");
					},
			});		
				  

 }
       
       function vServicios(){
		
		      console.log("datos");
          var tipo1=$("#sertipo").val();
		      var descripcion1=$("#serdescripcion").val();
		    	
		      $.ajax({
				type: "POST",
				url: 'PetiServicios',
				data:{tipo2 : tipo1, descripcion2 : descripcion1} ,
				beforeSend: function(){
		          // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
					},
				success: function(datos){
				//	$('#ajaxResponse').text(datos);
		           	console.log(datos);
		           	alert(datos +" de "+tipo1);
		            },
				error: function(){
				//	$("#conte").html("Pailas esto no es Facil");
					},
			});		
				  

  }
       
       function vpro(){
		
		      console.log("datos");
		      var proDatoo=$("#proDato").val();
		    	$.ajax({
				type: "POST",
				url: 'PetiProgra',
				data:{proDatos : proDatoo} ,
				beforeSend: function(){
		          // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
					},
				success: function(datos){
				//	$('#ajaxResponse').text(datos);
		           	console.log(datos);
		           	alert(datos +" de "+proDatoo);
		            },
				error: function(){
				//	$("#conte").html("Pailas esto no es Facil");
					},
			});		
				  

  }
       
       function vusu(){
		     console.log("ingreso de usuarios");
		      //var rol=$('input:radio[name=UsuTipo]:checked').val(); 
		      var roll =$("#rolesRol option:selected" ).val();
		      var document=$("#usuDocumen").val();
		      var nombre=$("#usuNombre").val();
		      var tel=$("#usuTelefono").val();
		      var passs=$("#usuPass").val();
		      //usuCargo
		      
//              console.log("docu"+document);
//              console.log("nombre"+nombre);
//              console.log("apellido"+ apellido);
//              console.log("jornada"+jordana);
//              console.log("tele"+tel);
//              console.log("estr"+estra);
//              console.log("login"+login);
//              console.log("pas"+passs);
//              console.log("email"+email);
//              console.log("lo"+long);
//              console.log("p"+pas);
		       
		      $.ajax({
				type: "POST",
				url: 'PetiUsuarioEs',
				data:{rroll : roll, usuDocumen : document,usuNombre : nombre,usuTelefono : tel, passc: passs} ,
				beforeSend: function(){
		          // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
					},
				success: function(datos){
				//	$('#ajaxResponse').text(datos);
		           	console.log(datos);
		           	alert(datos);
		            },
				error: function(){
				//	$("#conte").html("Pailas esto no es Facil");
					},
			});		
				  

}

       function vusuEs(){
		      console.log("ingreso de usuarios estudiante");
		      
		      var document=$("#usuEsDocumen").val();
		      var nombre=$("#usuEsNombre").val();
		      var apellido=$("#usuEsApellido").val();
		      var cargo=$("#usuCargo").val();
		      var jordana = $('input:radio[name=inlineRadioOptions]:checked').val();
		      var tel=$("#usuEsTelefono").val();
		      var estra =$( "#usuEsEstra option:selected" ).val();
		      var email=$("#usoEsEmail").val();
		      
		      
//		      console.log("documento: "+document); 
//		      console.log("nombre: "+nombre);
//		      console.log("apellido: "+apellido);
//		      console.log("jornada: "+jordana);
//		      console.log("tel: "+tel);
//		      console.log("estrato: "+estra);
//		      console.log("correo: "+email);
		       
		      $.ajax({
				type: "POST",
				url: 'PetiUsuarioEs',
				data:{usuDocumen : document,usuNombre : nombre,usuApellido : apellido,usuJornada : jordana,usuTelefono : tel,usuEstra : estra, usoEmail : email, cargoo:cargo} ,
				beforeSend: function(){
		          // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
					},
				success: function(datos){
				//	$('#ajaxResponse').text(datos);
		           	console.log(datos);
		           	alert(datos +" de "+nombre +" "+apellido);
		            },
				error: function(){
				//	$("#conte").html("Pailas esto no es Facil");
					},
			});		
				  

} 
       
       function vAdminn(){
		      console.log("ingreso de usuarios estudiante");
		      
		      var document=$("#usuAdminDocumen").val();
		      var nombre=$("#usuAdminNombre").val();
		      var apellido=$("#usuAdminApellido").val();
		      var tel=$("#usuAdminTelefono").val();
		      var email=$("#usoAdminEmail").val();
		      var cargo=$("#usuAdminCargo").val();
		      var login=$("#usuAdminLogin").val();
		      var passs=$("#usuAdminPass").val();
		      
//		      console.log("documento: "+document); 
//		      console.log("nombre: "+nombre);
//		      console.log("apellido: "+apellido);
//		      console.log("jornada: "+jordana);
//		      console.log("tel: "+tel);
//		      console.log("estrato: "+estra);
//		      console.log("correo: "+email);
		       
		      $.ajax({
				type: "POST",
				url: 'PetiUsuarioAdmin',
				data:{usuDocumen : document,usuNombre : nombre,usuApellido : apellido, usuTelefono : tel, usoEmail : email, usuLogin: login, usuPass: passs, usuCargo:cargo} ,
				beforeSend: function(){
		          // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
					},
				success: function(datos){
				//	$('#ajaxResponse').text(datos);
		           	console.log(datos);
		           	alert(datos +" de "+nombre +" "+apellido);
		            },
				error: function(){
				//	$("#conte").html("Pailas esto no es Facil");
					},
			});		
				  

} 
   
 
       function vAsis(){
	
		      console.log("datos");
		      //var  =$( "#asisListaEstu option:selected" ).val();
		      var placa1=$("#airPlaca").val();
		      var tipoDeAire1=$("#airtipodeaire").val();
		      var btu1=$("#airbtu").val();
		      var ubicacion1=$("#airubicacion").val();
		      var amperaje1=$("#airamperaje").val();
		      var voltaje1=$("#airvoltaje").val();
		      var presionAlta1=$("#airpresionalta").val();
		      var presionbaja1=$("#airpresionbaja").val();
		      var Refrigerante1=$("#airrefrigerante").val();
		      
		   //	alert(estudiante);
		      $.ajax({
				type: "POST",
				url: 'PetiAsistencia',
				data:{airPlaca2 : placa1, tipoDeAire2 : tipoDeAire1, btu2 : btu1, ubicacion2 : ubicacion1, amperaje2 : amperaje1, voltaje2 : voltaje1, presionAlta2 : presionAlta1, presionbaja2 : presionbaja1, Refrigerante2 : Refrigerante1} ,
				beforeSend: function(){
		          // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
					},
				success: function(datos){
				//	$('#ajaxResponse').text(datos);
		           	console.log(datos);
		           	alert(datos);
		            },
				error: function(){
				//	$("#conte").html("Pailas esto no es Facil");
					},
			});	
  }      
       
       
       function vRoles(){
    		
		      console.log("ROLES");
		      //var  =$( "#asisListaEstu option:selected" ).val();
		      var ceduu=$("#rolesCedu").val();
		      
		   //	alert(estudiante);
		      $.ajax({
				type: "POST",
				url: 'PetiGuardRolUsuar',
				data:{rolll : roll, ceduuu : ceduu} ,
				beforeSend: function(){
		          // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
					},
				success: function(datos){
				//	$('#ajaxResponse').text(datos);
		           	console.log(datos);
		           	alert(datos);
		            },
				error: function(){
				//	$("#conte").html("Pailas esto no es Facil");
					},
			});		
				
}
       

     //***************************************************************************
     //*****************************EVENTOS DE MAS******************************
     //************************************************************************** 
//       $(document).ready(function(){
//    	  // datosIniciales();
//   		var valoresCombo = $('option', '[id*=asisListaEstu]');
//   		console.log(valoresCombo);
//   		$('[id*=asisFiltro]').keyup(function(){
//   			//$('[id*=asisListaEstu]').html(valoresCombo);
//   			console.log(valoresCombo);
//   			$("option:not(:contains('" + $(this).val() + "'))", '[id*=asisListaEstu]').remove();
//   		});
//   	}); 
       
     function taabl(){
    	   console.log("listar roles");
    	  // url3, destino, val
    	 //  ("PetiBuscarRol","#rolesDivRol","1");
      	 //*****************************Lista inicial estudiantes******************************    	   
      	  // aler("tabñas");
      	   $.ajax({
        			type: "POST",
        			url: 'PetiBuscarRol',
        			async:false,
        			data:{valll : "2"} ,
        			beforeSend: function(){
        		      // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
        				},
        			success: function(datos){ 
        				console.log(datos);
        		       // $(""+destino).append(datos);
        				//$("#rol3").append(datos);
        				//$("#rol3").html(datos);
        				$("#contenidoModalTem").html(datos);
        				//$('.modalTemp').focus();
        				$('.modalTemp').modal('show');
        		        
        		        },
        			error: function(){
        			//	$("#conte").html("Pailas esto no es Facil");
        				},
        		});	
      	   
      	 eventoElimiUpdate();
      	   
         } 
       
       function tpro(){
    	   //datosIniciales2("PetiBuscarPrograma","#prograPrograma","1");
     	   $.ajax({
         			type: "POST",
         			url: 'PetiBuscarPrograma',
         			async:false,
         			data:{vall : "2"} ,
         			beforeSend: function(){
         		      // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
         				},
         			success: function(datos){ 
         				console.log(datos);
         		       // $(""+destino).append(datos);
         				//$("#rol3").append(datos);
         				$("#pro3").html(datos);
         		        
         		        },
         			error: function(){
         			//	$("#conte").html("Pailas esto no es Facil");
         				},
         		});	
       	   
          } 
       
       function tusu(){
    	  //datosIniciales2("","#rolesCedu","1");
     	   $.ajax({
         			type: "POST",
         			url: 'PetiBuscarUsuarioXCedu',
         			async:false,
         			data:{vall : "2"} ,
         			beforeSend: function(){
         		      // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
         				},
         			success: function(datos){ 
         				console.log(datos);
         		       // $(""+destino).append(datos);
         				//$("#rol3").append(datos);
         				$("#contenidoModalTem").html(datos);
        				//$('.modalTemp').focus();
        				$('.modalTemp').modal('show');
         				//$("#usu3").html(datos);
         		        
         		        },
         			error: function(){
         			//	$("#conte").html("Pailas esto no es Facil");
         				},
         		});	
       	   
          } 
       
       function vcServicios(){
     	  //datosIniciales2("","#rolesCedu","1");
      	   $.ajax({
          			type: "POST",
          			url: 'PetiBuscarServicios',
          			async:false,
          			data:{valll : "2"} ,
          			beforeSend: function(){
          		      // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
          				},
          			success: function(datos){ 
          				console.log(datos);
          		       // $(""+destino).append(datos);
          				//$("#rol3").append(datos);
          				$("#contenidoModalTem").html(datos);
         				//$('.modalTemp').focus();
         				$('.modalTemp').modal('show');
          				//$("#usu3").html(datos);
          		        
          		        },
          			error: function(){
          			//	$("#conte").html("Pailas esto no es Facil");
          				},
          		});	
        	   
           } 
     //*****************************FIN EVENTOS DE MAS******************************
       
       $(document).ready(function() {   
    	    $("#contenidoModal").on('click', '.buscarup', function() {
    	        var id = $(this).attr("name");
    	        var evento = $(this).attr("id");
    	        console.log("nombre: "+id);
    	        
    	        switch(evento) {
    	        case "actualizarRol":
			    	        	 var datos=$("#rol"+id).val();
			    	    	        
			    	    	        console.log("datos");
			    	  		      var rolDatoo=$("#nombre").val();
			    	  		    	$.ajax({
			    	  				type: "POST",
			    	  				url: 'PetiActualizarRol',
			    	  				data:{rolDatos : datos, idd : id, actividad : "actualizar"} ,
			    	  				beforeSend: function(){
			    	  		          // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
			    	  					},
			    	  				success: function(datos){
			    	  				//	$('#ajaxResponse').text(datos);
			    	  		           	console.log(datos);
			    	  		           	alert(datos +" de "+rolDatoo);
			    	  		            },
			    	  				error: function(){
			    	  				//	$("#conte").html("Pailas esto no es Facil");
			    	  					},
			    	  			});
    	            break;
    	        case "eliminarRol":
			    	        var datos=$("#rol"+id).val();
				    	        
				    	        console.log("datos");
				  		      var rolDatoo=$("#nombre").val();
				  		    	$.ajax({
				  				type: "POST",
				  				url: 'PetiActualizarRol',
				  				data:{idd : id, actividad : "eliminar"} ,
				  				beforeSend: function(){
				  		          // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
				  					},
				  				success: function(datos){
				  				//	$('#ajaxResponse').text(datos);
				  		           	console.log(datos);
				  		           	alert(datos +" de "+rolDatoo);
				  		            },
				  				error: function(){
				  				//	$("#conte").html("Pailas esto no es Facil");
				  					},
				  			});
    	            break;
		    	    case "actualizarUsuario":
		   	          var roll =$("#rolesRol2"+id+" option:selected" ).val();
		  		      var document=$("#documento"+id).val();
		  		      var nombre=$("#nombre"+id).val();
		  		      var tel=$("#telefono"+id).val();
		  		      //var passs=$("#usuPass").val();
		   	    	        
		   	    	        console.log("datos");
		   	  		      var rolDatoo=$("#nombre").val();
		   	  		    	$.ajax({
		   	  				type: "POST",
		   	  				url: 'PetiActualizarUsuarios',
		   	  			    data:{idd : id, rroll : roll, usuDocumen : document, usuNombre : nombre, usuTelefono : tel, actividad : "actualizar"} ,
						//	data:{rolDatos : datos, idd : id, actividad : "actualizar"} ,
		   	  				beforeSend: function(){
		   	  		          // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
		   	  					},
		   	  				success: function(datos){
		   	  				//	$('#ajaxResponse').text(datos);
		   	  		           	console.log(datos);
		   	  		           	alert(datos +" de "+rolDatoo);
		   	  		            },
		   	  				error: function(){
		   	  				//	$("#conte").html("Pailas esto no es Facil");
		   	  					},
		   	  			});
		   	  		  break;
		    	      case "eliminarUsuario":
		    	          $.ajax({
			  				type: "POST",
			  				url: 'PetiActualizarUsuarios',
			  				data:{idd : id, actividad : "eliminar"} ,
			  				beforeSend: function(){
			  		          // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
			  					},
			  				success: function(datos){
			  				//	$('#ajaxResponse').text(datos);
			  		           	console.log(datos);
			  		           	alert(datos +" de "+rolDatoo);
			  		            },
			  				error: function(){
			  				//	$("#conte").html("Pailas esto no es Facil");
			  					},
			  			});
	            break;
    	        default:
    	            //code block
    	    }
    	       
    	        
    	    });
    	   
    	});
       