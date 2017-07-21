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
@WebServlet("/PetiBuscarEquipos")
public class PetiBuscarEquipos extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PetiBuscarEquipos() {
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
			System.out.print("peti buscar rol error por numeroo");
		}
		System.out.println("val: "+val);
		//fin datos del formulario
		//conexion bd y procedimientos almacenados
		Procedimiento proce = new Procedimiento();
		proce.setCall("{CALL select_equipos()}");
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
						 			
				String lista="<h3>Equipos</h3>"
						+ "<table class='table table-bordered'><tr>"
						+ "<th>Placa</th>"
						+ "<th>Tipo</th>"
						+ "<th>Btu</th>"
						+ "<th>Ubicacion</th>"
						+ "<th>Amperaje</th>"
						+ "<th>Voltaje</th>"
						+ "<th>Presion Alta</th>"
						+ "<th>Presion baja</th>"
						+ "<th>Refrigerante</th>"
						+ "<th>Evento</th>"
						+ "<th>Evento</th>"
						+ "</tr>";
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
					System.out.println("Placa: "+rs.getString("placa"));
					lista+="<tr class='"+colorr[color]+"'>"
								+ "<td><input type='text' class='form-control asisFiltro' id='equipoAirPlaca"+rs.getString("placa")+"' value='"+rs.getString("PLACA")+"'></td>"
								+ "<td><input type='text' class='form-control asisFiltro' id='equipoAirtipodeaire"+rs.getString("placa")+"' value='"+rs.getString("TIPO_DE_AIRE_A")+"'></td>"
								+ "<td><input type='text' class='form-control asisFiltro' id='equipoAirbtu"+rs.getString("placa")+"' value='"+rs.getString("CAPACIDAD_BTU")+"'></td>"
								+ "<td><input type='text' class='form-control asisFiltro' id='equipoAirubicacion"+rs.getString("placa")+"' value='"+rs.getString("UBICACION")+"'></td>"
								+ "<td><input type='text' class='form-control asisFiltro' id='equipoAiramperaje"+rs.getString("placa")+"' value='"+rs.getString("AMPERAJE")+"'></td>"
								+ "<td><input type='text' class='form-control asisFiltro' id='equipoAirvoltaje"+rs.getString("placa")+"' value='"+rs.getString("VOLTAJE")+"'></td>"
								+ "<td><input type='text' class='form-control asisFiltro' id='equipoAirpresionalta"+rs.getString("placa")+"' value='"+rs.getString("PRESION_ALTA")+"'></td>"
								+ "<td><input type='text' class='form-control asisFiltro' id='equipoAirpresionbaja"+rs.getString("placa")+"' value='"+rs.getString("PRESION_BAJA")+"'></td>"
								+ "<td><input type='text' class='form-control asisFiltro' id='equipoAirrefrigerante"+rs.getString("placa")+"' value='"+rs.getString("REFRIGERANTE")+"'></td>"
																							
								+ "<td><button name='"+rs.getString("placa")+"' type='button' class='buscarup btn btn-primary' id='actualizarEquipo'>actualizar</button></td>"
								+ "<td><button name='"+rs.getString("placa")+"' type='button' class='buscarup btn btn-primary' id='eliminarEquipo'>Eliminar</button></td>"
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
							 			
					String lista="<select class='form-control usuEstra' id='listaEquipos'>";
					while (rs.next()) {
					  //Obtenemos los valores de la consulta y creamos
					  //nuestro objeto producto				
						System.out.println("SERVICIO: "+rs.getString("PLACA"));
						lista+="<option value='"+rs.getString("PLACA")+"'>"+rs.getString("PLACA")+"</option>";
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
