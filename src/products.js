import express from 'express';
 
import { Contenedor } from './contenedor.js';
const {Router} = express;
const router = Router();

let products = [];

let fileRoute = './products.txt';

let myProducts = new Contenedor(fileRoute)
 

router.get('/', (req, res) => {
    myProducts.getAll()   
    .then(e => res.send(e))
    .catch(error => console.log(error))

})

router.get('/:id', (req, res) => {
    myProducts.getById(parseInt(req.params.id))   
    .then(e => res.send(e))
    .catch(error => console.log(error))

})

router.post('/', (req, res)=>{
    myProducts.save(req.body)
    .then(e => res.send(e))
    .catch(error => console.log(error))
    
})

router.put('/:id', (req, res)=>{

    myProducts.editById(parseInt(req.params.id), req.body)    
    .then(e => res.send(e))
    .catch(error => console.log(error))

})

router.delete('/:id', (req, res)=>{
    let indexOfProductSelected = products.findIndex(product => product.id === parseInt(req.params.id))
 
    if(!indexOfProductSelected) 
        res.send(`There is no product with id ${req.params.id}`)

    products.splice(indexOfProductSelected, 1)
    res.send(`Product with Id ${req.params.id} was deleted`)
    
})

export default router;