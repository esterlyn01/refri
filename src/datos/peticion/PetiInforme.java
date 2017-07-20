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
@WebServlet("/PetiInforme")
public class PetiInforme extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PetiInforme() {
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
		String lista="";
		
		//fin datos del formulario
		//conexion bd y procedimientos almacenados
		Procedimiento proce = new Procedimiento();
		proce.setCall("{CALL InfoElEquipoQueMasIngresa()}");
		proce.conexion(1);
		
		ResultSet rs = proce.cierreSelect();
		
		try {
			//String lista="<select class='form-control asisListaEstu' id='asisListaEstu' multiple='8'>";
			lista="<h3>El equipo que más ingreso y soporte más realizado para ese equipo</h3>";		 			
			lista+="<table class='table table-bordered'>"
						+ "<tr><th>EQUIPO_PLACA</th>"
						+ "<th>TIPO</th>"
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
				lista+="<br/><tr class='"+colorr[color]+"'>"
							+ "<td>"+rs.getString("EQUIPO_PLACA")+"</td>"
							+ "<td>"+rs.getString("TIPO")+"</td>"
						+ "</tr><br/><br/>";
				cont++;
	  }
			//lista+="["+c+"[]]";
			lista+="</table>";
			//response.setContentType("text/plain");
			//response.getWriter().write(lista);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		/////////////////////////////////////////////////
		proce.setCall("{CALL equiposEnUnMes()}");
		proce.conexion(1);
		
		rs = proce.cierreSelect();
		
		try {
			//String lista="<select class='form-control asisListaEstu' id='asisListaEstu' multiple='8'>";
			lista+="<h3>equipos en un mes</h3>";		 			
			lista+="<table class='table table-bordered'>"
						+ "<tr><th>PLACA</th>"
						+ "<th>MES</th>"
						+ "<th>EVENTOS</th>"
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
				lista+="<br/><tr class='"+colorr[color]+"'>"
							+ "<td>"+rs.getString("EQUIPO_PLACA")+"</td>"
							+ "<td>"+rs.getString("mes")+"</td>"
							+ "<td>"+rs.getString("equpisEnMes")+"</td>"
						+ "</tr><br/><br/>";
				cont++;
	  }
			//lista+="["+c+"[]]";
			lista+="</table>";
			//response.setContentType("text/plain");
			//response.getWriter().write(lista);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	/////////////////////////////////////////////////
	proce.setCall("{CALL ingresosDiarios()}");
	proce.conexion(1);
	
	rs = proce.cierreSelect();
	
	try {
	//String lista="<select class='form-control asisListaEstu' id='asisListaEstu' multiple='8'>";
		lista+="<h3>ingreso diarios</h3>";
	lista+="<table class='table table-bordered'>"
	+ "<tr><th>INGRESOS DIARIOS</th>"
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
	lista+="<tr class='"+colorr[color]+"'>"
	+ "<td>"+rs.getString("FECHE_ORDEN_SEVICIO")+"</td>"
	+ "<td>"+rs.getString("ingresosDiarios")+"</td>"
	+ "</tr><br/><br/>";
	cont++;
	}
	//lista+="["+c+"[]]";
	lista+="</table>";
	response.setContentType("text/plain");
	response.getWriter().write(lista);
	} catch (SQLException e) {
	// TODO Auto-generated catch block
	e.printStackTrace();
	}
			
		////fin de todo//////
		proce.cierreTotal();
	}
	

}
