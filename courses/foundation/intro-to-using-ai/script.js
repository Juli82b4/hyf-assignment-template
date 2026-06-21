const btn = document.getElementById("colorBtn");

const colors = [
    "#FFD6E8",  
    "#D6F5FF",  
    "#E8FFD6",  
    "#FFF5CC",  
    "#E6D6FF",  
    "#FFE4D6"   
];

if (btn) {
    btn.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[randomIndex];
    });
}


