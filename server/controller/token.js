import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const createToken = async(req, res, next) => {
    const secret = process.env.CONSUMER_SECRET;
    const consumer = process.env.CONSUMER_KEY;    
    const auth = new Buffer.from(`${consumer}:${secret}`).toString('base64');

    await axios.get(
        "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
        {
            headers: {
                authorization: `Basic ${auth}`,
            }
        }
    ).then(data => {
        console.log(data.data);
        next();
    }).catch(err => {
        console.log(err);
        res.status(400).json(err.message);
    })
};

const stkPush = async(req, res) => {
    const shortCode = "174379"
    const phone = req.body.phone.substring(1)
    const amount = req.body.amount
    const passkey = "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMwNDI3MTk1MzI0"
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"

    const date = new Date();
    // const timestamp = 
    //     date.getFullYear() + 
    //     ("0" + )
}

export { createToken };