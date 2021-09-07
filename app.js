class GithubRepository {
  constructor(userName, fileName, descriptionOfRepository, code) {
    this.userName = userName;
    this.fileName = fileName;
    this.descriptionOfRepository = descriptionOfRepository;
    this.code = code;
  }
}

const ex1 = () => {
  let newRepo = new GithubRepository(
    "happysolucki",
    "app.js",
    "classwork repo",
    "some code..."
  );
  console.log("Ex 1. Github Repo");
  for (const props in newRepo) {
    console.log(`${props}: ${newRepo[props]}`);
  }
};

class Movie {
  constructor(movieName, rating, yearReleased) {
    this.movieName = movieName;
    this.rating = rating;
    this.yearReleased = yearReleased;
  }

  changeRating(updatedRating) {
    this.rating = updatedRating;
  }

  changeYearReleased() {
    let updatedYear = prompt(`Enter the year ${this.movieName} was released?`);
    this.yearReleased = parseInt(updatedYear);
  }
}

const ex2 = () => {
  let movie = new Movie("Friday", 4.2, 1999);
  console.log(
    `Initial rating: ${movie.rating}\nInitial year realeased: ${movie.yearReleased}`
  );
  console.log("Ex 2. Movie");
  movie.changeRating(4.7);
  movie.changeYearReleased();
  console.log(
    `Updated rating: ${movie.rating}\nUpdated year realeased: ${movie.yearReleased}`
  );
};

class Student {
  constructor(studentName, codeSchoolCohort, grades) {
    this.studentName = studentName;
    this.codeSchoolCohort = codeSchoolCohort;
    this.grades = grades;
  }

  changeStudentName(name) {
    this.studentName = name;
  }

  addGrade(assignment, score) {
    this.grades.push({ assignmentName: assignment, assignmentScore: score });
  }
}

const ex3 = () => {
  let student1 = new Student("Spencer", "Code 201", []);
  let student2 = new Student("Lizzy", "Code 201", []);

  console.log("Ex 3. Student");
  console.log(`Student 1's initial name: ${student1.studentName}`);
  console.log(`Student 1's initial grades: ${student1.grades}`);
  console.log(`Student 2's initial grades: ${student2.grades}`);

  student1.changeStudentName("Demarcus");
  student1.addGrade("High Order Functions", 95);
  student2.addGrade("High Order Functions", 100);

  console.log(`Student 1's updated name: ${student1.studentName}`);
  console.log(
    `Student 1's updated grades: ${student1.grades[0].assignmentName} | ${student1.grades[0].assignmentScore}`
  );
  console.log(
    `Student 2's updated grades: ${student2.grades[0].assignmentName} | ${student2.grades[0].assignmentScore}`
  );
};

class Person {
  constructor(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;
  }
  calculateBMI() {
    return (this.weight / (this.height * this.height)) * 703;
  }
}

const challenge1 = () => {
  let man = new Person("Theo", 160, 71);
  let woman = new Person("Hope", 115, 64);

  let [firstBMI, secondBMI] = [man.calculateBMI(), woman.calculateBMI()];
  console.log("Challenge 1. BMI");
  console.log(`${man.name}'s BMI: ${firstBMI}`);
  console.log(`${woman.name}'s BMI: ${secondBMI}`);
};

class BankUser {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  changeBalance(funds) {
    this.balance += funds;
    funds < 0
      ? console.log(`Withdrew $${Math.abs(funds)} from ${this.name}.`)
      : console.log(`Deposited $${funds} into ${this.name}.`);
  }
}

const challenge2 = () => {
  let user1 = new BankUser("Matt's account", 1000);
  let user2 = new BankUser("My account", 0);
  console.log("Challenge 2. Bank");
  user1.changeBalance(-100);
  user2.changeBalance(100);
  [user1, user2].map((user) =>
    console.log(`${user.name} balance: $${user.balance}`)
  );
};

const funcs = [ex1, ex2, ex3, challenge1, challenge2];
funcs.map((func) => func());
