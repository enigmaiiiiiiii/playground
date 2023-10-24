package com.example.deployment;

import java.util.Collection;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TomcatController {

    @GetMapping("/hello")
    public Collection<String> sayHello() {
        return IntStream.range(0, 10)
                .mapToObj(i -> "Hello " + i)
                .collect(Collectors.toList());
    }

    @GetMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }
}
