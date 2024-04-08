class User {
  constructor(firstName, lastName, age, Location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.Location = Location;
  }
//   static confrontation(user1, user2) {
//     if (user1.age === user2.age) {
//       return `${user1.firstName} e ${user2.firstName} hanno la stessa età`;
//     } else if (user1.age < user2.age) {
//       return `${user1.firstName} ha ${user1.age} anni ed è più piccolo di ${user2.firstName} che ha ${user2.age}`;
//     } else {
//       return `${user1.firstName} ha ${user1.age} anni ed è più grande di ${user2.firstName} che ha ${user2.age}`;
//     }
//   }
  confrontation(user1, user2) {
    if (user1.age === user2.age) {
      return `${user1.firstName} e ${user2.firstName} hanno la stessa età`;
    } else if (user1.age < user2.age) {
      return `${user1.firstName} ha ${user1.age} anni ed è più piccolo di ${user2.firstName} che ha ${user2.age}`;
    } else {
      return `${user1.firstName} ha ${user1.age} anni ed è più grande di ${user2.firstName} che ha ${user2.age}`;
    }
  }
}
const marioRossi = new User("Mario", "Rossi", 25, "Milano");
const giorgioVersace = new User("Giorgio", "Versace", 45, "Roma");
const simoneAsaro = new User("Simone", "Asaro", 45, " Venezia");
console.log(marioRossi);
console.log(giorgioVersace);
console.log(simoneAsaro);

// console.log(User.confrontation(giorgioVersace, simoneAsaro));
// console.log(User.confrontation(marioRossi, simoneAsaro));
// console.log(User.confrontation(giorgioVersace, marioRossi));
console.log(marioRossi.confrontation(giorgioVersace, simoneAsaro));
console.log(marioRossi.confrontation(marioRossi, simoneAsaro));
console.log(marioRossi.confrontation(giorgioVersace, marioRossi));
