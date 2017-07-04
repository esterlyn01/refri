<?php
include "clases.php";
extract($_REQUEST);
$obj= new mysql($sql,'restauranteLucio','root','localhost','root');
$obj->sql="SELECT `retaurantelucio`.`idretauranteLucio`,
    `retaurantelucio`.`nombre`,
    `retaurantelucio`.`presio`,
    `retaurantelucio`.`descripcion`,
    `retaurantelucio`.`foto`
FROM `restaurantelucio`.`retaurantelucio`";
$rs=$obj->listar();
$info[0]="";
$t=0;
 			while ($fila=mysql_fetch_row($rs)){
 			  	$info[$t]=array("nombre"=>$fila['1'],"precio"=>$fila['2'],"descripcion"=>$fila['3'],"foto"=>$fila['4']);
             $t++;
}

/* $DATOS=array(
        array("nombre"=>"Moto HYUNDAI 2014","precio"=>"18000000","descripcion"=>"Color rojo full equipo","categoria"=>"vehiculo","foto"=>"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTWMcW9u9ZhYTywcfYCdbgELs9f-1qsS0P_YpUpQoVPN5L66iKu"),
        array("nombre"=>"Mercedes Benz 2014","precio"=>"21000000","descripcion"=>"Color rojo full equipo","categoria"=>"vehiculo","foto"=>"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTs9BLLyYdLEDP25-_6TvfcVgsUTgw6rF9z3HZeOFR43gRcnx8t"),
        array("nombre"=>"Camioneta Toyota Tucson 2014","precio"=>"27000000","descripcion"=>"Color rojo full equipo","categoria"=>"vehiculo","foto"=>"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjqOy3XcSVoJRVuRi8xyxH-nCKktmh_1QT7WEtc7L_QF4Bm78kqw"),
        array("nombre"=>"AVEO Cielo 2014","precio"=>"38000000","descripcion"=>"Color rojo full equipo","categoria"=>"vehiculo","foto"=>"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT3gc5Y6hJSluu20hx91g4Dk_OpfxB2lj7Z1VLIVxRHCovba8uL"),
        array("nombre"=>"Retro UMERO 2014","precio"=>"260000000","descripcion"=>"Color rojo full equipo","categoria"=>"vehiculo","foto"=>"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ4Lr55jbUiHRWJI1g6R6RDMOCtIujBBpp54JreTut64WodlkoE"),

        array("nombre"=>"Olla Arrocera Tristar","precio"=>"50000","descripcion"=>"Color rojo full equipo","categoria"=>"hogar","foto"=>"http://ecx.images-amazon.com/images/I/814-WHQHRPL._SL1500_.jpg"),
        array("nombre"=>"Sillas Cristal","precio"=>"180000","descripcion"=>"Color rojo full equipo","categoria"=>"hogar","foto"=>"http://www.decoralos.com/wp-content/uploads/2014/08/productos-para-el-hogar-sillas-con-diseno-para-un-espacio-chico-01.jpg"),
        array("nombre"=>"Lavadora SMEG","precio"=>"900000","descripcion"=>"Color rojo full equipo","categoria"=>"hogar","foto"=>"http://www.decorahoy.com/wp-content/uploads/2009/06/smeg-lavar-roupa-mao.jpg"),
        array("nombre"=>"Batidora Oster ","precio"=>"27000","descripcion"=>"Color rojo full equipo","categoria"=>"hogar","foto"=>"http://compras.colombia.com/catalogo/electrodomesticos/images/batidora_blackanddecker_gr.jpg"),
        array("nombre"=>"TV LG","precio"=>"1500000","descripcion"=>"Color rojo full equipo","categoria"=>"hogar","foto"=>"http://static1.actualidadgadget.com/wp-content/uploads/2009/04/viewsonicvt22301.jpg"),

        array("nombre"=>"Table Sony","precio"=>"290000","descripcion"=>"Color rojo full equipo","categoria"=>"tecnologia","foto"=>"http://www.eluniversal.com.co/sites/default/files/styles/610x400/public/22tecnologia2_1.jpg?itok=_mWGiZrQ"),
        array("nombre"=>"Portatil HP","precio"=>"800000","descripcion"=>"Color rojo full equipo","categoria"=>"tecnologia","foto"=>"http://www.mercadoactual.es/imgproductos/img490000/Small/essential-pc-portatil-hp-650-c1n10ea.jpg"),
        array("nombre"=>"Table","precio"=>"220000","descripcion"=>"Color rojo full equipo","categoria"=>"tecnologia","foto"=>"http://cdn4.mos.techradar.futurecdn.net//art/tablets/panasonic/ToughPad%20FZ-G1/FZ-G1-580-90.jpg"),
        array("nombre"=>"Nintendo","precio"=>"120000","descripcion"=>"Color rojo full equipo","categoria"=>"tecnologia","foto"=>"http://cdospuntocero.files.wordpress.com/2013/11/nintendo-tablet.jpg"),
        array("nombre"=>"Celular Apple","precio"=>"460000","descripcion"=>"Color rojo full equipo","categoria"=>"tecnologia","foto"=>"http://www.sotendencias.com/img/fotos/celulares%20apple%203.jpg"),
 );*/

  echo json_encode($info);
/*  echo  $p;*/
?>