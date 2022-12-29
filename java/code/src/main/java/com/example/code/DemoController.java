package com.example.code;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping("/jwt")
public class DemoController {

    @Value("${jwt.secret}")
    private String secret;

    // api to generate jwt token
    @GetMapping("/hello")
    public String generateJwt() {
        // generate jwt token
        return Jwts.builder()
                .setSubject("user")
                .claim("roles", "user")
                .claim("name", "enigma")
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }
}
