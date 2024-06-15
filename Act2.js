//Tendrán que consumir al menos 4 apis - hacer uso de get, post, delete y put,
//se tendrá que consumir por medio de https://jsonplaceholder.typicode.com

//GET CON ASYNC AWAIT
const getData = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(`GET response: ${JSON.stringify(data)}`);
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
    } finally {
      console.log('GET request finished.');
    }
  };
  
  getData();
  

// POST asycn await
const postData = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        body: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log(`POST response: ${JSON.stringify(data)}`);
    } catch (error) {
      console.error(`Error posting data: ${error}`);
    } finally {
      console.log('POST request finished.');
    }
  };
  
  postData();
  
// PUT con .then
fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "foo updated",
    body: "bar updated",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(`PUT response: ${JSON.stringify(json)}`))
  .catch((error) => console.error(`Error updating data: ${error}`))
  .finally(() => console.log('PUT request finished.'));


// DELETE CON .THEN
fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
  method: "DELETE",
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((json) => console.log(`DELETE response: ${JSON.stringify(json)}`))
  .catch((error) => console.error(`Error deleting data: ${error}`))
  .finally(() => console.log('DELETE request finished.'));


//simulacion de promesas 
const simulatePromise = (delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Promise resolved after ${delay} seconds`);
      }, delay * 1000);
    });
  };
  
  simulatePromise(3).then((message) => console.log(message));
  
//Diferencias entre try-catch y finally

const demoTryCatchFinally = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(`GET response: ${JSON.stringify(data)}`);
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  } finally {
    console.log('This block always executes, regardless of success or error.');
  }
};

demoTryCatchFinally();
