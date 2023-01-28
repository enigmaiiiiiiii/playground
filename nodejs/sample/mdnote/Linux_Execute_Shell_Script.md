# Execute Shell Script

- [Execute Shell Script](#execute-shell-script)
  - [conclusion](#conclusion)
  - [./script.sh](#scriptsh)
  - [bash script.sh](#bash-scriptsh)
  - [source script.sh](#source-scriptsh)
  - [. ./script.sh](#-scriptsh)

give a `script.sh` as example

```sh
var="hello script"
export var
```

## conclusion

- `./script.sh` and `bash script.sh` execute the script in a new shell, so the variable in the script is not exported as a shell variable
- `source script.sh` and `. ./script.sh` execute the script like type command in current shell, so the variable in the script is exported as a shell variable

## ./script.sh


```sh
./script.sh
```
- permission denied

give execute permission

```sh
chmod +x script.sh
```

after that `script.sh` can be executed

```sh
./script.sh
```

`echo $var` **show nothing**

**that is to say**

- variable in script is not exported as a shell variable
- ~~the script.sh is executed in a sub shell~~

## bash script.sh

```sh
bash script.sh
```

`echo $var` **show nothing**

also can execute the script, but not export the variable either

## source script.sh

```sh
source script.sh
```

`echo $var`

```
hello script
```

in this way, the variable is exported as shell variable

## . ./script.sh

```sh
. ./script.sh
```

`echo $var`

```
hello script
```

same as `source script.sh` the variable can be exported as shell variable
