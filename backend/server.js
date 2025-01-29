const app = require("./src/app");

const port = process.env.PORT || 1213
app.listen(port,()=>{
    console.log(`The app is listen at http://localhost:${port}`);
})