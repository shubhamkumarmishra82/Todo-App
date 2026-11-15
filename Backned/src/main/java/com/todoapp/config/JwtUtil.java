package com.todoapp.config;

	import io.jsonwebtoken.*;
	import io.jsonwebtoken.security.Keys;

	import java.security.Key;
	import java.util.Date;

	public class JwtUtil {

	    private static final String SECRET = "mysecretkeymysecretkeymysecretkey12345";

	    private static final long EXPIRATION = 1000 * 60 * 60 * 10;

	    private static final Key key = Keys.hmacShaKeyFor(SECRET.getBytes());

	    public static String generateToken(String email) {
	        return Jwts.builder()
	                .setSubject(email)
	                .setIssuedAt(new Date())
	                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION))
	                .signWith(key, SignatureAlgorithm.HS256)
	                .compact();
	    }

	    public static String extractEmail(String token) {
	        return Jwts.parserBuilder()
	                .setSigningKey(key)
	                .build()
	                .parseClaimsJws(token)
	                .getBody()
	                .getSubject();
	    }

	    public static boolean validate(String token) {
	        try {
	            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
	            return true;
	        } catch (Exception e) {
	            return false;
	        }
	    }
	}


