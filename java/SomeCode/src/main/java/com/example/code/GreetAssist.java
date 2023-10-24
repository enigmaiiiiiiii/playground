package com.example.code;

import java.util.Date;

public class GreetAssist {

    private int x;
    private int y;
    public Integer z;
    public String name;
    public Date date;

    public Geek locate;

    public void move(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public class nested {

        private int x;
        private int y;

        public void move(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }
}
