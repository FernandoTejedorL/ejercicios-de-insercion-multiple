const rootStyles = document.documentElement.style;
// - Con este HTML consigue que al introducir un número POSITIVO y MAYOR de 0 se genere la tabla de multiplicar de ese número del 0 al 10 como elementos de la lista. En el caso de que el número no sea correcto o no haya número, el botón estará desactivado.

// ```html
// <label>Introduce un número</label>
// <input type="number" />
// <button>Imprimir tabla de multiplicar</button>
// <ul></ul>
// ```
const numberElement = document.getElementById('number');
const printChartElement = document.getElementById('print');
const chartElement = document.getElementById('multiply-chart');

const activateButton = (event) => {
  if (numberElement.value <= 0 || numberElement.value === '') {
    printChartElement.disabled = true;
  } else {
    printChartElement.disabled = false;
  }
};
numberElement.addEventListener('input', activateButton);

const generateChart = (event) => {
  const toMultiply = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const fragment = document.createDocumentFragment();
  toMultiply.forEach((number) => {
    const newMultiple = document.createElement('li');
    newMultiple.textContent = `${numberElement.value} x ${number} = ${
      numberElement.value * number
    }`;
    fragment.append(newMultiple);
  });
  chartElement.append(fragment);
};
printChartElement.addEventListener('click', generateChart);

// - Con este objeto debes crear tarjetas de usuario que muestren todos los datos, el diseño es libre, lo importante es que muestren toda la información del usuario y la imagen de perfil. Crea una función que genere todas las tarjetas de usuario y las inserte en el DOM
const launchElement = document.getElementById('launch');
const usersElement = document.getElementById('users');
const users = [
  {
    name: 'Josep Flores',
    age: 77,
    username: 'Josep85',
    email: 'Josep_Flores@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/women/24.jpg',
  },
  {
    name: 'Ricardo Rosas',
    age: 43,
    username: 'Ricardo_Rosas',
    email: 'Ricardo_Rosas22@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/57.jpg',
  },
  {
    name: 'Iván Tamayo',
    age: 40,
    username: 'tamayo87',
    email: 'Ivan_Tamayo61@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/9.jpg',
    job: 'Lead Communications Designer',
  },
  {
    name: 'Maica Villanueva',
    age: 64,
    username: 'Maica.Villanueva18',
    email: 'Maica.Villanueva1@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    name: 'Pedro Estrada',
    age: 77,
    username: 'Pedro29',
    email: 'Pedro_Estrada22@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    job: 'Central Directives Liaison',
  },
  {
    name: 'Jorge Cedillo',
    age: 33,
    username: 'Jorge_Cedillo',
    email: 'Jorge.Cedillo2@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/88.jpg',
  },
];
console.dir(users);
const addUsers = (users) => {
  const fragment = document.createDocumentFragment();
  users.forEach((user) => {
    const newDiv = document.createElement('div');
    const name = document.createElement('h1');
    name.textContent = 'Nombre: ' + user.name;
    const age = document.createElement('h4');
    age.textContent = 'Edad: ' + user.age;
    const username = document.createElement('h4');
    username.textContent = 'User: ' + user.username;
    const email = document.createElement('h4');
    email.textContent = 'email: ' + user.email;
    const picture = document.createElement('img');
    picture.src = user.profileImage;
    newDiv.append(name, age, username, email, picture);
    newDiv.classList.add('profile-card');
    fragment.append(newDiv);
  });
  usersElement.append(fragment);
  console.dir(usersElement);
};

addUsers(users);
