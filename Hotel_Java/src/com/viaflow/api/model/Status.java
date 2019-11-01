package com.viaflow.api.model;

public class Status {
	
	public static final String NAOENCONTRADO = "N�o encontrado";
	public static final String DELETADO = "Deletado";
	
	private boolean status;
	private String message;
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Status(String message) {
		super();
		this.status = false;
		this.message = message;
	}
	public Status(boolean status, String message) {
		super();
		this.status = status;
		this.message = message;
	}
	
	public Status() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
