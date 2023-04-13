import { Router } from 'express';
const router = Router();
import sendEmail from '../controllers/careerEmail'
import multer from 'multer';
import upload from '../helpers/filehelpers';

// const storage = multer.diskStorage({
//   destination: (req, res, cb) => {
//       // console.log("second")
//       cb(null, '../public')
//   },
//   filename: (req, file, cb) => {
//       cb(null, `${Date.now()}-${file.originalname}`);
//   }
// });
// const upload = multer({ storage })
router.route('/').get((req, res) => {
    res.json({
        status:201,
        message:"hello From your new API!"
    });
})
  
  router.route('/send_email').post(upload.single('file'), sendEmail);

export default router;