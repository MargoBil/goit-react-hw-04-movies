import { lazy } from "react";

const homePagesRoute = [
  {
    path: "/",
    lable: "HomePage",
    exact: true,
    component: lazy(() =>
      import("../views/HomePage/HomePage" /* webpackChunkName: "HomePage" */)
    ),
  },
  {
    path: "/movies/:movieId",
    lable: "MovieDetailsPage",
    exact: false,
    component: lazy(() =>
      import(
        "../views/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
      )
    ),
  },
];

const searchPage = {
  path: "/movies",
  lable: "MoviesPage",
  exact: true,
  component: lazy(() =>
    import(
      "../views/MoviesPage/MoviesPage" /* webpackChunkName: "MoviesPage" */
    )
  ),
};

const additionalPagesRoute = [
  {
    path: "/movies/:movieId/cast",
    lable: "Cast",
    exact: false,
    component: lazy(() =>
      import("../views/Cast/Cast" /* webpackChunkName: "Cast" */)
    ),
  },
  {
    path: "/movies/:movieId/reviews",
    lable: "Reviews",
    exact: false,
    component: lazy(() =>
      import("../views/Reviews/Reviews" /* webpackChunkName: "Reviews" */)
    ),
  },
];
export default { homePagesRoute, additionalPagesRoute, searchPage };
