import Navbar from "../app/components/navbar";
import Home from "../app/components/home";
import User from "../app/components/user";

export default {
  routes: [
    {
      path: "/",
      component: Home,
      exact: true
    },
    {
      path: "/user",
      component: User,
      exact: true
    }
  ],
  redirects: [
    {
      from: "/people",
      to: "/user",
      status: 301
    }
  ]
};
