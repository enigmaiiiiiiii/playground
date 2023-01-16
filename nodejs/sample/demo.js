const fx2 = () => console.trace();
const fx1 = () => fx2();
fx1();