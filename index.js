const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

const names = ["Ada", "Brendan", "Ali"]
const event = ["birthday"]
const message = []
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
}

function whileLoop(n) {
    while (n > 0) {
      console.log(--n);
    }
}