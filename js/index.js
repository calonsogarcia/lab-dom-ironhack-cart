// ITERATION 1

function updateSubtotal(product) {
  
  
  const thePriceElement = product.querySelector('.price span')
  const theQuantityElement = product.querySelector('.quantity input')
  let theSubtotalElement = product.querySelector('.subtotal span')
  
  const price = thePriceElement.innerText
  const quantity = theQuantityElement.valueAsNumber
  const subtotal =  price * quantity

  //console.dir(theSubtotalElement)

  theSubtotalElement.innerText = subtotal;


  console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  //create an all product array
  //invoque function every product
const  allProducts =  document.querySelectorAll('.product')
 for (let product of allProducts){
  updateSubtotal(product)
}

  // ITERATION 3
  //... your code goes here

  //point to the Element
  //point to the text
  // calculate total with all subtotals
const totalPriceElement = document.querySelector('#total-value span')
let totalPrice = totalPriceElement.innerText

const allSubtotals = product.querySelectorAll('.subtotal')
for (let i = 0; i < allSubtotals.length; i++){
  allSubtotals[i].onclick += totalPrice;
}

  console.log(totalPrice)

}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
