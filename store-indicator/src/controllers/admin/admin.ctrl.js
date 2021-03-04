const models = require("../../models");

exports.get_store = (req, res) => {
  // 데이터를 모두가져온 다음 렌더링
  models.Store.findAll({}).then((store) => {
    res.render("admin/store.html", {
      store,
    });
  });
};

exports.get_store_write = (req, res) => {
  // write.html을 렌더링
  res.render("admin/write.html");
};

exports.post_store_write = (req, res) => {
  // 데이터를 만든 후 리다이렉트
  models.Store.create(req.body).then(() => {
    res.redirect("/admin/store");
  });
};

exports.get_store_detail = (req, res) => {
  // 아이디로 데이터를 찾은 다음, 해당 데이터로 렌더링
  models.Store.findByPk(req.params.id).then((store) => {
    res.render("admin/detail.html", {
      store,
    });
  });
};

exports.get_store_edit = (req, res) => {
  // 아이디로 데이터를 찾은 다음, 해당 데이터로 렌더링
  models.Store.findByPk(req.params.id).then((store) => {
    res.render("admin/write.html", {
      store,
    });
  });

  exports.post_store_edit = (req, res) => {
    models.Store.update(req.body, {
      where: { id: req.params.id },
    }).then(() => {
      res.redirect(`/admin/store/detail/${req.params.id}`);
    });
  };

  exports.get_store_delete = (req, res) => {
    models.Store.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => {
      res.redirect("/admin/store");
    });
  };
};
