import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {Home} from './home';
import { Question1 } from '.';
import { Question2 } from '.';
import { Question3 } from '.';
import { Question4 } from '.';
import { Question5 } from '.';
import { Question6 } from '.';
import { Question7 } from '.';
import { Question8 } from '.';
import { Question9 } from '.';
import { Question10 } from '.';
import {Win} from '.';


const App = () => {
  return (
    <Router>
        <Link to="/"><button className="home-button" type="button"> Homepage </button></Link>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/question1" component={Question1} />
        <Route path="/question2" component={Question2} />
        <Route path="/question3" component={Question3} />
        <Route path="/question4" component={Question4} />
        <Route path="/question5" component={Question5} />
        <Route path="/question6" component={Question6} />
        <Route path="/question7" component={Question7} />
        <Route path="/question8" component={Question8} />
        <Route path="/question9" component={Question9} />
        <Route path="/question10" component={Question10} />
        <Route path="/win" component={Win} />
      </Switch>
    </Router>
  )
}
export default App;
