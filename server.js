const express = require("express");
const app = express();
const PORT =  process.env.PORT ||  5000;
const MODE =  process.env.MODE || "development";

// const isDev = () => { return MODE === "development"};
// const isProd = !isDev();


// if (isProd) {
//   app.use(express.static(__dirname, "build"))
// }

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use("/admin",( require("./routes/sessionRoute.js")))



async function start (arams) {
  try {
    app.listen(PORT,()=>{
      console.log(`Server started on port - ${PORT}`);
    })
    
  } catch (error) {
    console.log(process.env.NODE_ENV);
    console.log("Error", error);
  }
}


start();



