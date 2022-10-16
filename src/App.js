import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './components/Layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {console.log(publicRoutes)}
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        Layout = route.layout ? route.layout : Fragment;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
