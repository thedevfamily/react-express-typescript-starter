import express, {Application, Router} from "express";
class App {
  app: Application;
  router: Router;

  constructor() {
    this.app = express();
    this.router = Router();
    this.initRoute(this.app)
  }

  initRoute(app:Application) {
    app.get('/', (req, res) => res.send('Express JS server in Typescript'));
  }

}

export default new App().app;