import { Request, Response, NextFunction } from "express";
import { get, use, controller } from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.isLoggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send("Forbidden");
}

@controller("")
class RootController {
  @get("/")
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.isLoggedIn) {
      res.send(
        `
                  <h1>You are logged in</h1>
                  <a href="/logout">log out</a>
                  `
      );
    } else {
      res.send(
        `
                  <h1>You are NOT logged in</h1>
                  <a href="/auth/login">log in</a>
                  `
      );
    }
  }
  @get("/logout")
  logout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send("Welcome, logged in user!");
  }
}
