 const mongos=require('mongoose');
const URI="mongodb://anilsahu:5CCwj4EkjyHqnuBt@cluster0.ow7kg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDb=async()=>{
    await mongos.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        })
        .then(() => console.log('Database connected.'))
        .catch(err => console.log(err));
}
module.exports=connectDb

