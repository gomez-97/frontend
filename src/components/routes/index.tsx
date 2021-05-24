import { ItemsPreview } from "@screens/main-search/items-preview";
import { SearchListItems } from "@screens/main-search/search-list-items";
import { Route, Switch } from "react-router-dom";

export const Routes = (): React.ReactElement => (
  <Switch>
    <Route
      path="/items/:id"
      exact={true}
      component={ItemsPreview as React.ComponentType}
    />
    <Route path="/items" component={SearchListItems as React.ComponentType} />
  </Switch>
);
