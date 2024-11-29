async function getAllUsers() {
  return new Promise((resolve, reject) => {
    const twoWeeksAgo = new Date(Date.now() - (14 * 24 * 60 * 60 * 1000));
    const treeWeeksAgo = new Date(Date.now() - (21 * 24 * 60 * 60 * 1000));
    const oneDayAgo = new Date(Date.now() - (1 * 24 * 60 * 60 * 1000));
    setTimeout(() => {
      resolve([
        { id: 1, name: 'John Doe', lastLogin: new Date(Date.now() - twoWeeksAgo) },
        { id: 2, name: 'Some User...', lastLogin: new Date(Date.now() - treeWeeksAgo) },
        { id: 3, name: 'Hellen', lastLogin: new Date(Date.now() - oneDayAgo) },
        { id: 4, name: 'Another User', lastLogin: new Date(Date.now() - oneDayAgo) },
      ]);
    }, 1000);
    
  });
}

module.exports = { getAllUsers };