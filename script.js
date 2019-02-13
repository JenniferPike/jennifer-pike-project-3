//SLIDING PUZZLE

// 1.CLICK ON BLACK SQUARE TO START GAME
//      - black square will dissappear
// 2.PHOTO TILES GET MIXED UP WITH ONE FREE SQUARE
//      - use a random generator to move the tiles into different spots?
//      - else statement so they don't end up in the same square
// 3. CLICK ON A PHOTO TO MOVE IT TO THE OPEN SPACE
//      - photo can move left/right and up/down
//      - photos have start spots.. once all are back in those spots display complete or restart?
//BONUS!!!!!!!!!
//4. CELEBRATION WHEN COMPLETE
//5. RESTART BUTTON
//6. PICK A PHOTO - HAVE MULTIPLE PHOTO OPTIONS
//7. COUNT MOVES
//8. TIMER

$(document).ready(function(){
        //this will start the game
   $('.start-square').on('click', function(){
        // on click remove the dark start game square
        $('.start-square').remove('div');
        //then it will randomize the tiles. 
       $('.game-tile').
   });


   $('.game-tile').on('click', function(){
        console.log('hello')
   });
});