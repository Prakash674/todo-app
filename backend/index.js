const express = require('express');
const app = express();
const port = 3000;
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
app.use(express.json());

//create todos
//body{title:
// }
app.post('/todo', async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createTodo);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: 'Your sent the wrong inputs',
    });
    return;
  }
  //put it in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
});
res.json({ msg: 'Todo Created' });

app.get('/todos', async (req, res) => {
  const todos = await todo.find();
  res.status(200).json(todos);
});

app.put('/completed', async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updatePayload.safeParse(updateTodo);
  if (!parsedPayload) {
    res.status(411).json({
      msg: 'You sent the Wrong Inputs',
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({ msg: 'Todo Marked as completed' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
