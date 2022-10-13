const express = require ('express');
const  products = './src/products.js';


const app = express();
const {json, urlencoded} = express;
app.use(json());
app.use(urlencoded({extended: true}));
app.use(express.static('./public'))

app.use('/api/productos', products);


const PORT = process.env.PORT || 900;

app.listen(PORT, (err)=>{
    if(err) console.log(err);
    console.log(`Listening on port ${PORT}`)
})