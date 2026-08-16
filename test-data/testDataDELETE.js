const textBoxData = {
  validUser: {
    fullName: 'Ivan Ivanov',
    email: 'ivan.ivanov@example.com',
    currentAddress: 'Minsk, Belarus, Independence Avenue 10',
    permanentAddress: 'Brest, Belarus, Sovetskaya Street 25'
  },
  invalidEmail: 'incorrect-email-format'
};

const webTableData = {
  firstName: 'Alex',
  lastName: 'Petrov',
  age: '28',
  salary: '2500',
  department: 'QA',
  searchText: 'Cierra'
};

const practiceFormData = {
  firstName: 'Ivan',
  lastName: 'Petrov',
  email: 'ivan.petrov@example.com',
  gender: 'Male',
  mobile: '29123456767',
  subject: 'Maths',
  hobby: 'Sports',
  address: 'Minsk, Belarus',
  state: 'NCR',
  city: 'Delhi'
};

const selectMenuData = {
  oldStyleOption: 'Purple',
  selectOneOption: 'Mr.',
  multiSelectOptions: ['Volvo', 'Saab'],
  groupedOption: 'Group 1, option 1'
};

module.exports = {
  textBoxData,
  webTableData,
  practiceFormData,
  selectMenuData
};
