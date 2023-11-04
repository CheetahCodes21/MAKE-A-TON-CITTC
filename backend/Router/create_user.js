const express = require('express')
const router = express.Router()
const user = require('../models/usermodal')
const { body, validationResult } = require('express-validator');
const jwt=require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const jwtSecret = "HelloIamAwebDeveloper"

router.post("/createuser",[body('email').isEmail(),
body('name').isLength({ min: 3 }),
body('password','incorrect Password').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password,salt)
    try {
        await user.create({
            name:req.body.name,
            userId: req.body.userId,
            password:secPassword,
            email: req.body.email
        })
    res.json({success:true})
    } catch (err) {
        console.log(err);
        res.json({success:false})
    }
})
router.post("/loginuser",[body('email').isEmail(),
body('password','incorrect Password').isLength({ min: 5 })
] ,async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email=req.body.email
    try {
        let userdata=await user.findOne({email})
        if(!userdata){
            return res.status(400).json({ errors: "Try logging with correct credentials" });
        }
        const pwdcompare = await bcrypt.compare(req.body.password,userdata.password)
        if(!pwdcompare){
            return res.status(400).json({ errors: "Try logging with correct credentials" });
        }
        const data={
            user:{
                id:userdata.id
            }
        }
        const authToken=jwt.sign(data,jwtSecret)
        return res.json({success:true,authToken:authToken})
    } catch (err) {
        console.log(err);
        res.json({success:false})
    }
})

module.exports=router