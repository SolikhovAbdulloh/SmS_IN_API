let API = "http://localhost:3000/Users";
fetch(API)
.then(data =>  data.json())
.then(data => addUI(data))

// .catch(Error)
//     console.log('Xatolik bor',Error);
    

    

function addUI(data) {
  data.forEach((e)=>{
    console.log(e);
    
  })
}

const kirish1 = document.getElementById("kirish1");
const kirish2 = document.getElementById("kirish2");
const send1 = document.getElementById("send1");
const send2 = document.getElementById("send2");
const chatOynasi1 = document.getElementById("chat-oynasi1");
const chatOynasi2 = document.getElementById("chat-oynasi2");
