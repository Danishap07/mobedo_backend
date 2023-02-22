import { Router } from 'express';
const router = Router();
import sendEmail from '../controllers/careerEmail'

router.route('/').get((req, res) => {
    res.json({
        status:201,
        message:"hello From your new API!"
    });
})

router.route('/send_email').post(sendEmail);

export default router;