package com.example.code;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class Sample {

    @Value("${jwt.secret}")
    private String secret;

    // api to generate jwt token
    @GetMapping("/hello-jwt")
    public String generateJwt() {
        // generate jwt token
        return Jwts.builder()
                .setSubject("user")
                .claim("breaking", "bad")
                .claim("name", "goose")
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }
}
