import React from "react";
const Poem = React.lazy(() => import("../routes/Poem"))
const Home = React.lazy(() => import("../routes/HomePage"))
const BlogDetail = React.lazy(() => import("../components/Common/BlogDetail"))
const Activity = React.lazy(() => import("../routes/Activity"))
const Message = React.lazy(() => import("../routes/Message"))

const RouteConfig = [
  {
    path: "/main",
    component: Home,
    exact: true
    // children: [
    //   {
    //     path: "/main/blogdetail",
    //     component: BlogDetail
    //   }
    // ]
  },
  {
    path: "/main/blogdetail",
    component: BlogDetail
  },
  {
    path: "/poem",
    component: Poem

  }, {
    path: "/activity",
    component: Activity

  }, {
    path: "/message",
    component: Message
  },
  {
    path: "/",
    redirect: "/main"
  }
]

export default RouteConfig;