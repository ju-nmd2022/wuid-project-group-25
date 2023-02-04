
//  the folowing lines were adapted from https://www.youtube.com/watch?v=mrVkYzMX%20s1s 

function changeColor(obj) {

    if (obj.style.color == "lightblue") {
        obj.style.color = "black";
    } else {
        obj.style.color = "lightblue";
    }
}

function showText() {
    let element = document.getElementById("FAQ");

    if (element.style.display == "none") {
        element.style.display = "block";

    } else {
        element.style.display = "none";
    }
}
   




























// // if hover -> display txt
// function displayTxt(evt) {
//     evt.currentTarget.parentNode.querySelector( '.innerText' ).classList.remove( 'hide' );
// }
// // if leave -> hide txt
// function removeTxt(evt) {
//     evt.currentTarget.querySelector( '.innerText' ).classList.add( 'hide' );
// }

// /* mouseover and mouseout events to `.box` element */
// let $box = document.querySelector( '.box' );
// $box.addEventListener( 'mouseover', displayTxt );
// $box.addEventListener( 'mouseout', removeTxt );

// // if hover -> display txt
// function displayTxt(evt) {
//     evt.currentTarget.parentNode.querySelector( '.insideText' ).classList.remove( 'hidden' );
// }
// // if leave -> hide txt
// function removeTxt(evt) {
//     evt.currentTarget.querySelector( '.insideText' ).classList.add( 'hidden' );
// }

// /* mouseover and mouseout events to `.box2` element */
// let $box2 = document.querySelector( '.box2' );
// $box2.addEventListener( 'mouseover', displayTxt );
// $box2.addEventListener( 'mouseout', removeTxt );


// // if hover -> display txt
// function displayTxt(evt) {
//     evt.currentTarget.parentNode.querySelector( '.insideText3' ).classList.remove( 'hidden3' );
// }
// // if leave -> hide txt
// function removeTxt(evt) {
//     evt.currentTarget.querySelector( '.insideText3' ).classList.add( 'hidden3' );
// }

// /* mouseover and mouseout events to `.box3` element */
// let $box3 = document.querySelector( '.box3' );
// $box3.addEventListener( 'mouseover', displayTxt );
// $box3.addEventListener( 'mouseout', removeTxt );
