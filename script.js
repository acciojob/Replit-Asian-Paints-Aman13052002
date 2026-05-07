const changeBtn = document.getElementById("change_button");
    const resetBtn = document.getElementById("Reset");
    const gridItems = document.querySelectorAll("#grid-item");

    // Change Color
    changeBtn.addEventListener("click", () => {

      const blockId = document.getElementById("block_id").value;
      const color = document.getElementById("colour_id").value;

      // Reset all colors first
      gridItems.forEach((item) => {
        item.style.backgroundColor = "transparent";
      });

      // Change selected block color
      if(blockId >= 1 && blockId <= 9){
        gridItems[blockId - 1].style.backgroundColor = color;
      }
    });

    // Reset Button
    resetBtn.addEventListener("click", () => {
      gridItems.forEach((item) => {
        item.style.backgroundColor = "transparent";
      });
    });