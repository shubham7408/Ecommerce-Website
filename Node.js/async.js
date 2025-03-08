//Async Await
async function division1 (num1,num2) {
    try {
      if(num2 === 0){
        throw new Error("Can't Divide by Zero");
      } else {
        return num1/num2;
      }
    } catch (error) {
      console.error(error);
      console.log({success:false,message:error});
    }
  }

async function mainFn() {
    let result = await division1(10,0);
    let result1 = await division1(10,2);
    console.log(result,result1);
}

mainFn();
