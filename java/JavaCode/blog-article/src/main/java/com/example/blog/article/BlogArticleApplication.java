package com.example.blog.article;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BlogArticleApplication {

    public BlogArticleApplication () {
        System.out.println("--- blog-article: 构造函数 ---");
    }

	public static void main(String[] args) {
		SpringApplication.run(BlogArticleApplication.class, args);
	}
}
