const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("Reset");

    // Change Color
    changeBtn.addEventListener("click", () => {

      const blockId = document.getElementById("block_id").value;
      const color = document.getElementById("colour_id").value;

      // Reset all grid colors
      const allBoxes = document.querySelectorAll(".grid-item");

      allBoxes.forEach((box) => {
        box.style.backgroundColor = "transparent";
      });

      // Change selected block color
      const selectedBox = document.getElementById(blockId);

      if(selectedBox){
        selectedBox.style.backgroundColor = color;
      }
    });

    // Reset Button
    resetBtn.addEventListener("click", () => {

      const allBoxes = document.querySelectorAll(".grid-item");

      allBoxes.forEach((box) => {
        box.style.backgroundColor = "transparent";
      });
    });