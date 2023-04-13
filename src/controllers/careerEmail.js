// import { application } from 'express';
// import fileupload from 'express-fileupload';


// const upload = multer({dest : '../public/uploads'})

// const nodemailer = require('nodemailer');
const nodemailer = require('nodemailer')


async function sendEmail(req, res) {



    const newpath = __dirname + "/files/";
    const files = req.files;
    const attchmt = req.files.file;
    // console.log("first", req.files)
    const filename = files.file.name;
    const passData = req.body

    

    const email = async () => {
        // if(passData) {
            // console.log("resod")
            const transporter = await nodemailer.createTransport({
                service: 'gmail',
                port: 8000,
                secure: false,
                // secure: true,
                auth: {
                    user: "mobedowebsite@gmail.com",
                    pass: "qewggmatwmonppyq"
                }
            })

            let info = await transporter.sendMail({
                from: '"Mobedo Email" <mobedowebsite@gmail.com>',
                to: "danishpatel915@gmail.com, manikantapujar@gmail.com",
                subject: "Mobedo User Details",
                // text: "hello this is my first email from node.js.",
                html: `<div style="background:#ecf2fb">
        <div style="background:#ecf2fb;padding:30px 5px">
            <div style="max-width:600px;min-width:295px;margin:0 auto">
                <div
                    style="background:linear-gradient(130.49deg,#006caa 10.49%,#e877fa 111.09%);padding:45px 30px;border-top-left-radius:10px;border-top-right-radius:10px">
                    <div style="text-align:center;color:#fff;font-size:18px;font-weight:500">
                        Form Submitted details are below
                    </div>
                </div>
                <div style="background:#fff;padding:20px;border-bottom-left-radius:10px;border-bottom-right-radius:10px">
                    <p style="margin: 20px 0px 20px;  line-height: 1.5; font-size: 14px; color: #000;font-weight: 700;">
                        Name: <span
                            style="margin: 20px 0px 20px;  line-height: 1.5; font-size: 14px; color: #000;font-weight: 500;">${passData.user_name}</span> </p>
                    <p style="margin: 20px 0px 20px;  line-height: 1.5; font-size: 14px; color: #000;font-weight: 700;">
                        Email Id: <span
                            style="margin: 20px 0px 20px;  line-height: 1.5; font-size: 14px; color: #000;font-weight: 500;">${passData.user_email}</span> </p>
                    <p style="margin: 20px 0px 20px;  line-height: 1.5; font-size: 14px; color: #000;font-weight: 700;">
                        Mobile No: <span
                            style="margin: 20px 0px 20px;  line-height: 1.5; font-size: 14px; color: #000;font-weight: 500;">${passData.mobile_no}</span> </p>
                    
                </div>
                <div style="text-align:center">
                    <p style="font-size:11px;font-weight:600;color:#000">© Copyright 2023, All Rights Reserved | Mobedo
                        Consulting</p>
                </div>
            </div>
    
        </div>`,
                attachments: [
                    {
                        filename: filename,
                        path: `${newpath}${filename}`
                    }
                ]
            }, (err, info) => {
                if (err) {
                    res.json({
                        status: false,
                        message: 'Email sending failed!'
                    })
                    console.log("Email sending failed", err);
                }
                else {
                    res.json({
                        status: true,
                        message: "Message sent successfully!"
                    })
                    console.log("message sent successfully.");
                }
            }
            )
        // }
    

    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
            // console.log(req.files.file);
            // console.log(file);
            // console.log(Object.fromEntries(file));
            attchmt.mv(`${newpath}${filename}`, async (err, res) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({ message: "File upload failed", response: err });
                }
                else {
                    email()
                    // res.json({ status:200, message: "File Uploaded", response: res, cb:email() });
                }
            });
        
}

// main()

export default sendEmail