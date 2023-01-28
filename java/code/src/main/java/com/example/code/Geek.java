package com.example.code;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.function.IntConsumer;

public class Geek {

    private int x;

    private int y;

    public int getX() {
        return this.x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public void move(int dx, int dy) {
        this.x += dx;
        this.y += dy;
    }

}