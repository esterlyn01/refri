<?php
	class mysql{
		var $sql;
		var $db;
		var $usuario;
		var $host;
		var $clave;
		
		 
		public function mysql($sql,$db, $user,$host,$pass){
			$this->sql=$sql;
			$this->db=$db;
			$this->usuario=$user;
			$this->host=$host;
			$this->clave=$pass;
		}
		
		//el la clase que se encarga de ejecutar las instruciones de la funcion Mysql
		public function listar(){
			$con= mysql_connect($this->host,$this->usuario, $this->clave) or die ("No se conecto al servidor");
			mysql_select_db($this->db) or die ("No hubo DB");
			$rs=mysql_query($this->sql);
			mysql_close($con);
			return($rs);	
		}
	
		//<a href='?sub_menu=1&opcion=1&preg=1&datos=$fila1[0]'>
		//<a href='?sub_menu=2&opcion=2&opcion_adm=3&preg1=1&datos=$fila1[0]'>
	 /*	public function ver_imagenes($rs,$wi,$he,$tab_wi,$ls){
		    $info3="<table  width='600px'><tr>";
			$time=0;
			while ($fila1=mysql_fetch_row($rs)){
			$info3.="<td>
			<table border='1' width='$tab_wi px' >
			<tr><td colspan='2'><a href='?opcion=1&opcion_ver_img=1&datos=$fila1[0]'>
			<img src='administrador/$fila1[6]' height='$he px' width='$wi px'/></p></a></td></tr>
			<tr>";

			if($ls==21)
			 {
			$info3.="<th>nombre</th>";
			}
			$info3.="<td><a href='?opcion=1&opcion_ver_img=1&datos=$fila1[0]'><p>$fila1[1]</p></a></td></tr>";

			 if($ls==21)
			 {
			 $info3.="<tr><th>Genero</th><td><p>$fila1[2]</p></td></tr>
			<tr><th>idioma</th><td><p>$fila1[3]</p></td></tr>
			<tr><th>Sub Titulos</th><td><p>$fila1[4]</p></td></tr>
			<tr><th>Duracion</th><td><p>$fila1[5]</p></td></tr>";
			}
			$info3.="</table></td>";
			$time++;
			if($time%4==0){
			$info3.="</tr><tr>";
			}
			}
			$info3.="</tr></table>";
			return($info3);
		}*/

			/*public function mi_clave($rs,$usu,$clav){
		    if(mysql_num_rows($rs)>0){
			while ($fila3=mysql_fetch_row($rs)){

			if($usu==$fila3[0] and $clav== $fila3[1] and $fila3[2]=="1"){
			header("location:usuario");
			}
			if($usu==$fila3[0] and $clav== $fila3[1] and $fila3[2]=="2"){
			header("location:administrador");
			}
			}
			}
			}		*/
	}
?>
