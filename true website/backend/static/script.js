const mainOptions = document.querySelectorAll(".nav-link");

const toggleActiveClass = (selectedOption) => {
    mainOptions.forEach(option => {
        if (option === selectedOption) {
            option.classList.add("active");
        } else {
            option.classList.remove("active");
        }
    });
};

document.addEventListener('click', (e) => {
    const targetEl = e.target;

    if (targetEl.classList.contains("nav-link")) {
        toggleActiveClass(targetEl);
    }
});

/* */
const selectElements = document.querySelectorAll(".filter");
const imageElements = document.querySelectorAll(".fightingStyleImage");

selectElements.forEach((selectElement, index) => {
    selectElement.addEventListener("change", function() {
        const selectedValue = selectElement.value;
        const imageElement = imageElements[index];

            // Blox Fruits
            if (selectedValue === "Dark Blade") {
                imageElement.src = "../static/img/Dark_Blade.png"; 
            }
            else if (selectedValue === "Dragon") {
                imageElement.src = "../static/img/DragonNew.png"; 
            }
            else if (selectedValue === "Dough") {
                imageElement.src = "../static/img/DoughNew.png"; 
            }
            else if (selectedValue === "Control") {
                imageElement.src = "../static/img/ControlNew.png"; 
            }
            else if (selectedValue === "Gravity") {
                imageElement.src = "../static/img/GravityNew.png"; 
            }
            else if (selectedValue === "Blizzard") {
                imageElement.src = "../static/img/BlizzardIcon.png"; 
            }
            else if (selectedValue === "Rumble") {
                imageElement.src = "../static/img/RumbleNew.png"; 
            }
            else if (selectedValue === "Buddha") {
                imageElement.src = "../static/img/BuddhaNew.png"; 
            }
            else if (selectedValue === "Dark") {
                imageElement.src = "../static/img/DarkNew.png"; 
            }
            else if (selectedValue === "Diamond") {
                imageElement.src = "../static/img/DiamondNew.png"; 
            }
            else if (selectedValue === "Flame") {
                imageElement.src = "../static/img/FlameNew.png"; 
            }
            else if (selectedValue === "Ice") {
                imageElement.src = "../static/img/IceNew.png"; 
            }
