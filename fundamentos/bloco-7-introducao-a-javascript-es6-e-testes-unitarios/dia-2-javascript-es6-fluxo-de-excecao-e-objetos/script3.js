const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

lesson2['turno'] = 'noite';

const objKeys = (obj) => Object.keys(obj);

const objLength = (obj) => Object.entries(obj).length;

const objValues = (obj) => Object.values(obj);

const allLessons = {
  lesson1: Object.assign(lesson1),
  lesson2: Object.assign(lesson2),
  lesson3: Object.assign(lesson3)
}

const totalStudents = Object.values(allLessons).reduce((accumulator, key) => {
  return accumulator + key.numeroEstudantes;
}, 0)

const indexValue = (obj, ind) => Object.values(obj).filter((value, index) => {
  return ind == index;
});

const verifyItem = (obj, key, value) => obj[key] === value;