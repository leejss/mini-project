const router = require("express").Router();

const adminCtrl = require("./admin.ctrl");

router.get("/apts", adminCtrl.get_apts);

router.get("/apts/write", adminCtrl.get_apts_write);

router.post("/apts/write", adminCtrl.post_apts_write);

router.get("/apts/detail/:id", adminCtrl.get_apts_detail);

router.get("/apts/edit/:id", adminCtrl.get_apts_edit);

router.post("/apts/edit/:id", adminCtrl.post_apts_edit);

router.get("/apts/delete/:id", adminCtrl.get_apts_delete);

module.exports = router;
