// TODO: Write code to define and export the Employee class



class Employee {
    constructor(name,id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role= "Employee"

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
  
  module.exports(Employee);




