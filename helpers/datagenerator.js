function generateRandomEmail(prefix = 'testuser') {
  const timestamp = Date.now();
  return `${prefix}_${timestamp}@example.com`;
}

function generateRandomName(prefix = 'User') {
  const timestamp = Date.now();
  return `${prefix}${timestamp}`;
}
 
module.exports = {
    generateRandomEmail,
    generateRandomName
};
 