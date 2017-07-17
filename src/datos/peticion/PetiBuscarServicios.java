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
@WebServlet("/PetiBuscarServicios")
public class PetiBuscarServicios extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PetiBuscarServicios() {
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
		System.out.println("petiBuscar servicios");
		int val=0;
		try{
		val = Integer.parseInt(request.getParameter("valll"));
		}catch(java.lang.NumberFormatException ex){
			System.out.print("peti buscar usuario error por id");
		}
		System.out.println("val: "+val);
		//fin datos del formulario
		//conexion bd y procedimientos almacenados
		Procedimiento proce = new Procedimiento();
		proce.setCall("{CALL select_servicio()}");
		proce.conexion(1);
		
		ResultSet rs = proce.cierreSelect();
		
		if(val==1){
				try {
					//String lista="<select class='form-control asisListaEstu' id='asisListaEstu' multiple='8'>";
							 			
					String lista="<select class='form-control usuEstra' id='rolesRol'>";
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
					response.setContentType("text/plain");
					response.getWriter().write(lista);
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		}else
		if(val==2){
			try {
				//String lista="<select class='form-control asisListaEstu' id='asisListaEstu' multiple='8'>";
				String lista="<table class='table'>"
						  +"<tr><th>ID</th>"
						  +"<th>Tipo</th>"
			   		      +"<th>Descricion</th>"
			   		      +"</tr>";
				
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
					 
					System.out.println("ID_SERVICIO: "+rs.getInt("ID_SERVICIO"));
					lista+="<tr class='"+colorr[color]+"'>"
							  + "<td><input type='text' class='form-control asisFiltro' id='idServicio"+rs.getInt("ID_SERVICIO")+"' value='"+rs.getInt("ID_SERVICIO")+"'></td>"
							  + "<td><input type='text' class='form-control asisFiltro' id='serTipo"+rs.getInt("ID_SERVICIO")+"' value='"+rs.getString("TIPO")+"'></td>"
							  + "<td><input type='text' class='form-control asisFiltro' id='serDespcion"+rs.getInt("ID_SERVICIO")+"' value='"+rs.getString("DESCRIPCION")+"'></td>"
							 // + "<td><input type='text' class='form-control asisFiltro' id='rol"+rs.getInt("ID_USUARIO")+"' value='"+rs.getString("ROL")+"'></td>"						
							 + "<td><button name='"+rs.getInt("ID_SERVICIO")+"' type='button' class='buscarup btn btn-primary' id='actualizarServicio'>actualizar</button></td>"
							+ "<td><button name='"+rs.getInt("ID_SERVICIO")+"' type='button' class='buscarup btn btn-primary' id='eliminarServicio'>Eliminar</button></td>"
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
							 			
					String lista="<select class='form-control usuEstra' id='listaServicios'>";
					while (rs.next()) {
					  //Obtenemos los valores de la consulta y creamos
					  //nuestro objeto producto				
						System.out.println("SERVICIO: "+rs.getString("TIPO"));
						lista+="<option value='"+rs.getString("ID_SERVICIO")+"'>"+rs.getString("TIPO")+"</option>";
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
