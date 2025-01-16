package com.todo.todo.dto;

public class JwtAuthResponse {

	private String accessToken;
	private String tokenTpe= "Bearer ";
	
	public JwtAuthResponse() {
		super();
	}
	public JwtAuthResponse(String accessToken, String tokenTpe) {
		super();
		this.accessToken = accessToken;
		this.tokenTpe = tokenTpe;
	}
	public String getAccessToken() {
		return accessToken;
	}
	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}
	public String getTokenTpe() {
		return tokenTpe;
	}
	public void setTokenTpe(String tokenTpe) {
		this.tokenTpe = tokenTpe;
	}
	
	
	
}
