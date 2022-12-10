/////////////
// objets//
////////////

// object (1) restart button
var restart = document.querySelector('#b');
// var restart = $('#b')


// object (2) table squares
var squares = document.querySelectorAll('td');




////////////////
// functions////
////////////////
// function cleaner
function cleaner (){
  for (var i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
  }
}


// switcher function
function switcher(){
    if(this.textContent === ''){
        this.textContent = 'X';
        // console.log(marker)
      }else if (this.textContent === 'X') {
        this.textContent = 'O';
      }else {
        this.textContent = '';
      }
};














////////////////////
// EVENT LISTNERS///
////////////////////

// event listner (1) restart
restart.addEventListener('click',cleaner)
// restart.click(cleaner)


// event listner(2) square click
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', switcher);
    // squares[i].click(switcher);
}
