const validTextBoxData = {
  fullName: 'Ivan Ivanov',
  email: 'ivan.ivanov@example.com',
  currentAddress: 'Moscow, Red Square, 1',
  permanentAddress: 'Saint Petersburg, Nevsky Avenue, 10'
};

const invalidTextBoxData = {
  fullName: 'Invalid Email User',
  email: 'incorrect-email',
  currentAddress: 'Test address',
  permanentAddress: 'Permanent test address'
};

const practiceFormRequiredData = {
  firstName: 'Anna',
  lastName: 'Petrova',
  gender: 'Female',
  mobile: '9123456789'
};

const practiceFormFullData = {
  firstName: 'Maria',
  lastName: 'Sidorova',
  email: 'maria.sidorova@example.com',
  gender: 'Female',
  mobile: '9234567890',
  dateOfBirth: {
    day: '15',
    month: 'May',
    year: '1995'
  },
  subjects: ['Maths', 'English'],
  hobbies: ['Sports', 'Reading'],
  currentAddress: 'Kazan, Kremlin Street, 5',
  state: 'NCR',
  city: 'Delhi'
};

module.exports = {
  validTextBoxData,
  invalidTextBoxData,
  practiceFormRequiredData,
  practiceFormFullData
};
