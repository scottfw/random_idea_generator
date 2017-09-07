<script>

    //ACADEMIC RELATED**************************
    var arrayMath = ['Do Aleks', 'Practice Math Facts', 'Do Kumon','Do Mental Math', 'Do Kumon Multiplication','Do Kumon Division', 'Do Flash Cards', 'Do basic Algebra', 'Do basic Geometry', 'Do Fractions and Decimals'];

    var arrayReading = ['Read a chapter from History outloud', 'Read a Chapter from History', 'Read an educational book', 'read a short story','read a chapter book','read literature'];

    var arrayWriting = ['Write a Poem', 'Write a Short Story', 'Write a Chapter Summary from History Book', 'Write a Book Report from any book', 'Write a Movie Plot', 'Write a Magazine Advertisement'];

    var arraySpelling = ['practice Spelling','copy a paragraph from a book','do an exercise from your spelling book'];
    //**************************


    //MISC EDUCATIONAL**************************
    var arrayMediaWatchEducational = ['Watch Khan Academy', 'Watch Khan Academy', 'Watch Bruce Yeany Video', 'Watch Documentary', 'Watch TedEd', 'Listen to Jim Weiss','Watch Educational Videos', 'Watch a Historical Movie','learn a new skill on youtube','watch a doc on a National Park','listen to a podcast'];

    var arraySkillBuilding = ['Practice Typing', 'Practice Cursive Writing', 'Play Chess', 'write a scratch program','do a science experiment','code Dash to do something different','Learn a card game','Make a musical instrument','Sew something','make a simple circuit','practice juggling','make a stop motion picture','make a cartoon sketch'];

    var arraySkillLanguage = ['Practice French', 'Learn how to count to 10 in Japanese', 'Learn how to Count to 10 in Chinese', 'Learn how to order food in French', 'Watch a French Language show','learn the basic colors in French','Learn the basic colors in Chinese'];

    var arraySkillArt = ['Draw a picture', 'Paint a picture', 'draw something in 3d', 'draw an animal','draw a picture of Paris', 'draw a picture of a historical figure','make a water color painting','create 3d shapes from paper','plant seeds and grow something'];

    var arraySkillMemorization = ['Memorize a Poem', 'Memorize a List of Presidents', 'Memorize a List of First Ladies', 'Memorize the 50 states', 'Memorize the 50 State Capitols', 'Memorize the Continents', 'Memorize the countries Europe', 'Memorize the countries in Asia', 'Memorize the the countries in North America', 'Memorize the countries in South America', 'Memorize countries in Africa'];
    //**************************

    //MUSIC RELATED**************************
    var arrayMusic = ['Learn to play the flute', 'Play the bongo drums', 'Play the Xylophone', 'Practice Singing','learn how to yodel','play piano and sing','play guitar and sing','practice guitar'];
    //**************************

    //EXERCISE RELATED**************************
    var arrayExerciseIndoors = ['Dance to music', 'Pretend you are in a ballet','Play Indoor Catch', 'Play Indoor Baseball', 'Jump Rope', 'try some yoga positions'];

    var arrayExerciseOutdoors = ['Go scootering','Go to the Park', 'Play Soccer', 'Play Tennis', 'Hit Golf Balls', 'Ride your bike', 'dribble the basketball around the block','play frisbee','run as fast as you can (on grass)','jump rope','play hopscotch','practice putting'];
    //**************************

    //MEDIA RELATED***************************
    var arrayMediaWatch = ['Watch I Love Lucy', 'Watch Stampy etc.', 'Watch Garfield', 'Watch Word Girl', 'Watch Pink Panther', 'Watch a Movie'];

    var arrayMediaPlay = ['Play Minecraft', 'Play Beach Buggy Racing', 'Play Toca Hair Salon','create something on tinkercad','play amazon game'];

    var arrayOtherPlay = ['Play with Dolls', 'Make a fort', 'Bake a cake','Bake cupcakes','make lemonade','do arts and crafts','do an activity book','play jacks','play with legos','play with dash','create an indoor bowling alley','bake bread from scratch','bake cookies','make donuts'];

    //**************************




    function getUnique(count,curArray) {
      // Make a copy of the array
      var tmp = curArray.slice(curArray);
      var ret = [];

      for (var i = 0; i < count; i++) {
        var index = Math.floor(Math.random() * tmp.length);
        var removed = tmp.splice(index, 1);
        // Since we are only removing one element
        ret.push(removed[0]);
      }
      return ret;
    }


</script>

    <script>


    $("#rndEdu").unbind().click(function (e) {
        //populate modal with editable fields

            var vMath = getUnique(1,arrayMath);
            var vReading = getUnique(1,arrayReading);
            var vWriting = getUnique(1,arrayWriting);
            var vSpelling = getUnique(1,arraySpelling);
            var vEduWatch = getUnique(1,arrayMediaWatchEducational);
            var vSkillGen = getUnique(1,arraySkillBuilding);
            var vSkillLanguage = getUnique(1,arraySkillLanguage);
            var vSkillArt = getUnique(1,arraySkillArt);
            var vSkillMemorization = getUnique(1,arraySkillMemorization);
            var vSkillMusic = 'practice piano and '+ getUnique(1,arrayMusic);




            vHtml = '';

            vHtml += '<h4 class="text-center">Math</h4><p class="text-center">'+vMath+'</p>';
            vHtml += '<h4 class="text-center">Reading</h4><p class="text-center">'+vReading+'</p>';
            vHtml += '<h4 class="text-center">Writing</h4><p class="text-center">'+vWriting+'</p>';
            vHtml += '<h4 class="text-center">Spelling</h4><p class="text-center">'+vSpelling+'</p>';
            vHtml += '<h4 class="text-center">Music</h4><p class="text-center">'+vSkillMusic+'</p>';
            vHtml += '<h4 class="text-center">Educational Media</h4><p class="text-center">'+vEduWatch+'</p>';
            vHtml += '<h4 class="text-center">Practice a Skill</h4><p class="text-center">'+vSkillGen+'</p>';
            vHtml += '<h4 class="text-center">Foreign Language</h4><p class="text-center">'+vSkillLanguage+'</p>';
            vHtml += '<h4 class="text-center">Arts</h4><p class="text-center">'+vSkillArt+'</p>';
            vHtml += '<h4 class="text-center">Memorization</h4><p class="text-center">'+vSkillMemorization+'</p>';


            $( "#results" ).html('');
            $( "#results" ).fadeOut( "fast", function() {
                $( "#results" ).html('');
              $( "#results" ).fadeIn( "fast", function() {
                $( "#results" ).html( vHtml );
              });
            });

    });

        $("#rndExer").unbind().click(function (e) {
        //populate modal with editable fields

            var vExerciseIndoors = getUnique(1,arrayExerciseIndoors);
            var vExerciseOutdoors = getUnique(1,arrayExerciseOutdoors);


            vHtml = '';

            vHtml += '<h4 class="text-center">Exercise</h4><p class="text-center">'+vExerciseIndoors+'<br>'+vExerciseOutdoors+'</p>';


            $( "#results" ).html('');
            $( "#results" ).fadeOut( "fast", function() {
                $( "#results" ).html('');
              $( "#results" ).fadeIn( "fast", function() {
                $( "#results" ).html( vHtml );
              });
            });

        });

        $("#rndFun").unbind().click(function (e) {
        //populate modal with editable fields

            var vMediaWatch = getUnique(1,arrayMediaWatch);
            var vMediaPlay = getUnique(1,arrayMediaPlay);
            var vOtherPlay = getUnique(1,arrayOtherPlay);



            vHtml = '';

            vHtml += '<h4 class="text-center">Play</h4><p class="text-center">'+vOtherPlay+'<br>'+vMediaPlay+'<br>'+vMediaWatch+'</p>';


            $( "#results" ).html('');
            $( "#results" ).fadeOut( "fast", function() {
                $( "#results" ).html('');
              $( "#results" ).fadeIn( "fast", function() {
                $( "#results" ).html( vHtml );
              });
            });

        });

    </script>
