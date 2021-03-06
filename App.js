
import React from 'react';

 
import BlogItem from './BlogCard';

import './App.css';
//import './BlogCard.css';
import './BlogCard.Module.css';
import { Component } from 'react';  


class App extends React.Component {

  
    constructor(props) {
      super(props);
      this.state = {hello : "component-lifecycle"};
      this.changeState = this.changeState.bind(this) 
  }

  state = {

    showBlogs : true
  }

   blogArr = [
{
  id:1,
    title: 'madhya-pradesh',
    description: 'Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history. Begun in the 10th century.'
   
  },
{
  id:2,
  title: 'Rajasthan',
  description: 'Rajasthan is a state in northern India. The state covers an area of 342,239 square kilometres or 10.4 percent of the total geographical area of India.'
},
{
  id:3,
  title: 'Gujarat',
  description: 'Gujarat is a state on the western coast of India with a coastline of 1,600 km – most of which lies on the Kathiawar peninsula – and a population of 60.4 million.'
}
  ]
   
   

   BlogCards = this.blogArr.map((item , pos) => {


    return (
<BlogItem key={pos} className={'Blog'} title={item.title} description={item.description} id={item.id}/>
      // <div className="BlogCard" key={item.id}>
      // <h3>{item.title}</h3> 
      // <p>{item.description}</p> 
      // </div>

    )
  })

   onHideBtnClick = () => {

    let updateState = !this.state.showBlogs;
   this.setState((prevState, prevProps) =>{
         return {showBlogs: !prevState.showBlogs}
   });
   console.log(this.state.showBlogs);
   
  }
  render() {
    console.log('Render Called');
    return(
      
      <div className="App">
                 <div>  
             <h1>Component Lifecycle</h1>  
             <h3>Hello {this.state.hello}</h3>  
             <button onClick = {this.changeState}>Click Here!</button>          
         </div>  
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
        <br></br>
        {
        this.state.showBlogs ? this.BlogCards : null
        }
      </div>
    );

  }
  componentWillMount() {  
    console.log('Component Will MOUNT!')  
 }  
 componentDidMount() {  
    console.log('Component Did MOUNT!')  
 }  
 changeState(){  
    this.setState({hello:"All"});  
 }  
 componentWillReceiveProps(newProps) {      
    console.log('Component Will Recieve Props!')  
 }  
 shouldComponentUpdate(newProps, newState) {  
    return true;  
 }  
 componentWillUpdate(nextProps, nextState) {  
    console.log('Component Will UPDATE!');  
 }  
 componentDidUpdate(prevProps, prevState) {  
    console.log('Component Did UPDATE!')  
 }  
 componentWillUnmount() {  
    console.log('Component Will UNMOUNT!')  
 }  

}

export default App;
