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
@WebServlet("/PetiActualizarServicios")
public class PetiActualizarServicios extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PetiActualizarServicios() {
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
	Rol r = new Rol();
	Procedimiento proce = new Procedimiento();
	
	if(actividad.compareToIgnoreCase("actualizar")==0){
		    mensaje="actualizar";
			r.setRol(request.getParameter("rolDatos"));
			int iddd =Integer.parseInt(request.getParameter("idd"));
			String dada = request.getParameter("rolDatos") ;
			
			//fin datos del formulario
			//conexion bd y procedimientos almacenados
			
			proce.setCall("{CALL actualizarRol( ?, ?)}");
			proce.conexion(0);
			try {
				proce.cl.setInt(1, iddd);
				proce.cl.setString(2, dada);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
	}else
	if(actividad.compareToIgnoreCase("eliminar")==0){
			mensaje="eliminar";
			int iddd =Integer.parseInt(request.getParameter("idd"));
			String dada = request.getParameter("rolDatos") ;
			
			//fin datos del formulario
			//conexion bd y procedimientos almacenados
			
			proce.setCall("{CALL eliminarRol(?)}");
			proce.conexion(0);
			try {
				proce.cl.setInt(1, iddd);
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
	
	System.out.println(""+r.getRol());
	}
	

}
