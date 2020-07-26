export function makePerson(name: string, age: number) {
  return { name, age };
}

export function testMakePerson() {
  console.log(
    makePerson('Jane', 22),
    makePerson('Jack', 23)
  )
}