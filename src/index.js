import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SayHi from './SayHi';
import AlarmClockControl from './AlarmClockControl';
import Form from './Form';
import FormRef from './FormRef';
import CssStyleTest from './CssStyleTest';

import App from './App';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
//import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Form />, document.getElementById('root'));
// ReactDOM.render(<FormRef />, document.getElementById('root'));
ReactDOM.render(<CssStyleTest />, document.getElementById('root'));
// const Repos = () => (
//     <div>
//       <h2>Repos</h2>
//     </div>
//   )

  
//   const About = () => (
//     <div>
//       <h2>About</h2>
//     </div>
//   )
//   ReactDOM.render(
//     <Router>
//       <div>
//         <ul>
//           <li><Link to="/">App</Link></li>
//           <li><Link to="/repos">Repos</Link></li>
         
//           <li><Link to="/about">About</Link></li>
//           <li>
//             <Link to={{
//               pathname: '/sayhi',
//               state: { id: '1', message: 'hello, component' }
//             }}>SayHi</Link>
//           </li>
//           <li>
//             <Link to={{
//               pathname: '/alarmClockControl',
//             //   state: { id: '1', message: 'hello, component' }
//             }}>Alarm</Link>
//           </li>
//         </ul>
//         <hr/>
//         <Route exact path="/" component={App}/>
//         <Route path="/repos" component={Repos}/>
//         <Route path="/about" component={About}/>
//         <Route path="/sayhi" render={props =><SayHi name="joe" {...props} />} />
//         <Route path="/alarmClockControl" render={props =><AlarmClockControl />} />
//       </div>
//     </Router>,
//      document.getElementById('root'));
//  // registerServiceWorker();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
