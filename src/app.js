const exp = require("express");
const app = exp();
const dotenv = require("dotenv");

dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`Server connected to PORT: ${process.env.PORT}`);

});