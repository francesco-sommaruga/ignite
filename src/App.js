//pages
import Home from './pages/Home';
import Nav from './components/Nav';

//styles
import GlobalStyles from './GlobalStyles';

//react router
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="App">
            <GlobalStyles />
            <Nav />
            <Route path={['/game/:id', '/']}>
                <Home />
            </Route>
        </div>
    );
};

export default App;
