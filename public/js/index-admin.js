const theme=document.querySelector(".mode")
const sidebar=document.querySelector('.sideitem')

theme.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');
     theme.querySelector('span:nth-child(1)').classList.toggle('active');
     theme.querySelector('span:nth-child(2)').classList.toggle('active');
})
const data={

}
const logout=()=>{
    console.log("logout")
    document.cookie = "adminToken" + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = "http://localhost:1111/login";

}