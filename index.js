

window.onload = () => {
  document.querySelector('#btn').addEventListener("click", () => {
  document.querySelector('#la-excusa').innerHTML = generandoExcusa();
  });
};

let generandoExcusa = () => {

  let pronoun = ['Un', 'El'];
  let subject = ['perro','mapache','casero','gato', 'perro', 'carpintero'];
  let action = ['me agarro', 'lanzo', 'me tiro', 'me robo', 'mordio'];
  let possetion = ['la tarea', 'la ropa', 'la comida', 'los championes'];
  let where = ['a la calle', 'en mi casa', 'en el camino de entrada'];


  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return pronoun[proIndx] + ' ' + subject[subjIndx] + ' ' + action[actionIndex] + ' ' + possetion[possetionIndex] + ' ' + where[whereIndex];
};