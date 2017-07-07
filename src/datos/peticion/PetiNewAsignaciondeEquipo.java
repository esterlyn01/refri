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
import datos.trabajo.AsignarServicios;
import datos.trabajo.Servicios;
import datos.usuarios.Persona;
import datos.usuarios.Usuarios;


/**
 * Servlet implementation class PeriRol
 */
@WebServlet("/PetiNewAsignaciondeEquipo")
public class PetiNewAsignaciondeEquipo extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PetiNewAsignaciondeEquipo() {
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
	System.out.println("p");
	//datos del formulario
	AsignarServicios asiSer  = new AsignarServicios();
	int idequipo = 0, idservicios = 0;
	try {
		System.out.println(request.getParameter("idListaequiposs"));
		idequipo= Integer.parseInt(request.getParameter("idListaequiposs"));
		idservicios=Integer.parseInt(request.getParameter("idListaCreaServicioss"));
	} catch (NumberFormatException e1) {
		// TODO Auto-generated catch block
		e1.printStackTrace();
	}
	asiSer.setFecha(request.getParameter("creaAsigFechaa"));
	asiSer.setHora(request.getParameter("creaAsigHoraa"));
	
	System.out.println("creacion de la asignacion hora: "+asiSer.getHora());
	//fin datos del formulario
	//conexion bd y procedimientos almacenados
	Procedimiento proce = new Procedimiento();
	proce.setCall("{CALL insert_asignacionServ( ?, ?, ?, ?)}");
	proce.conexion(0);
	try {
		proce.cl.setInt(1, idequipo);
		proce.cl.setString(2, asiSer.getFecha());
		proce.cl.setString(3, asiSer.getHora());
		proce.cl.setInt(4, idservicios);	
			
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
	
	System.out.println(""+asiSer.getServicios()+" fin");
	}
	

}
