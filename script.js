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

const petName = document.getElementById("p-name");
const ownerName = document.getElementById("owner-name");
const species = document.getElementById("species");
const breed = document.getElementById("breed");
const button = document.getElementById("button");
const ul = document.querySelector("ul");
const body = document.querySelector("body");

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  static sameOwnerName(pet1, pet2) {
    return pet1 === pet2;
  }
}

const arreyOfPet = [];
button.onclick = function () {
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);

  li1.innerHTML = petName.value;
  li2.innerHTML = ownerName.value;
  li3.innerHTML = species.value;
  li4.innerHTML = breed.value;

  const pet1 = new Pet(
    petName.value,
    ownerName.value,
    species.value,
    breed.value
  );
  arreyOfPet.push(pet1);
  console.log(arreyOfPet[0].ownerName);
  if (arreyOfPet.length > 1) {
    console.log(arreyOfPet[1].ownerName);

    if (
      arreyOfPet[0].ownerName == arreyOfPet[1].ownerName &&
      arreyOfPet[0].petName !== arreyOfPet[1].petName
    ) {
      const uList = document.createElement("ul");
      const list = document.createElement("li");
      list.innerHTML = ` i propretari sono uguali quindi la risposta è ${Pet.sameOwnerName(
        arreyOfPet[0].ownerName,
        arreyOfPet[1].ownerName
      )}`;
      uList.appendChild(list);
      body.appendChild(uList);
      console.log(
        Pet.sameOwnerName(arreyOfPet[0].ownerName, arreyOfPet[1].ownerName)
      );
    } else if (arreyOfPet[0].petName === arreyOfPet[1].petName) {
      window.alert("hai inserito gli stessi dati");
    } else {
      const uList = document.createElement("ul");
      const list = document.createElement("li");
      list.innerHTML = ` i propretari non sono uguali quindi la risposta è ${Pet.sameOwnerName(
        arreyOfPet[0].ownerName,
        arreyOfPet[1].ownerName
      )}`;
      uList.appendChild(list);
      body.appendChild(uList);
      console.log(
        Pet.sameOwnerName(arreyOfPet[0].ownerName, arreyOfPet[1].ownerName)
      );
    }

    console.log(arreyOfPet[1].petName);
  }
  console.log(arreyOfPet[0].petName);
};
