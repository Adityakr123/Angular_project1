const obj = {
    greeting: 'Hello',
    sayHello: function() {
      console.log(this.greeting);
    }
  };
  
obj.sayHello();
  