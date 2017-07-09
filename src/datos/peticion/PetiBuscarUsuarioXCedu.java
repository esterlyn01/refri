package datos.peticion;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import datos.conexion.Procedimiento;
import datos.listasDesplegables.ListarRoles;


/**
 * Servlet implementation class PeriRol
 */
@WebServlet("/PetiBuscarUsuarioXCedu")
public class PetiBuscarUsuarioXCedu extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PetiBuscarUsuarioXCedu() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		 processRequest(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		 processRequest(request, response);
	}
	
	//Un metodo que recibe todas las peticiones a si sea GET y POST

	@SuppressWarnings("static-access")
	protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		System.out.println("buscar ");
		int val = Integer.parseInt(request.getParameter("vall"));
		//fin datos del formulario
		//conexion bd y procedimientos almacenados
		Procedimiento proce = new Procedimiento();
		proce.setCall("{CALL select_usuario()}");
		proce.conexion(1);
		
		ResultSet rs = proce.cierreSelect();
		if(val==1){
		try {
			//String lista="<select class='form-control asisListaEstu' id='asisListaEstu' multiple='8'>";
			String lista="";
			String c ="";
			while (rs.next()) {
			  //Obtenemos los valores de la consulta y creamos
			  //nuestro objeto producto
				System.out.println(""+rs.getString("DOCUMENTO"));
				//lista+="<option value='"+rs.getInt("idprogramaUsuario")+"'>"+rs.getString("codigo")+"</option>";
				c+=""+rs.getString("DOCUMENTO")+",";
				
//	      s.setDane(rs.getInt("idprogramaUsuario"));
//	      s.setSede(rs.getString("Sede"));
//	      s.setDireccion(rs.getString("Direccion"));
//	      s.setEmail(rs.getString("Email"));
//	      s.setTelefono(rs.getString("Telefono"));
	  }
			lista+=""+c;
			//lista+="</select>";
			response.setContentType("text/plain");
			response.getWriter().write(lista);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		}
		if(val==2){
			try {
				//String lista="<select class='form-control asisListaEstu' id='asisListaEstu' multiple='8'>";
				String lista="<table class='table'>"
						  +"<tr><th>ID</th>"
						  +"<th>Documento</th>"
			   		      +"<th>Nombre</th>"
			   		      +"<th>Telefono</th>"
			   		      +"<th>Rol</th>"
			   		      + "<th>Eventos</th></tr>";
				
				int color=1,cont=1;
				String[] colorr=new String[3];
				colorr[1]="active";
				colorr[2]="success";
				
				
				ListarRoles listarRo=new ListarRoles();
				
				while (rs.next()) {
					if(cont%2==0){
						color=1;
					}else{
						color=2;
					}
				  //Obtenemos los valores de la consulta y creamos
				  //nuestro objeto producto		
					lista+="<tr></tr>";
					 
					System.out.println("IDUSUARIO: "+rs.getInt("ID_USUARIO"));
					lista+="<tr class='"+colorr[color]+"'>"
							  + "<td><input type='text' class='form-control asisFiltro' id='idusuario"+rs.getInt("ID_USUARIO")+"' value='"+rs.getInt("ID_USUARIO")+"'></td>"
							  + "<td><input type='text' class='form-control asisFiltro' id='documento"+rs.getInt("ID_USUARIO")+"' value='"+rs.getString("DOCUMENTO")+"'></td>"
							  + "<td><input type='text' class='form-control asisFiltro' id='nombre"+rs.getInt("ID_USUARIO")+"' value='"+rs.getString("NOMBRE_USUARIO")+"'></td>"
							  + "<td><input type='text' class='form-control asisFiltro' id='telefono"+rs.getInt("ID_USUARIO")+"' value='"+rs.getString("TELEFONO")+"'></td>"
							 // + "<td><input type='text' class='form-control asisFiltro' id='rol"+rs.getInt("ID_USUARIO")+"' value='"+rs.getString("ROL")+"'></td>"						
							 + "<td>"+listarRo.listas(3, rs.getInt("ID_ROL"),(int)rs.getInt("ID_USUARIO"))+"</td>"						
							 + "<td><button name='"+rs.getInt("ID_USUARIO")+"' type='button' class='buscarup btn btn-primary' id='actualizarUsuario'>actualizar</button></td>"
							+ "<td><button name='"+rs.getInt("ID_USUARIO")+"' type='button' class='buscarup btn btn-primary' id='eliminarUsuario'>Eliminar</button></td>"
						+ "</tr>";
					cont++;
//		      s.setDane(rs.getInt("idprogramaUsuario"));
//		      s.setSede(rs.getString("Sede"));
//		      s.setDireccion(rs.getString("Direccion"));
//		      s.setEmail(rs.getString("Email"));
//		      s.setTelefono(rs.getString("Telefono"));
		  }
				//lista+="["+c+"[]]";
				lista+="</table>";
				response.setContentType("text/plain");
				response.getWriter().write(lista);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}else
			if(val==3){
				try {
					//String lista="<select class='form-control asisListaEstu' id='asisListaEstu' multiple='8'>";
							 			
					String lista="<select class='form-control usuEstra' id='usuLista'>";
					while (rs.next()) {
					  //Obtenemos los valores de la consulta y creamos
					  //nuestro objeto producto				
						System.out.println("DOCUMENTO: "+rs.getString("DOCUMENTO"));
						lista+="<option value='"+rs.getString("ID_USUARIO")+"'>"+rs.getString("DOCUMENTO")+"</option>";
		//	      s.setDane(rs.getInt("idprogramaUsuario"));
		//	      s.setSede(rs.getString("Sede"));
		//	      s.setDireccion(rs.getString("Direccion"));
		//	      s.setEmail(rs.getString("Email"));
		//	      s.setTelefono(rs.getString("Telefono"));
			  }
					//lista+="["+c+"[]]";
					lista+="</select>";
					response.setContentType("text/plain");
					response.getWriter().write(lista);
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		}
		proce.cierreTotal();
		}

}
