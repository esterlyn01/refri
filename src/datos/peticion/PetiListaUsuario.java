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



/**
 * Servlet implementation class PeriRol
 */
@WebServlet("/PetiListaUsuario")
public class PetiListaUsuario extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PetiListaUsuario() {
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
		System.out.println("po");
		//fin datos del formulario
		//conexion bd y procedimientos almacenados
		Procedimiento proce = new Procedimiento();
		proce.setCall("{CALL buscarEstudianteConProgra()}");
		proce.conexion(1);
		
		ResultSet rs = proce.cierreSelect();
		
		try {
			//String lista="<select class='form-control asisListaEstu' id='asisListaEstu' multiple='8'>";
			String lista="";
			String c = "";
			while (rs.next()) {
			  //Obtenemos los valores de la consulta y creamos
			  //nuestro objeto producto
				System.out.println(""+rs.getString("codigo"));
				//lista+="<option value='"+rs.getInt("idprogramaUsuario")+"'>"+rs.getString("codigo")+"</option>";
				c+="["+rs.getString("codigo")+"]";
				c+=",";
//	      s.setDane(rs.getInt("idprogramaUsuario"));
//	      s.setSede(rs.getString("Sede"));
//	      s.setDireccion(rs.getString("Direccion"));
//	      s.setEmail(rs.getString("Email"));
//	      s.setTelefono(rs.getString("Telefono"));
	  }
			lista+="["+c+"[]]";
			//lista+="</select>";
			response.setContentType("text/plain");
			response.getWriter().write(lista);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
//	    if (rpta) {
//	        //Si inserto lo redireccionamos a otra pagina que se llama "mensaje.jsp"
//	        //response.sendRedirect("mensaje.jsp?men=Se registro  de manera correcta");
//	   	 response.setContentType("text/plain");
//	   		response.getWriter().write("Se registro  de manera correcta");
//	    } else {
//	        //Si no se inserto lo redireccionamos a otra pagina que se llama "mensaje.jsp"
//	        //response.sendRedirect("mensaje.jsp?men=No se registraron los datos");
//	   	 response.setContentType("text/plain");
//			 response.getWriter().write("No se registraron los datos");
//	    }
		
		//System.out.println(""+r.getRol());
		proce.cierreTotal();
		}
		

}
