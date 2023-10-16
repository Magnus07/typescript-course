import { get, controller, bodyValidator, post } from "./decorators";
import { Request, Response } from "express";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(
      `
              <form method="POST">
                <div>
                <label>Email</label>
                <input name="email">
                </div>
                <div>
                <label>Password</label>
                <input name="password" type="password">
                </div>
                <button>Submit</button>
              </form>
                    `
    );
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email && password && email === "email" && password === "password") {
      req.session = { isLoggedIn: true };
      res.redirect("/");
    } else {
      res.send("Email or password provided is incorrect.");
    }
  }
}
