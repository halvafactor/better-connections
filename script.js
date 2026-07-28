//works on flexbox (middle) set of 16 tiles 

const tiles = document.querySelectorAll(".row > div");

tiles.forEach((tile) => {
    tile.addEventListener("click", function(){
        tile.style.backgroundColor = "yellow";
    })
})