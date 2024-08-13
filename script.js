const actionLink = document.querySelectorAll(".link-card .action");

actionLink.forEach((action) => {
    action.addEventListener("click",(e) => {
        e.preventDefault();
        navigator.clipboard.writeText(action.parentElement.getAttribute("href"));
        document.getElementById("toast").innerHTML = `
        <div class="toast-container">
            <p>🐱‍👤 Link copied!</p>
        </div>
        `;

        setTimeout(() => {
            document.querySelector("#toast .toast-container").classList.add("toast-gone")
        }, 300);

        setTimeout(() => {
            document.querySelector("#toast .toast-container").remove();
        }, 2000);
    });
});

/**
 * Untuk ganti icon hoover
 */

document.querySelectorAll(".sosmed i").forEach((sosmed) =>{
    sosmed.addEventListener("mouseenter",()=>{
        sosmed.classList.remove("ph");
        sosmed.classList.add("ph-fill");
    });

    sosmed.addEventListener("mouseleave",()=>{
        sosmed.classList.remove("ph-fill");
        sosmed.classList.add('ph');
    })
});
