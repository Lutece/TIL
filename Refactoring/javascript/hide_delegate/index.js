class Person {
  constructor(name) {
    this._name = name;
  }

  get name() { return this._name; }
  get department() { return this._department; }
  set department(arg) { this._department = arg; }
}

class Department {
  get chargeCode() { return this._chargeCode; }
  set chargeCode(arg) { this._chargeCode = arg; }
  
  get manager() { return this._manager; }
  set manager(arg) { this._manager = arg; }
}

/*
  부서의 매니저를 알고 싶을 때

  ```javascript
    manager = aPerson.department.manager;

    to

    manager = aPerson.department.manager;
  ```
 */
