// Business Logic for AddressBook ---------
function movieTicket() {
  this.ticket = [];
}

movieTicket.prototype.addTicket = function(ticket) {
  this.ticket.push(ticket);
}

// contstructor!
function Ticket(age, movie, time) {
  this.age = age;
  this.movie= movie;
  this.time = time;
}




var myMovieTicket = new movieTicket();



$(document).ready(function(){

  $('form#inputform').submit(function(event){
    event.preventDefault();


    var newTicket = new Ticket();
    // newTicket.age = $('#age').val();
    newTicket.movie = $('#movie').val();
    // newTicket.time = $('#time').val();


    var age = parseInt($('#age').val());
    var movie = $('#movie').val();
    var time = parseInt($('#time').val());

    myMovieTicket.ticket.push(newTicket);

    //age
     if (age > 65) {
      newTicket.age = 'Senior'
    } else if (age <=12) {
      newTicket.age = 'Child'
    } else {
      newTicket.age = 'Adult'
    }

    //time
    if (time <=4) {
      newTicket.time = "Matinee"
    } else {
      newTicket.time = "Regular"
    }

    //price
    var price = 12
    if (time <= 4) {
      price = price - 4
        if (age >= 65) {
          price = price * 0.5
        } else if (age <= 12) {
          price = price - 5
        } else {
          price
        }
    } else {
      price
        if (age >= 65) {
          price = price * 0.5
        } else if (age <= 12) {
          price = price - 5
        } else {
          price
        }
    }



      $("#show-ticket").show();
      $(".ticket-type").text(newTicket.age);
      $(".ticket-time").text(newTicket.time);
      $(".movie-title").text(newTicket.movie);
      $(".price").text(price);
  });


});
