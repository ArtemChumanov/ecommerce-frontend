import React, { lazy, FC } from "react";
import { RoutesConstants } from "./RoutesConstants";
import { Redirect, Route, Switch } from "react-router-dom";
const HomePage = lazy(() => import("../pages/client/Home/Home"));
const ProductsListPage = lazy(
  () => import("../pages/client/ListProducts/ListProducts")
);
const ProductDetailsPage = lazy(
  () => import("../pages/client/ProductInfo/ProductInfo")
);

const Routers: FC = () => {
  return (
    <Switch>
      <Route exact path={RoutesConstants.Home} component={HomePage} />
      <Route
        exact
        path={RoutesConstants.ProductsList}
        component={ProductsListPage}
      />
      <Route
        exact
        path={RoutesConstants.CurrentProduct}
        component={ProductDetailsPage}
      />
      <Redirect to={RoutesConstants.ErrorPage} />
    </Switch>
  );
};
export default Routers;
