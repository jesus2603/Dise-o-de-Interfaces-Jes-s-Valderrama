let carrito = [];

function actualizarCarrito() {
    const carritoItems = document.getElementById("carrito-items");
    const totalPrice = document.getElementById("total-price");

    carritoItems.innerHTML = "";
    let total = 0;

    carrito.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("mb-3");
        div.innerHTML = `${item.name} - ${item.price}€`;
        carritoItems.appendChild(div);
        total += item.price;
    });

    totalPrice.innerText = total;
}

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (e) => {
        const name = e.target.dataset.name;
        const price = parseInt(e.target.dataset.price);

        carrito.push({ name, price });
        actualizarCarrito();
    });
});

document.getElementById("finalizar-compra").addEventListener("click", () => {
    document.getElementById("formulario-compra").style.display = "block";
});
