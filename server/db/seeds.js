use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    guestName:"Harry Johnston",
    guestEmail:"harry123@gmail.com",
    checkedIn: true
  },
  {
    guestName:"Sarah Silverman",
    guestEmail:"ssilverman@gmail.com",
    checkedIn: false
  },
  {
    guestName:"Joe Biden",
    guestEmail:"jb99@gmail.com",
    checkedIn: true
  }
]);
