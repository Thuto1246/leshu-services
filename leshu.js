function addToCart(productName) {
    alert(productName + ' has been added to your cart!');
}

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you for contacting us, ${name}! We will respond to your message soon.`);
