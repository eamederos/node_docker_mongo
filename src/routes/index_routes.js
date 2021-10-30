const { Router} = require('express')
const { model } = require('mongoose')

const router = Router()

router.get('/',(req,res)=>{
    res.send('hello word estamos cambiado para ver la ruta')
})

module.exports = router