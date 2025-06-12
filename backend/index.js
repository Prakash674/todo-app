const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

//create todos  
//body{title:
// }
app.post('/todo', (req, res) => {
 
})


app.get('/todos',(req,res)=>{

})

app.put('/completed',(req,res)=>{
  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
