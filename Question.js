/** @jsxImportSource @emotion/react */
import 'bootstrap/dist/css/bootstrap.min.css';
import { jsx, css } from '@emotion/react';
import React from 'react';
// const style= css`color:red;
//   &:hover{
//     color=green;
//   }`;
class Question extends React.Component{
   qBank = [

    {
      question:
        "what is the capital of Maharashtra ?",
      answers: ["Nashik", "Aurangabad", "Mumbai", "Nagpur"],
      correct: "vinayak",
      questionId: "1",
      category:"gk"
    },
    {
      question: "What is the capital of United Kingdom?",
      answers: ["Manchester", "Birmingham", "London", "Birmingham"],
      correct: "London",
      questionId:"2",
      category:"gk"
    },

    {
      question: "What is the capital of India?",
      answers: ["Indore", "Delhi", "Goa", "Mumbai"],
      correct: "Delhi",
      questionId:"3",
      category:"gk"
    },
    {
      question: "Sachin Tendulkar has played how many ODI matches?",
      answers: ["400", "463", "430", "500"],
      correct: "463",
      questionId:"4",
      category:"sports"
    },
    {
      question: "When did Sachin Tendulkar make his first Test debut??",
      answers: ["15 November, 1989", "10 October, 1988", "11 November, 1988", "20 October, 1989"],
      correct: "15 November, 1989",
      questionId:"5",
      category:"sports"
    },
    {
      question: "Which of the following team has not won a single title of ICC Women`s T20 World Cup so far?",
      answers: ["England", "West Indies", "India", "Australia"],
      correct: "India",
      questionId:"6",
      category:"sports"
    }

  ];

  constructor(){
    super();
    this.state={
      count:0
    };
  }

  next=()=>{
    this.setState({count :this.state.count+1});

  }
  previous=()=>{
    this.setState({count :this.state.count-1})
  }
  getQuizWithCategory(){
    var quizwithid=this.qBank.find((question)=>{
      // console.log(this.props.match.params.category);
      return question.category == this.props.match.params.category;
    })
    return quizwithid;
  }
  render(){
  return(
    <div className="container ">

        <div className="card border border-light text-white bg-dark ">
        <div className="card-body">
        <div className="row justify-content-md-center">
          {/* <div className="col text-center">
          <h5 className="card-title "css={css` font-size:30px `} >Question:{this.state.count+1 }/{this.props.x}</h5>
          <p className="card-text font-italic "css={css` font-size:40px; `}>{this.props.questions[this.state.count].question}</p>
          </div>
          <div className="col">
        <button type="button" className="btn btn-dark mt-2 mr-5 rounded-pill border border-light "css={css`width:50%`}>{this.props.questions[this.state.count].answers[0]}</button>
        <button type="button" className="btn btn-dark mt-2 mr-5 rounded-pill border border-light "css={css`width:50%`}>{this.props.questions[this.state.count].answers[1]}</button>
        <button type="button" className="btn btn-dark mt-2 mr-5 rounded-pill border border-light "css={css`width:50%`}>{this.props.questions[this.state.count].answers[2]}</button>
        <button type="button" className="btn btn-dark mt-2 mr-5 rounded-pill border border-light "css={css`width:50%`}>{this.props.questions[this.state.count].answers[3]}</button>
        <div className="">
        <button type="button" className="btn btn-secondary"css={css` width:20%;margin:1% `} onClick={this.previous} disabled={this.state.count==0}>prev</button>
        <button type="button" className="btn btn-secondary"css={css` width:20%; margin:1% `} onClick={this.next} disabled={this.state.count==this.props.x-1} >next</button>
        </div>
        </div> */}
        <div className="col text-center">
          <h5 className="card-title "css={css` font-size:30px `} >Question:{this.state.count+1 }</h5>
          <p className="card-text font-italic "css={css` font-size:40px; `}>{this.getQuizWithCategory().question}</p>
          </div>
          <div className="col">
         <button type="button" className="btn btn-dark mt-2 mr-5 rounded-pill border border-light "css={css`width:50%`}>{this.getQuizWithCategory().answers[0]}</button>
        <button type="button" className="btn btn-dark mt-2 mr-5 rounded-pill border border-light "css={css`width:50%`}>{this.getQuizWithCategory().answers[1]}</button>
        <button type="button" className="btn btn-dark mt-2 mr-5 rounded-pill border border-light "css={css`width:50%`}>{this.getQuizWithCategory().answers[2]}</button>
        <button type="button" className="btn btn-dark mt-2 mr-5 rounded-pill border border-light "css={css`width:50%`}>{this.getQuizWithCategory().answers[3]}</button>
        <div className="">
        <button type="button" className="btn btn-secondary"css={css` width:20%;margin:1% `} onClick={this.previous} disabled={this.state.count==0}>prev</button>
        <button type="button" className="btn btn-secondary"css={css` width:20%; margin:1% `} onClick={this.next} disabled={this.state.count==this.props.x-1} >next</button>
        </div>
        </div>

        </div>

      </div>
      </div>
    </div>
  )
}
}
export default Question;
