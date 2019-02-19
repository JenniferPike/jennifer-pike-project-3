//SLIDING PUZZLE

// 1.CLICK ON BLACK SQUARE TO START GAME
//      ✅- black square will dissappear
// 2. CLICK ON A PHOTO TO MOVE IT TO THE OPEN SPACE
//     ✅ - photo can move left/right and up/down
//      ✅- on click of a tile:
//      - Check if the tile clicked is next to the empty tile
//      - if it IS next to the empty tile, switch the empty tile and the one you clicked
//      - if its not, do nothing
// 3. CELEBRATION WHEN COMPLETE
//      - photos are back in starting spots
//      - once all are back in those spots display complete or restart?
//      - check to see if it's back to the start
//      - if `img-1` was inside`tile-1` and`img-2` is inside`tile-2` then its correct and you win!
//BONUS!!!!!!!!!
// 4.PHOTO TILES GET MIXED UP WITH ONE FREE SQUARE
//      - use a random generator to move the tiles into different spots?
//      - else statement so they don't end up in the same square
//5. RESTART BUTTON
//6. PICK A PHOTO - HAVE MULTIPLE PHOTO OPTIONS
//7. COUNT MOVES
//8. TIMER
const imageOriginSpots =[
     {
          url:'assets/image-1.JPG',
          tileClass: '.tile-1',
          number: 1 
          //added  numbers to the objects to do with the solvable thing
     },
     {
          url: 'assets/image-2.JPG',
          tileClass: '.tile-2',
          number: 2
     },
     {
          url: 'assets/image-3.JPG',
          tileClass: '.tile-3',
          number: 3
     },
     {
          url: 'assets/image-4.JPG',
          tileClass: '.tile-4',
          number: 4
     },
     {
          url: 'assets/image-5.JPG',
          tileClass: '.tile-5',
          number: 5
     },
     {
          url: 'assets/image-6.JPG',
          tileClass: '.tile-6',
          number: 6
     },
     {
          url: 'assets/image-7.JPG',
          tileClass: '.tile-7',
          number: 7
     },
     {
          url: 'assets/image-8.JPG',
          tileClass: '.tile-8',
          number: 8
     },
     {
          url: 'assets/blank.JPG',
          tileClass: '.empty',
          number: 0
     }
];
//this is to credit the is it solveable. Mark Wilkins helped me with this part. Turns out it's possible for a puzzle to be unsolvable. Mark rewrote this into JS from Java to help solve my problem
// https://gist.github.com/caseyscarborough/6544636

// Puzzle array is an array of all the image numbers from top left, to bottom right in a flat array.
// 0 represents the blank tile
// this function will return true if the puzzle is possible to solve, false otherwise
const isSolveable = function (puzzleArray) {
     let inversions = 0;

     for (let i = 0; i < puzzleArray.length - 1; i++) {
          // Check if a larger number exists after the current
          // place in the array, if so increment inversions.
          for (let j = i + 1; j < puzzleArray.length; j++)
               if (puzzleArray[i] > puzzleArray[j]) inversions++;

          // Determine if the distance of the blank space from the bottom 
          // right is even or odd, and increment inversions if it is odd.
          if (puzzleArray[i] == 0 && i % 2 == 1) inversions++;
     }

     // If inversions is even, the puzzle is solvable.
     return (inversions % 2 == 0);
}


$(document).ready(function(){

    //CLICK ON BLACK SQUARE TO START GAME
    //.one() is the same as on but only does it once not on every click
   $('.tile-9').one('click', function(e){
        e.preventDefault();
          // on click remove the "start game" label square leaves empty space
          $('.tile-9 label').remove();
          //get random number
          
          const mixUpTiles = function () { 
               //clone an array
               const imageOriginSpotsClone = imageOriginSpots.slice(0);       
               
               function getRandoNum() {
                    return randomNumber = Math.floor(Math.random() * (imageOriginSpotsClone.length));
               };

               const puzzleArr = [];
               // added as part of the is it solvable function

               $('.game-tile').removeClass('empty');
               //find the empty tile and remove the empty class
               for (let i = 1; i < 10; i++) {
                    //using i as 1 because it will select the tile we need
                    const randomNum = getRandoNum();
                    //gets random number 
                    const num = imageOriginSpotsClone[randomNum].number; 
                    //code to do with solving
                    const getImage = imageOriginSpotsClone[`${randomNum}`].url;
                    //selects that images url from the array
                    imageOriginSpotsClone.splice(randomNum,1);
                    //pops that number off so as not to repeat the same image
                    $(`.tile-${i}`).empty('img src')
                    $(`.tile-${i}`).append(`<img src=${getImage}>`);
                    //takes the original image off and puts the random image there

                    // if getImage is the blank img url, add the empty class to tile-${i}
                    if (getImage === "assets/blank.JPG"){
                         $(`.tile-${i}`).addClass('empty');
                    }

                    puzzleArr.push(num);
                    //put the number for this image in the array for the tile we're on. More of the code to do with solvable
                    
               };   
//It will call mixUpTiles again until it is solvable.
               if (!isSolveable(puzzleArr)) {
                    //the puzzle is not solvable!!
                    mixUpTiles();
               } else {
                    $('.puzzle-goal').append('<h3>Time to play!</h3>')
               }
               
          }; 
          
          mixUpTiles();
   });

     //MOVE A SQUARE
     $('.game-tile').on('click', function () {
          //$('.game-tile') says get me all html with a class game-tile 
          //and .on('click') says when clicking on one of those html elements do what i've listed below
          const emptyTile = $('.empty')
          //any html elements with the class "empty" are put in a variable called "emptyTile"
          const emptyTileImage = emptyTile.find('img');
          // go inside of the "emptyTile" variable and find me an image element
          const emptyTileImageUrl = emptyTileImage.attr('src');
          // go get the src attribute from that img HTML element I put in the "emptyTileImage" variable

          const thisTile = $(this);
          //get me this element you clicked and put it in a variable called "thisTile"
          const thisTileImage = thisTile.find('img');
          //go inside of the "thisTile" variable and find me an img element
          const thisTileImageUrl = thisTileImage.attr('src');
          // go get the src attribute from that img HTML element I put in the "thisTileImage" variable
          const moveTile = function(){
               emptyTileImage.attr('src', thisTileImageUrl);
               thisTileImage.attr('src', emptyTileImageUrl);
               emptyTile.removeClass('empty')
               thisTile.addClass('empty');
          };
          // I know this is a lot, I talked with Zoe and working on refactoring it.
          if (thisTile.hasClass('tile-9')) {
              // if the tile clicked has a class of tile-9, then check if tile-6 or tile-8 have a img src attribute of assets/blank.JPG if one does move there.
               if ($('.tile-6 img').attr('src') === 'assets/blank.JPG') {
                    moveTile();
               } else if ($('.tile-8 img').attr('src') === 'assets/blank.JPG') {
                    moveTile();
               } 
          }
          if (thisTile.hasClass('tile-8')){
               
               if ($('.tile-5 img').attr('src') ===  'assets/blank.JPG'){
                    moveTile();
               } else if ($('.tile-7 img').attr('src') === 'assets/blank.JPG') {
                    moveTile();
               } else if ($('.tile-9 img').attr('src') === 'assets/blank.JPG') {
                    moveTile();
               } 
          };

          if (thisTile.hasClass('tile-7')){
               if($('.tile-4 img').attr('src') === 'assets/blank.JPG'){
                    moveTile();
               }else if ($('.tile-8 img').attr('src') === 'assets/blank.JPG'){
                    moveTile();
               }
          };
          if (thisTile.hasClass('tile-6')){
               if($('.tile-3 img').attr('src') === 'assets/blank.JPG'){
                    moveTile();
               } else if ($('.tile-5 img').attr('src') === 'assets/blank.JPG') {
                    moveTile();
               } else if($('.tile-9 img').attr('src') === 'assets/blank.JPG'){
                    moveTile();
               }
          };
          if (thisTile.hasClass('tile-5')){
               if($('.tile-2 img').attr('src') === 'assets/blank.JPG'){
                    moveTile();
               }else if($('.tile-4 img').attr('src') === 'assets/blank.JPG'){
                    moveTile();
               }else if ($('.tile-6 img').attr('src') === 'assets/blank.JPG'){
                    moveTile();
               }else if($('.tile-8 img').attr('src') === 'assets/blank.JPG'){
                    moveTile();
               }
          };
          if (thisTile.hasClass('tile-4')){
               if($('.tile-1 img').attr('src') === 'assets/blank.JPG'){
                    moveTile();
               }else if ($('.tile-5 img').attr('src') === 'assets/blank.JPG'){
                    moveTile();
               }else if($('.tile-7 img').attr('src') === 'assets/blank.JPG'){
                    moveTile();
               }
          };
          if (thisTile.hasClass('tile-3')) {
               if ($('.tile-2 img').attr('src') === 'assets/blank.JPG') {
                    moveTile();
               } else if ($('.tile-6 img').attr('src') === 'assets/blank.JPG') {
                    moveTile();
               }
          };
          if (thisTile.hasClass('tile-2')){
               if($('.tile-1 img').attr('src') === 'assets/blank.JPG'){
                    moveTile();
               }else if ($('.tile-3 img').attr('src') === 'assets/blank.JPG'){
                    moveTile();
               }else if($('.tile-5 img').attr('src') === 'assets/blank.JPG'){
                    moveTile();
               }
          };
          if (thisTile.hasClass('tile-1')){
               if($('.tile-2 img').attr('src') === 'assets/blank.JPG'){
                    moveTile();
               }else if ($('.tile-4 img').attr('src') === 'assets/blank.JPG'){
                    moveTile();
               }
          };
     });

     //PUZZLE SOLVED
     $('.game-tile').on('click', function () {
          //need to condence this somehow, somedays😐
          if ($('.tile-1 img').attr('src') === 'assets/image-1.JPG'&& $('.tile-2 img').attr('src') === 'assets/image-2.JPG' &&
               $('.tile-3 img').attr('src') === 'assets/image-3.JPG' &&
               $('.tile-4 img').attr('src') === 'assets/image-4.JPG' &&
               $('.tile-5 img').attr('src') === 'assets/image-5.JPG' &&
               $('.tile-6 img').attr('src') === 'assets/image-6.JPG' &&
               $('.tile-7 img').attr('src') === 'assets/image-7.JPG' &&
               $('.tile-8 img').attr('src') === 'assets/image-8.JPG' &&
               $('.tile-9 img').attr('src') === 'assets/blank.JPG') {

               $('.puzzle-goal').append('<h2>YOU WON!</h2>');
          }
     });
     //This makes the p tag show up a bit later
     setTimeout(function(){ 
          $('p').css('display','block');
     },6000);
    
});