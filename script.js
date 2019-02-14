//SLIDING PUZZLE

// 1.CLICK ON BLACK SQUARE TO START GAME
//      - black square will dissappear
// 2.PHOTO TILES GET MIXED UP WITH ONE FREE SQUARE
//      - use a random generator to move the tiles into different spots?
//      - else statement so they don't end up in the same square
// 3. CLICK ON A PHOTO TO MOVE IT TO THE OPEN SPACE
//      - photo can move left/right and up/down
//      - on click of a tile:
//      - Check if the tile clicked is next to the empty tile
//      - if it IS next to the empty tile, switch the empty tile and the one you clicked
//      - if its not, do nothing
//      - photos have start spots.. once all are back in those spots display complete or restart?
// 4. CELEBRATION WHEN COMPLETE
//      - check to see if it's back to the start
//      - if `img-1` was inside`tile-1` and`img-2` is inside`tile-2` then its correct and you win!
//BONUS!!!!!!!!!
//5. RESTART BUTTON
//6. PICK A PHOTO - HAVE MULTIPLE PHOTO OPTIONS
//7. COUNT MOVES
//8. TIMER

$(document).ready(function(){
    //CLICK ON BLACK SQUARE TO START GAME
   $('.start-square').on('click', function(){
          // on click remove the dark start game square leaves empty space
          $('.start-square label').remove();
          //shuffle tiles so they are in different spots

//     console.log($('.start-square').data('x-coord'), $('.start-square').data('y-coord')) 
   });

     //MOVE A SQUARE
     $('.game-tile').on('click', function () {
     //$('.game-tile') says get me all html with a class game-tile 
     //and .on('click') says when clicking on one of those html elements do what i've listed below
          const emptyTile = $('.start-square');
          //any html elements with the class "start-square are put in a variable called "emptyTile"
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
          emptyTileImage.attr('src', thisTileImageUrl);
          thisTileImage.attr('src', emptyTileImageUrl);
          
     });

    //CLICK ON SQUARE
     //check if there is empty space around square
     //move to that space
     //move back if clicked again
});


//I'd like to use a init function later on but will make it without first.
// myGame.init = function () {

// };
// $(function () {
//      myGame.init();
// });