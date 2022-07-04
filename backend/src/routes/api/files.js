const fileUpload = require("express-fileupload");
const path = require("path");

const app = express();

app.use(
    fileUpload()
  );