package datos.listasDesplegables;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import datos.conexion.Procedimiento;

public class ListarRoles {
	
	private String lista=null;

	public ListarRoles() {
		// TODO Auto-generated constructor stub
	}

	@SuppressWarnings("static-access")
	public String listas(int val, int idrolll, int idUsu){
		String lista=null;
		///////
		System.out.println("val: "+val);
			//fin datos del formulario
			//conexion bd y procedimientos almacenados
			Procedimiento proce = new Procedimiento();
			proce.setCall("{CALL buscarRol()}");
			proce.conexion(1);
			
			ResultSet rs = proce.cierreSelect();
			
			if(val==1){
					try {
						//String lista="<select class='form-control asisListaEstu' id='asisListaEstu' multiple='8'>";
								 			
						lista="<select class='form-control usuEstra' id='rolesRol'>";
						while (rs.next()) {
						  //Obtenemos los valores de la consulta y creamos
						  //nuestro objeto producto				
							System.out.println("Rol: "+rs.getString("rol"));
							lista+="<option value='"+rs.getString("rol")+"'>"+rs.getString("rol")+"</option>";
			//	      s.setDane(rs.getInt("idprogramaUsuario"));
			//	      s.setSede(rs.getString("Sede"));
			//	      s.setDireccion(rs.getString("Direccion"));
			//	      s.setEmail(rs.getString("Email"));
			//	      s.setTelefono(rs.getString("Telefono"));
				  }
						//lista+="["+c+"[]]";
						lista+="</select>";
						return lista;
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
			}else
			if(val==2){
					try {
						//String lista="<select class='form-control asisListaEstu' id='asisListaEstu' multiple='8'>";
								 			
						lista="<table class='table table-bordered'><tr><th>Rol</th><th>Eventos</th></tr>";
						int color=1,cont=1;
						String[] colorr=new String[3];
						colorr[1]="active";
						colorr[2]="success";
						
						while (rs.next()) {
							if(cont%2==0){
								color=1;
							}else{
								color=2;
							}
						  //Obtenemos los valores de la consulta y creamos
						  //nuestro objeto producto				
							System.out.println("Rol: "+rs.getString("rol"));
							lista+="<tr class='"+colorr[color]+"'><td><input type='text' class='form-control asisFiltro' id='rol"+rs.getString("id_rol")+"' value='"+rs.getString("rol")+"'></td><td><button name='"+rs.getString("id_rol")+"' type='button' class='buscarup btn btn-primary' id='actualizarRol'>actualizar</button></td><td><button name='"+rs.getString("id_rol")+"' type='button' class='buscarup btn btn-primary' id='eliminarRol'>Eliminar</button></td></tr>";
							cont++;
		//		      s.setDane(rs.getInt("idprogramaUsuario"));
		//		      s.setSede(rs.getString("Sede"));
		//		      s.setDireccion(rs.getString("Direccion"));
		//		      s.setEmail(rs.getString("Email"));
		//		      s.setTelefono(rs.getString("Telefono"));
				  }
						//lista+="["+c+"[]]";
						lista+="</table>";
						return lista;
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}	
					
			}else
				if(val==3){
					try {
						//String lista="<select class='form-control asisListaEstu' id='asisListaEstu' multiple='8'>";
								 			
						lista="<select class='form-control usuEstra' id='rolesRol2"+idUsu+"'>";
						while (rs.next()) {
						  //Obtenemos los valores de la consulta y creamos
						  //nuestro objeto producto
							if(Integer.parseInt(rs.getString("id_rol"))==idrolll){
								System.out.println("Rol: "+rs.getString("rol"));
								lista+="<option selected='selected' value='"+rs.getString("id_rol")+"'>"+rs.getString("rol")+"</option>";	
							}else{
								System.out.println("Rol: "+rs.getString("rol"));
								lista+="<option value='"+rs.getString("id_rol")+"'>"+rs.getString("rol")+"</option>";
							}
							//	      s.setDane(rs.getInt("idprogramaUsuario"));
			//	      s.setSede(rs.getString("Sede"));
			//	      s.setDireccion(rs.getString("Direccion"));
			//	      s.setEmail(rs.getString("Email"));
			//	      s.setTelefono(rs.getString("Telefono"));
				  }
						//lista+="["+c+"[]]";
						lista+="</select>";
						return lista;
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
			}
			proce.cierreTotal();
			return lista;		
		
		////////
	}
}
