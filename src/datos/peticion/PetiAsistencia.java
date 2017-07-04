package datos.peticion;

import java.io.IOException;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import datos.conexion.Procedimiento;
import datos.trabajo.Equipo;


/**
 * Servlet implementation class PeriRol
 */
@WebServlet("/PetiAsistencia")
public class PetiAsistencia extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PetiAsistencia() {
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
	System.out.println("registro de equipos (clase equipo)");
	//datos del formulario
	Equipo equii = new Equipo();
	equii.setPlaca(request.getParameter("airPlaca2"));
	equii.setTipoAire(request.getParameter("tipoDeAire2"));
	equii.setBtu(Integer.parseInt(request.getParameter("btu2")));
	equii.setUbicacion(request.getParameter("ubicacion2"));
	equii.setAmperaje(Double.parseDouble(request.getParameter("amperaje2")));
	equii.setVoltaje(Double.parseDouble(request.getParameter("voltaje2")));
	equii.setPrecionAlta(Integer.parseInt(request.getParameter("presionAlta2")));
	equii.setPresionBaja(Integer.parseInt(request.getParameter("presionbaja2")));
	equii.setRefrigerante(request.getParameter("Refrigerante2"));
	
	
	//fin datos del formulari
	//conexion bd y procedimientos almacenados
	Procedimiento proce = new Procedimiento();
	//`guardarPrograma`(in progra varchar(45))
	proce.setCall("{call insert_equipos(?, ?, ?, ?, ?, ?, ?, ?, ?)}");
	proce.conexion(0);
	try {
		proce.cl.setString(1, equii.getPlaca());
		proce.cl.setString(2, equii.getTipoAire());
		proce.cl.setInt(3, equii.getBtu());
		proce.cl.setString(4, equii.getUbicacion());
		proce.cl.setDouble(5, equii.getAmperaje());
		proce.cl.setDouble(6, equii.getVoltaje());
		proce.cl.setInt(7, equii.getPrecionAlta());
		proce.cl.setInt(8, equii.getPresionBaja());
		proce.cl.setString(9, equii.getRefrigerante());
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
	
	
	//response.setContentType("text/plain");
	//response.getWiter().write(""+r.getRol());
	System.out.println(""+equii.getPlaca());
	}
	

}
