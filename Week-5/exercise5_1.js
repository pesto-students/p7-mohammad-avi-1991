function doTask1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Task 1 completed"), 1000;
      });
    });
  }
  
  function doTask2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Task 2 completed"), 1000;
      });
    });
  }
  
  function doTask3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Task 3 completed"), 1000;
      });
    });
  }
  
  async function* taskGenerator() {
    yield await doTask1();
    yield await doTask2();
    yield await doTask3();
  }
  
  const doTask = taskGenerator();
  
  doTask.next().then((response) => console.log(response.value));
  doTask.next().then((response) => console.log(response.value));
  doTask.next().then((response) => console.log(response.value));
