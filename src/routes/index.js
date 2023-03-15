import { Router } from 'express';
const router = Router();
import sendEmail from '../controllers/careerEmail'
import multer from 'multer';


const upload = multer({dest : '../public/uploads'})
router.route('/').get((req, res) => {
    res.json({
        status:201,
        message:"hello From your new API!"
    });
})

  
  router.route('/send_email').post(upload.single('myfile'),sendEmail);

export default router;