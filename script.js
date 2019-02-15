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
const imageOriginSpots = {
     image1: {
          url:'assets/image-1.JPG',
          tileClass: '.tile-1'
     },
     image2: {
          url: 'assets/image-2.JPG',
          tileClass: '.tile-2'
     },
     image3: {
          url: 'assets/image-3.JPG',
          tileClass: '.tile-3'
     },
     image4: {
          url: 'assets/image-4.JPG',
          tileClass: '.tile-4'
     },
     image5: {
          url: 'assets/image-5.JPG',
          tileClass: '.tile-5'
     },
     image6: {
          url: 'assets/image-6.JPG',
          tileClass: '.tile-6'
     },
     image7:{
          url: 'assets/image-7.JPG',
          tileClass: '.tile-7'
     },
     image8:{
          url: 'assets/image-8.JPG',
          tileClass: '.tile-8'
     },
     image9:{
          url: 'assets/blank.JPG',
          tileClass: '.empty'
     },
};


$(document).ready(function(){
     const endGame = function () {
          if (`${imageOriginSpots.url} === ${imageOriginSpots.tileClass}`) {
               console.log(imageOriginSpots.url);
          }
     }

    //CLICK ON BLACK SQUARE TO START GAME
   $('.tile-9').on('click', function(){
          // on click remove the "start game" label square leaves empty space
          $('.tile-9 label').remove();

          const mixUpTiles = function(){
               // when tile-9 is clicked
               //draw a random number for each tile.
               //move the image to that tile
          };
   });

     //MOVE A SQUARE
     $('.game-tile').on('click', function () {
          //$('.game-tile') says get me all html with a class game-tile 
          //and .on('click') says when clicking on one of those html elements do what i've listed below
          const emptyTile = $('.empty')
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
});