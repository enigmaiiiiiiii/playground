async function fx() {

  const { data } = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: 1 });
    }, 1000);
  });
  console.log(data);
  console.log("end");
  return data;

}

fx();
