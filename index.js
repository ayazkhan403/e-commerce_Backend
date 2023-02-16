const cors = require('cors');
const path = require('path'); 
const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000
const Cart = require('./Model/cart')
app.use(cors());
app.use(express.static( path.join( __dirname, 'public')));    
app.use(express.json());
app.use(express.urlencoded({extended : false}));   
let carts=[];
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/hello',(req,res)=>{
    Cart.id=req.body.id;
    Cart.brand=req.body.brand;
    Cart.quantity=req.body.quantity;
    console.log(req.body);
    carts.push(Cart);
    res.send(carts);

})
app.delete('/',(req,res)=>{
    carts.delete();
})
app.delete('',(req,res)=>{
    cart.find(id).delete();
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})