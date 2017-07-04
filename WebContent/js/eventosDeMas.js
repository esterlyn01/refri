
$(document).ready(concentroo);
       function concentroo(){
         localStorage.setItem('con', '0');
          localStorage.setItem('val', '0');
         var x=$("#concentro");
          x.append("<!-- Nav tabs -->"
           +"<ul class='nav nav-tabs' role='tablist'>"
             +"<li role='presentation' class='active'><a href='#rol' role='tab' data-toggle='tab'>Rol</a></li>"
             +"<li role='presentation'><a href='#usuario' role='tab' data-toggle='tab'>Usuario</a></li>"
             +"<li role='presentation'><a href='#grupo' role='tab' data-toggle='tab'>Grupo</a></li>"
             +"<li role='presentation'><a href='#asistencia' role='tab' data-toggle='tab'>Asistencia</a></li>"
             +"<li role='presentation'><a href='#roles' role='tab' data-toggle='tab'>roles</a></li>"
             +"<li role='presentation'><a href='#programas' role='tab' data-toggle='tab'>programas</a></li>"
             +"<li role='presentation'><a href='#usuAdmin' role='tab' data-toggle='tab'>administrador</a></li>"
             +"<li role='presentation'><a href='#usuMoni' role='tab' data-toggle='tab'>Monitor</a></li>"
             +"<li role='presentation'><a href='#Usuestu' role='tab' data-toggle='tab'>estudiante</a></li>"
            +"</ul>"
           +"<!-- Tab panes -->"
           +"<div class='tab-content'>"
             +"<div role='tabpanel' class='tab-pane active' id='rol'></div>"
             +"<div role='tabpanel' class='tab-pane' id='usuario'></div>"
             +"<div role='tabpanel' class='tab-pane' id='grupo'></div>"
             +"<div role='tabpanel' class='tab-pane' id='asistencia'></div>"
             +"<div role='tabpanel' class='tab-pane' id='roles'></div>"
            +"<div role='tabpanel' class='tab-pane' id='programas'></div>"
             +"<div role='tabpanel' class='tab-pane' id='usuAdmin'></div>"
             +"<div role='tabpanel' class='tab-pane' id='usuMoni'></div>"
             +"<div role='tabpanel' class='tab-pane' id='Usuestu'></div>"
           +"</div>");


       x=$("#memoria");
       var xs1=3,xs2=5,xs3=4;
       var sm1=2,sm2=6,sm3=4;
       var md1=3,md2=5,md3=4;
       var lg1=3,lg2=5,lg3=4;
       
     var nota= "FALTA LA CLASES DE LOS SELECT"; 
//     $("#usuMoni").append(nota);
//     $("#programas").append(nota);
//     $("#asistencia").append(nota);
//     $("#roles").append(nota);
       
       var rol=  "<div class='row bs-example'>"
	                   +"<div class='col-xs-"+xs1+" col-sm-"+sm1+" col-md-"+md1+" col-lg-"+lg1+"'><label>Rol</label></div>"
	                   +"<div class='col-xs-"+xs2+" col-sm-"+sm2+" col-md-"+md2+" col-lg-"+lg2+"'>"
	                   	   +"<input type='text' class='form-control' id='rolDato' placeholder='colocar Roles'>"
	                   +"</div>"
	                   +"<div class='col-xs-"+xs3+" col-sm-"+sm3+" col-md-"+md3+" col-lg-"+lg3+"'>"
	                      +"<button type='button' class='btn btn-primary' id='crol'>Crear</button>"
	                   +"</div>"
                   +"</div>";

       $("#rol").append(rol);
       
var grupo=  "<div class='row bs-example'>"
    +"<div class='col-xs-3 col-sm-2 col-md-2 col-lg-2'><label>Grupo</label></div>"
    +"<div class='col-xs-5 col-sm-6 col-md-5 col-lg-5'>"
    	   +"<input type='text' class='form-control' id='grup' placeholder='grupo'>"
    +"</div>"
    +"<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>"
       +"<button type='button' class='btn btn-primary' id='cGrup'>agregar</button>"
    +"</div>"
+"</div>";

$("#grupo").append(grupo);

var asistencia=""  
+"<div class='row bs-example'>"
	//campo
	+"<div class='row'>"
	    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Filtro</label></div>"
	    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
	    	   +"<input type='email' class='form-control asisFiltro' id='asisFiltro' placeholder='colocar asistencia'>"
	    +"</div>"
    +"</div>"
  //campo  $(“.pais”).attr(“value”);  $( "#mi_select option:selected" ).val();
	+"<div class='row'>"
	    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Usuario</label></div>"
	    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5' id='asisListaEstuLugar'>"
//			    +"<select class='form-control asisListaEstu' id='asisListaEstu'>"
//				    +"<option>1</option>"
//				    +"<option>2</option>"
//				    +"<option>3</option>"
//				    +"<option>4</option>"
//				    +"<option>5</option>"
//			    +"</select>"
	    +"</div>"
    +"</div>"
    //Boton
    +"<div class='row'>"
	    +"<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>"
	       +"<button type='button' class='btn btn-primary' id='mas'>agregar</button>"
	    +"</div>"
    +"</div>"
+"</div>";

$("#asistencia").append(asistencia);

var usuario=""  
	+"<div class='row bs-example centert'>"
		+"<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>"
			//campo
			+"<div class='row'>"
			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Nª Documento</label></div>"
			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
			    	   +"<input type='number' class='form-control' id='usuDocumen' placeholder='colocar documento'>"
			    +"</div>"
		    +"</div>"
		  //campo
			+"<div class='row'>"
			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Nombre</label></div>"
			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
			    	   +"<input type='text' class='form-control' id='usuNombre' placeholder='colocar Nombre'>"
			    +"</div>"
		    +"</div>"
		    //campo   
			+"<div class='row'>"
			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Telefono</label></div>"
			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
			    	   +"<input type='text' class='form-control' id='usuTelefono' placeholder='colocar Telefono'>"
			    +"</div>"
		    +"</div>"
		    //campo
			+"<div class='row'>"
			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Clave</label></div>"
			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
			    	   +"<input type='pass' class='form-control' id='usuPass' placeholder='colocar Clave'>"
			    +"</div>"
		    +"</div>"
		  //campo
			+"<div class='row'>"
			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Correo</label></div>"
			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5 input-group'>"
					 +"<div class='input-group-addon'>@</div>"
					 +"<input class='form-control' type='email' placeholder='Enter email' id='usoEmail'>" 
			    +"</div>"
		    +"</div>"
//		  //campo
//			+"<div class='row'>"
//			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Hoy</label></div>"
//			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
//			    	   +"<input type='date' class='form-control' id='usoFecha' placeholder='fecha Actual'>"
//			    +"</div>"
//		    +"</div>"
		  //Boton
		    +"<div class='row'>"
			    +"<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>"
			       +"<button type='button' class='btn btn-primary' id='cUsu'>agregar</button>"
			    +"</div>"
		    +"</div>"
	+"</div>"
+"</div>";
	

$("#usuario").append(usuario);
//$("#usuario").append(nota);

var roles=  "<div class='row bs-example'>"
    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Roles</label></div>"
    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
    	   +"<input type='text' class='form-control' id='' placeholder='colocar Roles'>"
    +"</div>"
    +"<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>"
       +"<button type='button' class='btn btn-primary' id='mas'>agregar</button>"
    +"</div>"
+"</div>";

$("#roles").append(roles);

var programas=  ""  
	+"<div class='row bs-example centert'>"
	+"<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>"
		//campo
		+"<div class='row'>"
		    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Codigo</label></div>"
		    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
		    	   +"<input type='number' class='form-control' id='' placeholder='colocar Codigo'>"
		    +"</div>"
	    +"</div>"
	  //campo
		+"<div class='row'>"
		    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>usuario</label></div>"
		    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
		    	   +"<input type='text' class='form-control' id='' placeholder='colocar Nombre'>"
		    +"</div>"
	    +"</div>"
	  //campo
		+"<div class='row'>"
		    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Programa</label></div>"
		    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
		    	   +"<input type='text' class='form-control' id='' placeholder='colocar Apellido'>"
		    +"</div>"
	    +"</div>"
	  //Boton
	    +"<div class='row'>"
		    +"<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>"
		       +"<button type='button' class='btn btn-primary' id='mas'>agregar</button>"
		    +"</div>"
	    +"</div>"
+"</div>"
+"</div>";


$("#programas").append(programas);
       
var estudiante=""  
	+"<div class='row bs-example centert'>"
		+"<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>"
			//campo
			+"<div class='row'>"
			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Nª Documento</label></div>"
			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
			    	   +"<input type='number' class='form-control' id='usuEsDocumen' placeholder='colocar documento'>"
			    +"</div>"
		    +"</div>"
		  //campo
			+"<div class='row'>"
			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Nombre</label></div>"
			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
			    	   +"<input type='text' class='form-control' id='usuEsNombre' placeholder='colocar Nombre'>"
			    +"</div>"
		    +"</div>"
		  //campo
			+"<div class='row'>"
			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Apellido</label></div>"
			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
			    	   +"<input type='text' class='form-control' id='usuEsApellido' placeholder='colocar Apellido'>"
			    +"</div>"
		    +"</div>"
		  //campo jornada $('input:radio[name=edad]:checked').val()
			+"<div class='row'>"
			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Jornada</label></div>"
			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
					+"<label class='radio-inline'>"
						+"<input type='radio' name='inlineRadioOptionsEs' id='usuEsJornada' value='d' checked> Diurna"
					+"</label>"
					+"<label class='radio-inline'>"
					    +"<input type='radio' name='inlineRadioOptionsEs' id='usuEsJornada' value='n'> Nocturna"
					+"</label>"
			    +"</div>"
		    +"</div>"
		  //campo   
			+"<div class='row'>"
			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Telefono</label></div>"
			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
			    	   +"<input type='text' class='form-control' id='usuEsTelefono' placeholder='colocar Telefono'>"
			    +"</div>"
		    +"</div>"
		  //campo  $(“.pais”).attr(“value”);  $( "#mi_select option:selected" ).val();
			+"<div class='row'>"
			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Estrato</label></div>"
			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
					    +"<select class='form-control usuEsEstra' id='usuEsEstra'>"
						    +"<option>1</option>"
						    +"<option>2</option>"
						    +"<option>3</option>"
						    +"<option>4</option>"
						    +"<option>5</option>"
					    +"</select>"
			    +"</div>"
		    +"</div>"
//		  //campo
//			+"<div class='row'>"
//			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Login</label></div>"
//			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
//			    	   +"<input type='text' class='form-control' id='usuLogin' placeholder='colocar Login'>"
//			    +"</div>"
//		    +"</div>"
//		  //campo
//			+"<div class='row'>"
//			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Clave</label></div>"
//			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
//			    	   +"<input type='pass' class='form-control' id='usuPass' placeholder='colocar Clave'>"
//			    +"</div>"
//		    +"</div>"
			  //campo  $(“.pais”).attr(“value”);  $( "#mi_select option:selected" ).val();  
		    //campo
			+"<div class='row'>"
			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Correo</label></div>"
			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5 input-group'>"
					 +"<div class='input-group-addon'>@</div>"
					 +"<input class='form-control' type='email' placeholder='Enter email' id='usoEsEmail'>" 
			    +"</div>"
		    +"</div>"
//		  //campo
//			+"<div class='row'>"
//			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Hoy</label></div>"
//			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
//			    	   +"<input type='date' class='form-control' id='usoFecha' placeholder='fecha Actual'>"
//			    +"</div>"
//		    +"</div>"
		  //Boton
		    +"<div class='row'>"
			    +"<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>"
			       +"<button type='button' class='btn btn-primary' id='cUsuEs'>agregar</button>"
			    +"</div>"
		    +"</div>"
	+"</div>"
+"</div>";
	

$("#Usuestu").append(estudiante);
     


var administrador=""  
	+"<div class='row bs-example centert'>"
		+"<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>"
			//campo
			+"<div class='row'>"
			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Nª Documento</label></div>"
			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
			    	   +"<input type='number' class='form-control' id='usuAdminDocumen' placeholder='colocar documento'>"
			    +"</div>"
		    +"</div>"
		  //campo
			+"<div class='row'>"
			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Nombre</label></div>"
			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
			    	   +"<input type='text' class='form-control' id='usuAdminNombre' placeholder='colocar Nombre'>"
			    +"</div>"
		    +"</div>"
		  //campo
			+"<div class='row'>"
			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Apellido</label></div>"
			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
			    	   +"<input type='text' class='form-control' id='usuAdminApellido' placeholder='colocar Apellido'>"
			    +"</div>"
		    +"</div>"
		  //campo
			+"<div class='row'>"
			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Cargo</label></div>"
			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
			    	   +"<input type='text' class='form-control' id='usuAdminCargo' placeholder='colocar Apellido'>"
			    +"</div>"
		    +"</div>"
		  //campo   
			+"<div class='row'>"
			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Telefono</label></div>"
			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
			    	   +"<input type='text' class='form-control' id='usuAdminTelefono' placeholder='colocar Telefono'>"
			    +"</div>"
		    +"</div>"
		 //campo
			+"<div class='row'>"
			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Login</label></div>"
			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
			    	   +"<input type='text' class='form-control' id='usuAdminLogin' placeholder='colocar Login'>"
			    +"</div>"
		    +"</div>"
		  //campo
			+"<div class='row'>"
			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Clave</label></div>"
			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5'>"
			    	   +"<input type='password' class='form-control' id='usuAdminPass' placeholder='Clave'>"
			    +"</div>"
		    +"</div>"
		  //campo
			+"<div class='row'>"
			    +"<div class='col-xs-3 col-sm-3 col-md-2 col-lg-2'><label>Correo</label></div>"
			    +"<div class='col-xs-5 col-sm-5 col-md-5 col-lg-5 input-group'>"
					 +"<div class='input-group-addon'>@</div>"
					 +"<input class='form-control' type='email' placeholder='email' id='usoAdminEmail'>" 
			    +"</div>"
		    +"</div>"

		  //Boton
		    +"<div class='row'>"
			    +"<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>"
			       +"<button type='button' class='btn btn-primary' id='cAdmin'>agregar</button>"
			    +"</div>"
		    +"</div>"
	+"</div>"
+"</div>";

$("#usuAdmin").append(administrador);



datosIniciales();
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
    			//	$('#ajaxResponse').text(datos);
    		      	console.log(datos);
    		       	alert(datos);
    		       	$("#asisListaEstuLugar").append(datos);
    		        },
    			error: function(){
    			//	$("#conte").html("Pailas esto no es Facil");
    				},
    		});		
       }  
      
  //*****************************FIN DATOS INICIALES******************************     
       
       

       $(document).ready(eventoss);
       
       function eventoss() {
    	   var x=$("#crol");
    	   x.click(vrol);
    	  
    	   x=$("#cpro");
    	   x.click(vpro);
    	   
    	   x=$("#cUsu");
    	   x.click(vusu);
    	   
    	   x=$("#cUsuEs");
    	   x.click(vusuEs);
    	   
    	   x=$("#cAdmin");
    	   x.click(vAdminn);
    	   
    	   x=$("#cGrup");
    	   x.click(vGrup);
    	   
    	   
		
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
       
       function vGrup(){
		
		      console.log("datos");
		      var grupDatoo=$("#grup").val();
		    	
		      $.ajax({
				type: "POST",
				url: 'PetiGrup',
				data:{grupDatos : grupDatoo} ,
				beforeSend: function(){
		          // 	$("#concentr").html("<div class='alert alert-warning'>Cargando.... Otra imagen</div>");
					},
				success: function(datos){
				//	$('#ajaxResponse').text(datos);
		           	console.log(datos);
		           	alert(datos +" de "+grupDatoo);
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
		      
		      var document=$("#usuDocumen").val();
		      var nombre=$("#usuNombre").val();
		      var apellido=$("#usuApellido").val();
		      var jordana = $('input:radio[name=inlineRadioOptions]:checked').val();
		      var tel=$("#usuTelefono").val();
		      var estra =$( "#usuEstra option:selected" ).val();;
		      var login=$("#usuLogin").val();
		      var passs=$("#usuPass").val();
		      var email=$("#usoEmail").val();
		      
//		      console.log("documento: "+document); 
//		      console.log("nombre: "+nombre);
//		      console.log("apellido: "+apellido);
//		      console.log("jornada: "+jordana);
//		      console.log("tel: "+tel);
//		      console.log("estrato: "+estra);
//		      console.log("login: "+login);
//		      console.log("clave: "+passs);
//		      console.log("correo: "+email);
		       
		      $.ajax({
				type: "POST",
				url: 'PetiUsuarioEs',
				data:{usuDocumen : document,usuNombre : nombre,usuApellido : apellido,usuJornada : jordana,usuTelefono : tel,usuEstra : estra,usuLogin : login,usuPass : passs,usoEmail : email} ,
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
		      var jordana = $('input:radio[name=inlineRadioOptionsEs]:checked').val();
		      var tel=$("#usuEsTelefono").val();
		      var estra =$( "#usuEsEstra option:selected" ).val();;
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
				data:{usuDocumen : document,usuNombre : nombre,usuApellido : apellido,usuJornada : jordana,usuTelefono : tel,usuEstra : estra, usoEmail : email} ,
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