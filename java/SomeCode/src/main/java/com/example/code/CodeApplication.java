package com.example.code;

import static org.junit.Assert.assertEquals;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.net.URL;
import java.net.URLClassLoader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;
import java.util.function.BiFunction;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.stream.JsonWriter;

import javassist.CannotCompileException;
import javassist.ClassPool;
import javassist.bytecode.AccessFlag; import javassist.bytecode.ClassFile;
import javassist.bytecode.DuplicateMemberException;
import javassist.bytecode.FieldInfo;

public class CodeApplication {

    public static void main(String[] args) {
        CodeApplication app = new CodeApplication();
        app.runtimeLoad();
    }


    public void runtimeLoad() {
        try {
            URL modurl = new URL("jar:file:/D:/mods/code-maven-plugin-0.0.1-SNAPSHOT.jar!/");
            ClassLoader loader = URLClassLoader.newInstance(new URL[]{ modurl }, getClass().getClassLoader());
            Class<?> util = loader.loadClass("com.example.code.Util");
            // Class<?> util = Class.forName("com.example.code.Util", true, loader);
            System.out.println(util);
            Method[] m = util.getDeclaredMethods();
            for (Method method : m) {
                System.out.println(method.getName());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void gsonAnnotation() {
        Writer fw;
        try {
            fw = new FileWriter(new File("code.json"));
            Gson gson = new GsonBuilder().create();
            Point p = new Point(1.0, 2.0);
            gson.toJson(p, fw);
            fw.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public static void writer() {
        try {
            FileWriter fw = new FileWriter(new File("code.json"));
            fw.write("abc");
            fw.append("abc");
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
        }
    }

    public static void jsonConvert() {
        Gson gson = new Gson();
        try {
            Point p = gson.fromJson(new FileReader("code.json"), Point.class);
            System.out.println(p);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void addField() {

        try (
                BufferedInputStream fin = new BufferedInputStream(
                        new FileInputStream("target/classes/com/example/code/Geek.class"));) {
            ClassFile cf = new ClassFile(new DataInputStream(fin));
            FieldInfo f = new FieldInfo(cf.getConstPool(), "space", "I");
            f.setAccessFlags(AccessFlag.PUBLIC);
            cf.addField(f);
            cf.write(new DataOutputStream(new FileOutputStream("target/classes/com/example/code/Geek.class")));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void loaderlist() {

        System.out.println("Classloader of this class:"
                + CodeApplication.class.getClassLoader());

        System.out.println("Classloader of ArrayList:"
                + ArrayList.class.getClassLoader());
    }

    // class loader url
    public static String getClassloader() {
        return CodeApplication.class.getClassLoader().getResource(".").getPath();
    }

}
