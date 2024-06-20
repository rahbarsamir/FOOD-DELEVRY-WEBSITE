const theme=document.querySelector(".mode")
const sidebar=document.querySelector('.sideitem')

theme.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');
     theme.querySelector('span:nth-child(1)').classList.toggle('active');
     theme.querySelector('span:nth-child(2)').classList.toggle('active');
})

var myarray=[];

function checkCookieExists(cookieName) {
  // Get the cookie string
  var cookies = document.cookie;

  // Split the cookie string into individual cookies
  var cookieArray = cookies.split(';');

  // Iterate over the cookies to find the one you're looking for
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];

    // Remove leading whitespaces
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }

    // Check if the cookie name matches
    if (cookie.indexOf(cookieName + '=') === 0) {
      // Cookie exists
      console.log("nahi")
      return true;
    }
  }

  // Cookie doesn't exist
  return false;
}




const addbtn=(ass)=>{
    var add= document.getElementById(ass);
    var addd=add.innerHTML;
    var aa=checkCookieExists('jwt')
    console.log(`a is ${aa}`)
    if(aa){
    if(addd==="add"){
        add.innerHTML= "added";
    add.classList.remove("addbttn");
    add.classList.add("added");
    const par=add.parentElement.parentElement.parentElement;
    // console.log(par.firstElementChild.firstElementChild.innerHTML);
    var itemName=par.firstElementChild.firstElementChild.innerHTML;
    // var itemPrice=par.firstElementChild.lastElementChild.lastElementChild.innerHTML;


    console.log(itemName);
    console.log("ho raha")
    // console.log(itemPrice);
    // localStorage.setItem("itemName",itemName);
    // localStorage.setItem("itemPrice",itemPrice);
    // console.log(par.firstElementChild.lastElementChild.innerHTML);
    // var obj={name:itemName,price:itemPrice,id:ass};
    // myarray.push(obj);
    // localStorage.setItem("obj",JSON.stringify(myarray));

    


    const data = {
        name:itemName
      };
      
      fetch('/cakebake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        console.log('Data sent successfully');
      })
      .catch(error => {
        console.error('Error sending data:', error);
      window.location.href = "http://localhost:1111/login";

      });
    }
  }
  else{
    alert("please login")
    window.location.href = "http://localhost:1111/login";

  }
}
