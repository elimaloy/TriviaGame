$(document).ready(function(){
    $("#remaining-time").hide();
    $("#start").on('click', trivia.startGame);
    $(document).on('click' , '.option', trivia.guessChecker);
    
  })
  
  var trivia = {
    correct: 0,
    incorrect: 0,
    current: 0,
    timer: 20,
    timerOn: false,
    timerId : '',
    
    
    
    questions: {
      q1: "what food makes up 99% of a panda's diet"?,
      q2: "What are female elephants called?",
      q3: "What are baby goats called?",
      
    },
    options: {
      q1: ['Monica', 'Chandler', 'Rachel', 'Ross'],
      q2: ['Fish', 'Apples', 'Oranges', 'Sandwhiches'],
      q3: ['5', '2', '1', '3'],
      
    },
    answers: {
      q1: "bambo",
      q2: "Cows",
      q3: "kids",
      
    },
    
    startGame: function(){
      trivia.current = 0;
      trivia.correct = 0;
      trivia.incorrect = 0;
      clearInterval(trivia.timerId);
      
      $('#game').show();
      $('#results').html('');
      $('#timer').text(trivia.timer);
      $('#start').hide();
  
      $('#remaining-time').show();
      trivia.nextQuestion();
      
    },
    
    nextQuestion : function(){
      
    
      trivia.timer = 10;
       $('#timer').removeClass('last-seconds');
      $('#timer').text(trivia.timer);
      
    
      if(!trivia.timerOn){
        trivia.timerId = setInterval(trivia.timerRunning, 1000);
      }
      
      
      var question = Object.values(trivia.questions)[trivia.current];
      $('#question').text(questionContent);
      
      
      var question = Object.values(trivia.options)[trivia.current];
      
      
      $.each(questionOptions, function(index, key){
        $('#options').append($('<button class="option btn btn-info btn-lg">'+key+'</button>'));
      })
      
    },
    
    
}
    
       if(trivia.timer === -1){
        trivia.unanswered++;
        trivia.result = false;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 1000);
        $('#results').html('<h3>Out of time! The answer was '+ Object.values(trivia.answers)[trivia.currentSet] +'</h3>');
      }
      
      else if(trivia.current === Object.keys(trivia.questions).length){
        
    
        $('#results')
          '<p>Correct: '+ trivia.correct +'</p>'+
          '<p>Incorrect: '+ trivia.incorrect +'</p>'+
         $('#game').hide();
         $('#start').show();
      
      
    
    
    guess: function() {
      
      var resultId;
      var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];
      
      if($(this).text() === currentAnswer){
        
        
        trivia.correct++;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 1000);
        $('#results').html('<h3>Correct Answer!</h3>');
      }
      
        
        trivia.incorrect++;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 1000);
        $('#results').html('<h3>Better luck next time! '+ currentAnswer +'</h3>');
      }
      
    
    
    guessResult : function(){
      trivia.currentSet++;
       $('.option').remove();
      $('#results h3').remove();
      trivia.nextQuestion();
       
    }