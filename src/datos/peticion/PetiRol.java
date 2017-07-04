package datos.peticion;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import datos.conexion.Procedimiento;
import datos.programas.Rol;


/**
 * Servlet implementation class PeriRol
 */
@WebServlet("/PeriRol")
public class PetiRol extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PetiRol() {
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
	//datos del formulario
	Rol r = new Rol();
	r.setRol(request.getParameter("rolDatos"));
	//fin datos del formulario
	//conexion bd y procedimientos almacenados
	Procedimiento proce = new Procedimiento();
	proce.setCall("{CALL inser_rol(?)}");
	proce.conexion(0);
	try {
		proce.cl.setString(1, r.getRol());
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	boolean rpta =proce.cierreInsert();
	
    if (rpta) {
        //Si inserto lo redireccionamos a otra pagina que se llama "mensaje.jsp"
        //response.sendRedirect("mensaje.jsp?men=Se registro  de manera correcta");
   	 response.setContentType("text/plain");
   		response.getWriter().write("Se registro  de manera correcta");
    } else {
        //Si no se inserto lo redireccionamos a otra pagina que se llama "mensaje.jsp"
        //response.sendRedirect("mensaje.jsp?men=No se registraron los datos");
   	 response.setContentType("text/plain");
		 response.getWriter().write("No se registraron los datos");
    }
	
	System.out.println(""+r.getRol());
	}
	

}
