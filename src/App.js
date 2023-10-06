
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Watch from './components/Watch';
import Results from './components/Result';



const appRouter = createBrowserRouter([{
   
    path:'/youtubehos',
    element:<Body/>,
    children :[
      {
        path:"/youtubehos",
        element:<MainContainer/>
      },
      {
        path:"/watch",
        element:<Watch/>
      },
      {
        path:"/result",
        element:<Results/>
      }
    ]


}])


function App() {
  return (
    <Provider store={store}>
    <div >
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
