async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
    console.log({ success: false, message: error.message });
  }
}

getData();

async function postData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    });
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    console.log("Response from Server", data);
  } catch (error) {
    console.error(error);
    console.log({ success: false, message: error.message });
  }
}

postData();

async function putData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 1,
          title: "foo",
          body: "bar",
          userId: 1,
        }),
      }
    );
    if (!response.ok) {
      console.log("Data updated unsuccessfully");
    }
    const data = await response.json();
    console.log("Data updated successfully", data);
  } catch (error) {
    console.log(error);
    console.log({ success: false, message: error.message });
  }
}

putData();

const deleteData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      console.log("Data deleted unsuccessfully");
    }
    const data = await response.json();
    console.log("Data deleted successfully", data);
  } catch (error) {
    console.log(error);
    console.log({ success: false, message: error.message });
  }
};

deleteData();


async function getProducts () {
  try {
    const response  = await fetch("https://fakestoreapi.com/products/20",{
      method:"GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    console.log("The Products Data",data);
  } catch (error) {
    console.error(error);
    console.log({ success: false, message: error.message });
  }
}

getProducts();

//AJAX 

function makeXHRRequest(url) {
  return new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest ();

    xhr.open("GET",url,true);

    xhr.onload = function() {
      if(xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.responseText));
      }
      else{
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      }
    }
  });
}


export async function greet1 () {
  console.log("Hello");
}