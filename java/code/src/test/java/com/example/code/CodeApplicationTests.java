package com.example.code;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@SpringBootTest
class CodeApplicationTests {

	@Value("${jwt.secret}")
	private String secret;

	@Test
	void contextLoads() {
	}

	@Test
	void generateJwt() {
		// generate jwt token
		String jwt = Jwts.builder()
				.setSubject("user")
				.claim("roles", "user")
				.signWith(SignatureAlgorithm.HS512, secret)
				.compact();
		System.out.println(jwt);
	}

}
