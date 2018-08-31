exports.User = {
  username: /^(\w+){4,}$/,
  password: /^(\w+){6,}$/,
  nama: /^[A-z, ]{1,}$/,
  email: /^(\w+)\@(\w+)\.(\w+)$/
};
