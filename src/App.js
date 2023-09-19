import './App.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import MainLayout from './MainLayout';
import Trending from './Trending';
import Movies from './Movies';
import TvSeries from './TvSeries';
import Search from './Search';
import Details from './Details';

const routes=createBrowserRouter([
  {path:'/',element:<MainLayout />, children:[
    {path:'/',element:<Trending />},
    {path:'/movies',element:<Movies />},
    {path:'/tvseries',element:<TvSeries />},
    {path:'/search',element:<Search />},
    {path:':contenttype/:id',element:<Details />}
  ]}  
]);

function App() 
  {
  return (
    <RouterProvider router={routes} />
);
}


export default App;
