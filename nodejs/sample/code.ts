
import * as validator from "./NewToAdd";


let result: boolean = myValidator.isAcceptable("h12345");

class otherValidator implements validator.st.StringValidator {
    isAcceptable(s: string): boolean {
        return true;
    };
}

console.log(result);