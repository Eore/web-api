module.exports = [
  { field: "username", regex: /^(\w+){4,}$/ },
  { field: "password", regex: /(\w+){6,}/g },
  { field: "nama", regex: /(\w+){1,}/g },
  { field: "email", regex: /^(\w+)\@(\w+)\.(\w+)$/ }
];
