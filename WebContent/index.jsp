<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/datos.css">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
        <div id="contenedor" class="row center-block container-fluid">
         <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
		<header>
          <div class="row" id="cabecera"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">


          </div></div>
			<nav id="menu">
			  <!--	<ul><li>Enlace 1</li></ul> -->
			</nav>
		</header>
		<section>
          <div class="row" id="contenido">
                  <div class=" col-sm-1 col-md-2 col-lg-2" id="conizq"> </div>
                  <div class="col-xs-12 col-sm-9 col-md-8 col-lg-8" id="concentro"></div>
                  <div class="col-sm-2 col-md-2 col-lg-2" id="conderec"></div>
           </div>
		</section>

    <footer>
      <div class="row" id="pies">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="pies2"></div>
      </div>
    </footer>
    </div>
    </div>
    
    <!-- modal de eventos -->
    <div class="modal fade modalTemp" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content row" id="contenidoModal">
	     <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" id=""></div>
	     <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 table-responsive" id="contenidoModalTem">
	     	  ...
	     </div>
	     <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" id=""></div>
    </div>
  </div>
</div>
    
    <!-- fin modal de eventos -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
     <script src="js/bootstrap.min.js"></script>
     <script src="https://code.jquery.com/ui/jquery-ui-git.js"></script>
     <script src="js/cabecera.js"></script>
     <script src="js/contenido.js"></script>
     <script src="js/pies.js"></script>
     
     
</body>
</html>