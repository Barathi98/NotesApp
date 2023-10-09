const express=require('express');
var app=express();
var path=require('path');
app.set('view engine','pug');
app.set("views", path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, "public")));
app.get('/notesapp/home',function (req,res){
   res.render('home');
});
app.get('/notesapp/signup',function(req,res){
  res.render('signup');
});
app.get('/notesapp/login',function(req,res){
   res.render('login');
 }); 
app.get('/notesapp/menu',function(req,res){
  res.render('menu');
}); 

app.get('/notesapp/profile',function(req,res){
  res.render('profile');
});

 
console.log('listening to the port'+app.listen(4000));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
//search id
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ${userId} found`);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});