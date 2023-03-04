// Definir una lista de mensajes positivos
var messages = [
  "Eres increíble",
  "Eres una persona única y especial",
  "Tienes mucho talento",
  "Eres una persona valiente y fuerte",
  "Eres capaz de lograr todo lo que te propongas",
  "Eres una persona amable y generosa",
  "Eres hermoso/a por dentro y por fuera",
  "Eres inteligente y perspicaz",
  "Eres una persona que inspira a los demás"
];

// Obtener un mensaje aleatorio de la lista
function getRandomMessage() {
  var index = Math.floor(Math.random() * messages.length);
  return messages[index];
}

// Mostrar un mensaje aleatorio en la página
function getMessage() {
  var messageElement = document.getElementById("message");
  messageElement.innerHTML = getRandomMessage();
}
