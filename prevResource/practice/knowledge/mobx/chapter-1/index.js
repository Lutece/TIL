
const mobx = require('mobx');

/**
 * Mobx = the simple, scalable option for statement
 * 
 * Mobx what now? : Just do something to the state and Mobx will make sure your app respects the changes
 * 
 * Mobx
 * - Simple
 * - Focused
 * - Performant
 * - Unobtrusive
 * 
 * Everything that can be derived from the application state, should be derived. Automatically
 * 
 * Core Mobx API
 * - observable
 * - computed
 * - reactions
 * - transaction
 * - actions
 * 
 * observable
 * 
 * 
 */


 /* 
 var person = mobx.observable({
   firstName: 'Matt',
   lastName: 'Ruby',
   age: 34,
   fullName: function() {
     return this.firstName + ' ' + this.lastName;
   }
 });

 console.log(person.fullName());
 
 person.firstName = 'Mike';
 console.log(person.fullName());
*/


var person = mobx.observable({
  firstName: 'Matt',
  lastName: 'Ruby',
  age: 34,
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
});

mobx.autorun(function() {
  console.log(person.firstName + ' ' + person.age);
});

_.times(10, function() {
  person.age = _.random(40);
});

_.times(10, function() {
  person.lastName = _.random(40);
})
