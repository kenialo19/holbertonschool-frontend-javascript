// Write an interface named Student that accepts the following elements

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

  const student1: Student = {
    firstName: 'Cristian',
    lastName: 'Cordoba',
    age: 24,
    location: 'China',
  }
  
  const student2: Student = {
    firstName: 'Kenia',
    lastName: 'Mohamed',
    age: 16,
    location: 'Egipto',
  }

  const studentsList = [student1, student2]

  