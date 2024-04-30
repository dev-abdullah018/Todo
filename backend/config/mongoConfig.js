const mongoose = require('mongoose');

 let mongoConfig = ()=>{
    mongoose.connect('mongodb+srv://todos:XQY7iS8FZH9oaJiY@cluster0.rm1qtu3.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Database Connected!'));
 }

  module.exports = mongoConfig