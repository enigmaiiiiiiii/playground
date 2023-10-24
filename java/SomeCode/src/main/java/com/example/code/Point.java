package com.example.code;

import com.google.gson.annotations.SerializedName;

public class Point {

    @SerializedName("scaleX")
    private double x;

    @SerializedName("scaleY")
    private double y;

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }
}
