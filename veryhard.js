class Person {
    constructor(name, job, age) {
      this.name = name;
      this.job = job;
      this.age = age;
    }
  
    excersice() {
      console.log("April showers");
    }
    fetchJob() {
      console.log(this.name + " is a " + this.job);
    }
  }
  
  class Progammer extends Person {
    constructor(name, job, age, languages) {
      super(name, job, age);
      this.languages = languages;
      this.busy = true;
    }
  
    completeTask = () => {
      this.busy = false;
    };
    acceptNewTask = () => {
      this.busy = true;
    };
  
    offerNewTask = () => {
      if (this.busy) {
        console.log("Mike cant add that");
      } else {
        console.log("Mike can do that");
      }
    };
  
    learnLanguage = (language) => {
      this.languages.push(language);
    };
    listLanguages = () => {
      var statement = this.name+ ' knows the following languages: '
      this.languages.forEach((lang) => {
          var comma = ','
          if(this.languages.indexOf(lang)=== this.languages.length-1){
              comma = ''
          }
        statement+= ` ${lang}`+comma
      });
      console.log(statement)
    };
  }
  
  const person = new Person("nate", "coder", 23);
  person.excersice();
  person.fetchJob();
  
  const programmer = new Progammer("mike", "jazz", 35, ["english", "japanese"]);
  programmer.excersice();
  programmer.fetchJob();
  programmer.learnLanguage("japanese");
  programmer.listLanguages();
  
  const programmer2 = new Progammer("april", "musician", 40, ["munga", "moonga"]);
  programmer2.excersice();
  programmer2.fetchJob();
  programmer2.learnLanguage("japnese");
  programmer2.listLanguages();