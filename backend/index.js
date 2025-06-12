const express = require('express');
const app = express();
const port = 3000;
const { createTodo, updateTodo } = require('./types');
app.use(express.json());

//create todos
//body{title:
// }
app.post('/todo', (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createTodo);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: 'Your sent the wrong inputs',
    });
    return;
  }
  //put it in mongodb
});

app.get('/todos', (req, res) => {});

app.put('/completed', (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updatePayload.safeParse(updateTodo);
  if (!parsedPayload) {
    res.status(411).json({
      msg: 'You sent the Wrong Inputs',
    });
    return;
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
