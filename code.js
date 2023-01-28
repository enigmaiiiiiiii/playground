console.log("branch code");

function fx() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("branch code");
    }, 2000);
  });
}
