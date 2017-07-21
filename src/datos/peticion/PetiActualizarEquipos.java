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
import datos.trabajo.Equipo;



/**
 * Servlet implementation class PeriRol
 */
@WebServlet("/PetiActualizarEquipos")
public class PetiActualizarEquipos extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PetiActualizarEquipos() {
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
	String mensaje="";
	String actividad=request.getParameter("actividad");
	Equipo equi=new Equipo();
	Procedimiento proce = new Procedimiento();
	
	if(actividad.compareToIgnoreCase("actualizar")==0){
		    mensaje="actualizar";
			equi.setPlaca(request.getParameter("idd"));
		    equi.setTipoAire(request.getParameter("tipoDeAire2"));
		    equi.setBtu(Integer.parseInt(request.getParameter("btu2")));
			equi.setUbicacion(request.getParameter("ubicacion2"));
			equi.setAmperaje(Integer.parseInt(request.getParameter("amperaje2")));
			equi.setVoltaje(Integer.parseInt(request.getParameter("voltaje2")));
			equi.setPrecionAlta(Integer.parseInt(request.getParameter("presionAlta2")));
			equi.setPresionBaja(Integer.parseInt(request.getParameter("presionbaja2")));
			equi.setRefrigerante(request.getParameter("Refrigerante2"));
						
			//fin datos del formulario
			//conexion bd y procedimientos almacenados
			
			proce.setCall("{CALL actualizarEquipo( ?, ?, ?, ?, ?, ?, ?, ?, ?)}");
			proce.conexion(0);
			try {
				proce.cl.setString(1, equi.getPlaca());
				proce.cl.setString(2, equi.getTipoAire());
				proce.cl.setInt(3, equi.getBtu());
				proce.cl.setString(4, equi.getUbicacion());
				proce.cl.setInt(5, (int)equi.getAmperaje());
				proce.cl.setInt(6, (int)equi.getVoltaje());
				proce.cl.setInt(7, (int)equi.getPrecionAlta());
				proce.cl.setInt(8, (int)equi.getPresionBaja());
				proce.cl.setString(9, equi.getRefrigerante());
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
	}else
	if(actividad.compareToIgnoreCase("eliminar")==0){
			mensaje="eliminar";
			equi.setPlaca(request.getParameter("idd"));
			String dada = request.getParameter("rolDatos") ;
			
			//fin datos del formulario
			//conexion bd y procedimientos almacenados
			
			proce.setCall("{CALL eliminarEquipo(?)}");
			proce.conexion(0);
			try {
				proce.cl.setString(1, equi.getPlaca());
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			
	}
	
	boolean rpta =proce.cierreInsert();
	
    if (rpta) {
        //Si inserto lo redireccionamos a otra pagina que se llama "mensaje.jsp"
        //response.sendRedirect("mensaje.jsp?men=Se registro  de manera correcta");
   	 response.setContentType("text/plain");
   		response.getWriter().write("Se "+mensaje+"  de manera correcta");
    } else {
        //Si no se inserto lo redireccionamos a otra pagina que se llama "mensaje.jsp"
        //response.sendRedirect("mensaje.jsp?men=No se registraron los datos");
   	 response.setContentType("text/plain");
		 response.getWriter().write("No se "+mensaje+" los datos");
    }
	
	System.out.println(""+equi.getPlaca());
	}
	

}
