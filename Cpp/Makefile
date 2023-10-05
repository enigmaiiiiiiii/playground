INSTALL_PATH            := $(HOME)/Code/Tutorial/hello-pkg-config
LIBRARY_FOO_NAME        := foo
LIBRARY_FOO_FILE        := lib$(LIBRARY_FOO_NAME).so
LIBRARY_FOO_HEADER_FILE := $(LIBRARY_FOO_NAME).h
LIBRARY_FOO_PC_FILE     := $(LIBRARY_FOO_NAME).pc
SOURCE_FILE             := main.c
EXECUTABLE_TARGET       := hello

$(EXECUTABLE_TARGET): install
	gcc -o $(EXECUTABLE_TARGET) $(SOURCE_FILE) $(shell pkg-config --cflags --libs $(LIBRARY_FOO_NAME))

install: $(LIBRARY_FOO_FILE) $(LIBRARY_FOO_HEADER_FILE) $(LIBRARY_FOO_PC_FILE)
	cp $(LIBRARY_FOO_FILE) $(INSTALL_PATH)/lib/$(LIBRARY_FOO_FILE)
	cp $(LIBRARY_FOO_PC_FILE) $(INSTALL_PATH)/lib/pkgconfig/$(LIBRARY_FOO_PC_FILE)
	cp $(LIBRARY_FOO_HEADER_FILE) $(INSTALL_PATH)/include/$(LIBRARY_FOO_HEADER_FILE)

$(LIBRARY_FOO_FILE): add.o sub.o
	gcc -shared -o $(LIBRARY_FOO_FILE) $^

%.o: %.c
	gcc -c -fPIC $^ -o $@

.PHONY: install uninstall test clean

uninstall:
	rm -f $(INSTALL_PATH)/lib/$(LIBRARY_FOO_FILE)
	rm -f $(INSTALL_PATH)/lib/pkgconfig/$(LIBRARY_FOO_PC_FILE)
	rm -f $(INSTALL_PATH)/include/$(LIBRARY_FOO_HEADER_FILE)

test:

clean:
	rm -f $(EXECUTABLE_TARGET)
	rm -f $(LIBRARY_FOO_FILE)
	rm -f *.o
