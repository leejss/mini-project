const router = require("express").Router();

router.get("/", async (_, res) => {
  res.render("home.html", {
    apts: await models.Apts.findAll(),
  });
});

module.exports = router;
