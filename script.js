// Sélection des boutons "-" et "+"
const minusButtons = document.querySelectorAll(".minus-btn");
const plusButtons = document.querySelectorAll(".plus-btn");

// Ajout des écouteurs d'événements "click" sur les boutons "-" et "+"
minusButtons.forEach(button => {
  button.addEventListener("click", event => {
    const inputField = event.target.nextElementSibling;
    let quantity = parseInt(inputField.value);
    if (quantity > 1) {
      quantity--;
      inputField.value = quantity;
      updateTotalPrice();
    }
  });
});

plusButtons.forEach(button => {
  button.addEventListener("click", event => {
    const inputField = event.target.previousElementSibling;
    let quantity = parseInt(inputField.value);
    quantity++;
    inputField.value = quantity;
    updateTotalPrice();
  });
});

// Sélection du bouton de suppression
const deleteButtons = document.querySelectorAll(".remove-btn");

// Ajout d'un écouteur d'événement "click" sur chaque bouton de suppression
deleteButtons.forEach(button => {
  button.addEventListener("click", event => {
    const item = event.target.parentNode.parentNode;
    item.parentNode.removeChild(item);
    updateTotalPrice();
  });
});

// Sélection de tous les champs de quantité
const quantityInputs = document.querySelectorAll(".quantity-input");

// Ajout d'un écouteur d'événement "input" sur chaque champ de quantité
quantityInputs.forEach(input => {
  input.addEventListener("input", event => {
    let quantity = parseInt(event.target.value);
    if (isNaN(quantity) || quantity < 1) {
      quantity = 1;
    }
    event.target.value = quantity;
    updateTotalPrice();
  });
});
// Sélection de tous les boutons "J'aime"
const likeButtons = document.querySelectorAll(".heart-btn");

// Ajout d'un écouteur d'événement "click" sur chaque bouton "J'aime"
likeButtons.forEach(button => {
  button.addEventListener("click", event => {
    // Inversion de la couleur du bouton "J'aime"
    if (button.classList.contains("liked")) {
      button.classList.remove("liked");
    } else {
      button.classList.add("liked");
    }
  });
});


// Fonction pour mettre à jour le prix total
function updateTotalPrice() {
  let totalPrice = 0;
  const items = document.querySelectorAll(".item");

  items.forEach(item => {
    const price = parseFloat(item.querySelector(".price").textContent.replace("F", ""));
    const quantity = parseInt(item.querySelector(".quantity-input").value);
    totalPrice += price * quantity;
  });

  document.querySelector(".total-price").textContent = "F" + totalPrice.toFixed(2);
}
