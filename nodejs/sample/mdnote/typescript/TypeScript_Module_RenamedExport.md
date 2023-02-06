# renamed export

## code

ZipCodeValidator.ts

- isAcceptable(s: string): 验证字符串是否符合要求(5位数字)

```ts
export const numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
export {ZipCodeValidator as mainValidator};
```

with this code: `export {ZipCodeValidator as mainValidator};`
main.ts中可以使用`mainValidator`来引用`ZipCodeValidator`

```ts
import {mainValidator} from './ZipCodeValidator';
import {ZipCodeValidator} from './ZipCodeValidator';
```