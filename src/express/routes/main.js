const {Router} = require(`express`);

const mainRouter = new Router();

mainRouter.get(`/`, (req, res) => res.render(`pages/main`));
mainRouter.get(`/register`, (req, res) => res.render(`pages/sign-up`));
mainRouter.get(`/login`, (req, res) => res.render(`pages/login`));
mainRouter.get(`/search`, (req, res) => res.send(`/search`));

module.exports = mainRouter;
