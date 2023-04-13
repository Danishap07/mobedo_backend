import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        // console.log("second")
        cb(null, '../public')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const filefilter = (req, file, cb) => {
    // console.log("first")
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.mimetype === 'application/msword' || file.mimetype === 'application/pdf') {
        cb(null, true)
    }
    else {
        cb(null, false)
    }

}
const upload = multer({storage: storage, fileFilter: filefilter}) 

export default upload