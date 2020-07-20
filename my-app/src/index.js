import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/';

ReactDOM.render(<App/>, document.getElementById('root'));










// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// // import App from './components/app/';
// class WhoAmI extends Component {
// constructor(props){
//   super(props);
//   this.state = {
//     years:26,
//     nationality: "uk"
//   }
//   // this.nextYear = this.nextYear.bind(this);
//   this.nextYear = () => {
//     this.setState(state =>({
//           years: ++state.years
//         }))
//   }

// }
// // nextYear(){
// //   console.log(1);
// //   this.setState(state =>({
// //     years: ++state.years
// //   }))
// // }
// render(){
//   const {name, surname, link} = this.props;
//   const {years} = this.state;
//   return (
//     <>
//     <button onClick={this.nextYear}>++</button>
//       <h1>My name is {name} , surname - {surname} , years ={years} </h1>
//     <a href="">{link}</a>
//     </>
//   )
// }
// }



// const All = () => {
//   return (
//     <>
//     <WhoAmI name="Jhon" surname="Smith" link="https://www.youtube.com/?hl=RU"/>
//     <WhoAmI name="Ivan" surname="Smith" link="https://www.youtube.com/?hl=RU"/>
//     <WhoAmI name="Leha" surname="Smith" link="https://www.youtube.com/?hl=RU"/>
//     </>
//   )
// }


// ReactDOM.render(<All/>, document.getElementById('root'));