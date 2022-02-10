// TODO: Declare any global variables we need

const pennyImageHeads = 'penny-heads';
const pennyImageTails = 'penny-tails';
const messageHeads = 'You Flipped Heads!';
const messageTails = 'You Flipped Tails!';
const messageStart = 'Let\'s Get Rolling!';

const imageContainer = document.querySelector('#imageContainer');
const buttonsContainer = document.querySelector('#buttonsContainer');
const messageContainer = document.querySelector('#messageContainer');
const tdHeadsCount = document.querySelector('#heads');
const tdHeadsPercent = document.querySelector('#heads-percent');
const tdTailsCount = document.querySelector('#tails');
const tdTailsPercent = document.querySelector('#tails-percent');
const pennyImage = document.createElement('img');
pennyImage.setAttribute('id', 'penny-image');
imageContainer.append(pennyImage);
const buttonFlip = document.createElement('button');
buttonFlip.setAttribute('id', 'flip');
buttonFlip.textContent = 'Flip The Penny!';
buttonsContainer.append(buttonFlip);
const buttonClear = document.createElement('button');
buttonClear.setAttribute('id', 'clear');
buttonClear.textContent = 'Clear Scoreboard';
buttonsContainer.append(buttonClear);
const h3message = document.createElement('h3');
h3message.setAttribute('id', 'message');
messageContainer.append(h3message);

let headsCount = 0;
let tailsCount = 0;

document.addEventListener('DOMContentLoaded', function () {
   // This is just a sanity check to make sure your JavaScript script is getting loaded
   // You can remove it once you see it in your browser console in the developer tools
   console.log('Hi')

   updatePennyImage(pennyImageHeads);
   updateMessage(messageStart);
   buttonFlip.addEventListener('click', function(){
      let random = Math.random();
      if(random >= 0.5)
      {
         headsCount++;
         updatePennyImage(pennyImageHeads);
         updateMessage(messageHeads);
         updateTotals();
      }
      else
      {
         tailsCount++;
         updatePennyImage(pennyImageTails);
         updateMessage(messageTails);
         updateTotals();
      }
   });

   buttonClear.addEventListener('click', function(){
      headsCount = tailsCount = 0;
      updateTotals();
      updateMessage(messageStart);
     });
})

function updatePennyImage(pennyImageId) {
   pennyImage.setAttribute('src', `assets/images/${pennyImageId}.jpg`);
}

function updateMessage(message) {
   h3message.textContent = message;
}

function updateTotals() {
   let totalCount = headsCount + tailsCount
   tdHeadsCount.textContent = headsCount;
   tdHeadsPercent.textContent = getPercentage(headsCount, totalCount);
   tdTailsCount.textContent = tailsCount;
   tdTailsPercent.textContent = getPercentage(tailsCount, totalCount);
}

function getPercentage(count, totalCount){
   if (totalCount > 0) {
      return `${Math.round(count/totalCount*100)}%`
   }
   return '0%';
}