function generateRandomEmail(prefix = 'testuser') {
  return `${prefix}_${Date.now()}_${Math.floor(Math.random() * 1000)}@example.com`;
}

function generateRandomName(prefix = 'User') {
  return `${prefix}${Date.now()}${Math.floor(Math.random() * 1000)}`;
}

function generateRandomUser() {
  const firstName = generateRandomName('First');
  const lastName = generateRandomName('Last');

  return {
    firstName,
    lastName,
    email: generateRandomEmail('demoqa'),
    age: '30',
    salary: '50000',
    department: 'QA'
  };
}

module.exports = {
  generateRandomEmail,
  generateRandomName,
  generateRandomUser
};
