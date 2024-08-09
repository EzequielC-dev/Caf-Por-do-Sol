if(window.innerWidth > 1050) {
    function navMenu() {
        const accordList = document.querySelector(".cabecalho-navegacao");
        const burgerCheckbox = document.getElementById("burger-checkbox");
    
        function activeAccordion() {
            if (burgerCheckbox.checked) {
                accordList.classList.add("ativo");
            } else {
                accordList.classList.remove("ativo");
            }
        }
    
        burgerCheckbox.addEventListener("change", activeAccordion);
    }
    
    navMenu();    
}