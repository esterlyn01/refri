/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package datos.conexion;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import javax.swing.text.StyledEditorKit.BoldAction;


/**
 *
 * @author xtremecomunicaciones
 */
public class Procedimiento {
	static Connection cn = null;
    public static CallableStatement cl = null;
    
	
	
	//Nombre del procedimiento almacenado y como espera tres parametros
    //le ponemos ? por cada espacio en el procedimiento
	private static String call="{CALL guardarRol(?)}";
    
    
	public static String getCall() {
		return call;
	}

	public static void setCall(String call) {
		Procedimiento.call = call;
	}
	
	public CallableStatement getCl() {
		return cl;
	}

	public void setCl(CallableStatement cl) {
		this.cl= cl;
	}
	
	
	//Como el codigo se autogenera y es del tipo OUT en el procedimiento
    //almacenado le decimos que es OUT y el del tipo Integer en Java
   // cl.registerOutParameter(1, Types.INTEGER);
    //cl.setString(1, varregistro.getRol());
    //El siguiente parametro del procedimiento almacenado es el nombre
   // cl.setString(2, varregistro.getnombre());
    //Y por ultimo la Edad
   // cl.setDouble(3, varregistro.getedad());
    //Ejecutamos la sentencia y si nos devuelve el valor de 1 es porque
    //registro de forma correcta los datos
	
	public void conexion(int val){
		try {
			System.out.println("CONEXION");
		//`guardarRol`(in rol varchar(45))
        //Obtenemos la conexion
        cn = Conexion.getConexion();
        //Decimos que vamos a crear una transaccion
       if(val==0){
        cn.setAutoCommit(false);}
        //Preparamos la sentecia
        cl = cn.prepareCall(call);
        
		 } catch (SQLException e) {
	            e.printStackTrace();
	            Conexion.deshacerCambios(cn);
	            Conexion.cerrarCall(cl);
	            Conexion.cerrarConexion(cn);
	        } catch (Exception e) {
	            e.printStackTrace();
	            Conexion.deshacerCambios(cn);
	            Conexion.cerrarCall(cl);
	            Conexion.cerrarConexion(cn);
	        }	
	}

	
	
	
	public static synchronized boolean cierreInsert() {
		boolean rpta = false;
		try {
    	  rpta = cl.executeUpdate() == 1 ? true : false;
          if (rpta) {
              //Confirmamos la transaccion
              cn.commit();
              //respuesta
           //   coco=cl.getInt(1);
          } else {
              //Negamos la transaccion
              Conexion.deshacerCambios(cn);
          }
          Conexion.cerrarCall(cl);
          Conexion.cerrarConexion(cn);  
          
            
        } catch (SQLException e) {
            e.printStackTrace();
            Conexion.deshacerCambios(cn);
            Conexion.cerrarCall(cl);
            Conexion.cerrarConexion(cn);
        } catch (Exception e) {
            e.printStackTrace();
            Conexion.deshacerCambios(cn);
            Conexion.cerrarCall(cl);
            Conexion.cerrarConexion(cn);
        }
        return rpta;
    
    };
    
    
	public ResultSet cierreSelect(){
		ResultSet rs = null;
		System.out.println("CIERRESELECT");
		try {
			System.out.println(cl);	
      //La sentencia lo almacenamos en un resulset
        rs = cl.executeQuery();
        //Consultamos si hay datos para recorrerlo
        //e insertarlo en nuestro array
//        while (rs.next()) {
//            //Obtenemos los valores de la consulta y creamos
//            //nuestro objeto producto
//            s.setIdsede(rs.getInt("Idsede"));
//            s.setDane(rs.getInt("Dane"));
//            s.setSede(rs.getString("Sede"));
//            s.setDireccion(rs.getString("Direccion"));
//            s.setEmail(rs.getString("Email"));
//            s.setTelefono(rs.getString("Telefono"));
//        }
        
        
		 } catch (SQLException e) {
	            e.printStackTrace();
	            Conexion.deshacerCambios(cn);
	            Conexion.cerrarCall(cl);
	            Conexion.cerrarConexion(cn);
	        } catch (Exception e) {
	            e.printStackTrace();
	            Conexion.deshacerCambios(cn);
	            Conexion.cerrarCall(cl);
	            Conexion.cerrarConexion(cn);
	        }	
		
		return rs;
	}
	
	public void cierreTotal(){
		Conexion.cerrarCall(cl);
	    Conexion.cerrarConexion(cn);
	}
	
}
