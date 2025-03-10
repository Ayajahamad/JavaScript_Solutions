async function sequentialTasks() {
    let result1 = await new Promise((resolve) => setTimeout(() => resolve("Task 1"), 1000));
    console.log(result1);
  
    let result2 = await new Promise((resolve) => setTimeout(() => resolve("Task 2"), 500));
    console.log(result2);
  }
  
  sequentialTasks();
  