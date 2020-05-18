// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

class Intern extends Employee {
    constructor(name,id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role= "Intern"

      function getName(){ 
        return this.name;
    }
    function getId(){ 
        return this.id;
    }
  
    function getEmail(){ 
        return this.email;
    }
  
    function getRole(){ 
        return this.role;
    }
  
  

    }
  }
  
  module.exports(Intern);


