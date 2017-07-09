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
import datos.usuarios.Persona;
import datos.usuarios.Usuarios;



/**
 * Servlet implementation class PeriRol
 */
@WebServlet("/PetiActualizarUsuarios")
public class PetiActualizarUsuarios extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PetiActualizarUsuarios() {
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
	Usuarios usuar = new Usuarios();
	Procedimiento proce = new Procedimiento();
	
	if(actividad.compareToIgnoreCase("actualizar")==0){
		    mensaje="actualizar";
		    Persona ess = new Persona();
			try {
				ess.setIdd(Integer.parseInt(request.getParameter("idd")));
				ess.setDocumento(Double.parseDouble(request.getParameter("usuDocumen")));
				ess.setNombres(request.getParameter("usuNombre"));
				ess.setTelefono(request.getParameter("usuTelefono"));
				ess.setRol(Integer.parseInt(request.getParameter("rroll")));
				
				System.out.println("idrol: "+request.getParameter("rroll"));
			} catch (NumberFormatException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		    
			r.setRol(request.getParameter("rolDatos"));
			int iddd =Integer.parseInt(request.getParameter("idd"));
			String dada = request.getParameter("rolDatos") ;
			
			//fin datos del formulario
			//conexion bd y procedimientos almacenados
			
			proce.setCall("{CALL update_usuario( ?, ?, ?, ?, ?)}");
			proce.conexion(0);
			try {
				proce.cl.setInt(5, ess.getRol());
				proce.cl.setString(2, ""+ess.getNombres());
				proce.cl.setInt(3, Integer.parseInt(ess.getTelefono()));
				proce.cl.setString(4, ""+(int)ess.getDocumento());
				proce.cl.setInt(1, ess.getIdd());
				
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
	}else
	if(actividad.compareToIgnoreCase("eliminar")==0){
			mensaje="eliminar";
			int iddd =Integer.parseInt(request.getParameter("idd"));
			
			//fin datos del formulario
			//conexion bd y procedimientos almacenados
			
			proce.setCall("{CALL eliminarUsuario(?)}");
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
