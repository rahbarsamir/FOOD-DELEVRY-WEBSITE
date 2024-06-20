const theme=document.querySelector(".mode")
const sidebar=document.querySelector('.sideitem')
const form=document.getElementById('addform')
const menu=document.getElementById('menu')
const section=document.getElementById('section')

theme.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');
     theme.querySelector('span:nth-child(1)').classList.toggle('active');
     theme.querySelector('span:nth-child(2)').classList.toggle('active');
})




function clearCookie(cookieName) {
    document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }

  
  const logout=()=>{
    console.log("hey")
    clearCookie("jwt")
    window.location.href = "http://localhost:1111/login";

  }