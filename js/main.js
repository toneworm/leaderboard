// CONTROLLER AND VIEW

// leaderboard instance
var leaderboard = new Leaderboard();

// competitor list
var competitors = ['Bob', 'Dave', 'John', 'Adolf', 'Josef', 'Benito'];


var timer = window.setInterval(function(){

  // generate random choice
  var winner = Math.floor(Math.random() * competitors.length), str = '';
  leaderboard.update(winner);

  $('.leaderboard-content').text(str);

  // get priorities
  console.log(leaderboard.getPriorities());
}, 1000);

  // var leaderboardLimit = 30,
  //     wsPriorities = [{'rank' : 'p4', 'pc' : 10 }, {'rank' : 'p3', 'pc' : 20 }, {'rank' : 'p2', 'pc' : 30 }, {'rank' : 'p1', 'pc' : 100 }],
  //     colPriorities = [{'rank' : 'p4', 'pc' : 10 }, {'rank' : 'p3', 'pc' : 20 }, {'rank' : 'p2', 'pc' : 30 }, {'rank' : 'p1', 'pc' : 100 }];