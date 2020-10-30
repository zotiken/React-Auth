const router = require("express").Router();
var jwt = require("jsonwebtoken");

user = {
  id: "vfv43kv0r",
  email: "n@s.ru",
  password: "11111111",
};

router.post("/session", async (req, res) => {
  try {
    const { email, password, remember } = req.body;
    let dateNow = new Date();
    dateNow.setDate(dateNow.getDate() + 1);
    const valid = remember ? null : dateNow;
    console.log(email, password, remember);
    if (user.email === email && user.password === password) {
      const token = await jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        "secret"
      );
      res.status(201).json({
        session: {
          token,
          valid_to: valid,
          user: {
            id: user.id,
            email: user.email,
          },
        },
      });
    } else {
      res.status(422).json({
        common: ["error 0", "error 1"],
      });
    }
  } catch (error) {
    res.status(502).send("<div>Ошибка сервера  :(</div>");
  }
});

router.delete("/session", async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    if (token) {
      res.status(204).json();
    }
  } catch (error) {
    res.status(502).send("<div>Ошибка сервера  :(</div>");
  }
});

module.exports = router;
