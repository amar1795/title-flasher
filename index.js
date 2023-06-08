let title=document.title;

let flash = ()=>{
    setInterval(() => {
        document.title=document.title === 
        title ? "Big Billion days are here" : title;
        
    }, 1000);
}

window.addEventListener("load",flash);

