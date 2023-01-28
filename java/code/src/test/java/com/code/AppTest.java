package com.code;

import org.junit.Test;

import com.example.code.CodeApplication;
import com.example.code.GreetAssist;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javassist.CannotCompileException;
import javassist.ClassPool;
import javassist.CtClass;
import javassist.NotFoundException;
import javassist.bytecode.AccessFlag;
import javassist.bytecode.BadBytecode;
import javassist.bytecode.ClassFile;
import javassist.bytecode.CodeAttribute;
import javassist.bytecode.CodeIterator;
import javassist.bytecode.DuplicateMemberException;
import javassist.bytecode.FieldInfo;
import javassist.bytecode.MethodInfo;
import javassist.bytecode.Mnemonic;

public class AppTest {

    @Test
    public void test() {

        ClassFile cf = new ClassFile(false, "com.example.code.GreetAssist", null);
        cf.setInterfaces(new String[] { "java.lang.Cloneable" });
        FieldInfo f = new FieldInfo(cf.getConstPool(), "id", "I");
        f.setAccessFlags(AccessFlag.PUBLIC);
        try {
            cf.addField(f);
        } catch (DuplicateMemberException e) {
            e.printStackTrace();
        }

        ClassPool classPool = ClassPool.getDefault();
        Field[] fields;
        try {
            fields = classPool.makeClass(cf).toClass().getFields();
            assertEquals(fields[0].getName(), "id");
        } catch (SecurityException e) {
            e.printStackTrace();
        } catch (CannotCompileException e) {
            e.printStackTrace();
        } catch (RuntimeException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void greetTest() throws NotFoundException, BadBytecode {
        System.out.println("");
    }

    @Test
    public void addField() {

        try {
            ClassFile cf = ClassPool.getDefault().get("com.example.code.GreetAssist").getClassFile();
            FieldInfo f = new FieldInfo(cf.getConstPool(), "id", "I");
            f.setAccessFlags(AccessFlag.PUBLIC);
            cf.addField(f);

            ClassPool classPool = ClassPool.getDefault();

            // CtClass c = classPool.makeClass(cf);
            // Class<?> cc = c.toClass();

            // Field[] fields = cc.getFields();
            Field[] fields = classPool.makeClass(cf).toClass().getFields();
            List<String> fieldsList = Stream.of(fields)
                    .map(Field::getName)
                    .collect(Collectors.toList());

            assertTrue(fieldsList.contains("id"));
        } catch (NotFoundException e) {
            e.printStackTrace();
        } catch (DuplicateMemberException e) {
            e.printStackTrace();
        } catch (SecurityException e) {
            e.printStackTrace();
        } catch (CannotCompileException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testStream() {
        String res = CodeApplication.getClassloader();
        System.out.println(res);
    }

    @Test
    public void reflectDemo() {
        CodeApplication.addField();
    }

}
