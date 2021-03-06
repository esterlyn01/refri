package datos.peticion;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sun.xml.internal.fastinfoset.util.StringArray;

import datos.conexion.Procedimiento;



/**
 * Servlet implementation class PeriRol
 */
@WebServlet("/PetiBuscarRol")
public class PetiBuscarRol extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PetiBuscarRol() {
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
		System.out.println("petiBuscar rol");
		int val=0;
		try{
		val = Integer.parseInt(request.getParameter("valll"));
		}catch(java.lang.NumberFormatException ex){
			System.out.print("peti buscar rol error por numero");
		}
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
							 			
					String lista="<h3>Roles</h3>"
							+ "<table class='table table-bordered'><tr><th>Rol</th><th>Eventos</th></tr>";
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
							 			
					String lista="<select class='form-control usuEstra' id='rolesRol'>";
					while (rs.next()) {
					  //Obtenemos los valores de la consulta y creamos
					  //nuestro objeto producto				
						System.out.println("Rol: "+rs.getString("rol"));
						lista+="<option value='"+rs.getString("id_rol")+"'>"+rs.getString("rol")+"</option>";
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
