function generateRandomEmail(prefix = 'testuser') {
  const timestamp = Date.now();
  const randomNumber = Math.floor(Math.random() * 1000);
 
  return `${prefix}_${timestamp}_${randomNumber}@example.com`;
}
 
function generateRandomName(prefix = 'User') {
  const timestamp = Date.now();
  const randomNumber = Math.floor(Math.random() * 1000);
 
  return `${prefix}${timestamp}${randomNumber}`;
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
