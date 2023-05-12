import { Route, Switch } from 'react-router-dom';
import About from "./about/About.jsx";
import Services from "./services/Services.jsx";
import Examples from "./examples/Examples.jsx";
import Contacts from "./contacts/Contacts.jsx";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/works" component={Examples} />
      <Route exact path="/contacts" component={Contacts} />
    </Switch>
  );
};

export default Routes;
