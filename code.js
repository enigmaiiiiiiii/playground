
const GeneratorFunction = function* () { }.constructor;

async function fx() {
  const gen = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("gen");
    }, 1000);
    resolve("promise");
  });
  return gen;
}

console.log(fx());
