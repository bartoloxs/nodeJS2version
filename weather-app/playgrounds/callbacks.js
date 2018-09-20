var getUser = (id, callback) => {
  var user = {
    id,
    name: 'Vikram'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(1232, (userObject) => {
  console.log(userObject);
});