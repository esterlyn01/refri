package datos.usuarios;


public class Persona {
	protected int idd;
	protected double documento;
	protected String nombres;
	protected String apellidos;
	protected String telefono;
	protected String email;
	private String password;
	private int rol;
	
	
	public Persona(){}
	
	public int getIdd() {
		return idd;
	}


	public void setIdd(int idd) {
		this.idd = idd;
	}



	public double getDocumento() {
		return documento;
	}


	public void setDocumento(double documento) {
		this.documento = documento;
	}


	public String getNombres() {
		return nombres;
	}


	public void setNombres(String nombres) {
		this.nombres = nombres;
	}


	public String getApellidos() {
		return apellidos;
	}


	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}


	public String getTelefono() {
		return telefono;
	}


	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}

	public int getRol() {
		return rol;
	}

	public void setRol(int rol) {
		this.rol = rol;
	}

	
}
