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
@WebServlet("/PetiBuscarRoles")
public class PetiBuscarRoles extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PetiBuscarRoles() {
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
		int val = Integer.parseInt(request.getParameter("vall"));
		
		//conexion bd y procedimientos almacenados
		Procedimiento proce = new Procedimiento();
		proce.setCall("{CALL buscarRoles()}");
		proce.conexion(1);
		
		ResultSet rs = proce.cierreSelect();
		if(val==1){
		try {
			//String lista="<select class='form-control asisListaEstu' id='asisListaEstu' multiple='8'>";
			String lista="<table><tr><th>Rol</th><th>usuario</th><tr>";
			String c ="";
			while (rs.next()) {
				lista+="<table><tr><th>"+rs.getString("rol")+"</th><th>"+rs.getString("nombre")+" "+rs.getString("apellido")+"</th><tr>";
			}
			lista+=""+c;
			//lista+="</select>";
			response.setContentType("text/plain");
			response.getWriter().write(lista);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		}if(val==2){
			try {
				//String lista="<select class='form-control asisListaEstu' id='asisListaEstu' multiple='8'>";
				String lista="<table class='table table-condensed'><tr><th>Programa</th></tr>";
				while (rs.next()) {
					System.out.println("Rol: "+rs.getString("programa"));
					lista+="<tr><td>"+rs.getString("programa")+"</td></tr>";
		  }
				lista+="</table>";
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
