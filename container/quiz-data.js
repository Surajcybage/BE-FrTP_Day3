/** @jsxImportSource @emotion/react */
import 'bootstrap/dist/css/bootstrap.min.css';
import { jsx, css } from '@emotion/react';
import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { selectImage } from '../action';


//class component
class QuizData extends React.Component{
  constructor(){
    super();
    this.state={
      count:0
    };
  }

  next=()=>{
    this.setState({count :this.state.count+1});
    console.log(this.state.count);

  }
  previous=()=>{
    this.setState({count :this.state.count-1})
    console.log(this.state.count);
  }

    renderList() {
        return this.props.quiz.map((quiz) => {
            return (
                // <li key={quiz.questionId}
                // >
                    <div className="container ">

<div className="card border border-light text-white bg-dark ">
<div className="card-body">
<div className="row justify-content-md-center">
  <div className="col text-center">
  <h5 className="card-title "css={css` font-size:30px `} >Question:{quiz.questionId}</h5>
  <p className="card-text font-italic "css={css` font-size:40px; `}>{quiz.question}</p>
  </div>
  <div className="col">
<button type="button" className="btn btn-dark mt-2 mr-5 rounded-pill border border-light "css={css`width:50%`}>{quiz.answers[0]}</button>
<button type="button" className="btn btn-dark mt-2 mr-5 rounded-pill border border-light "css={css`width:50%`}>{quiz.answers[1]}</button>
<button type="button" className="btn btn-dark mt-2 mr-5 rounded-pill border border-light "css={css`width:50%`}>{quiz.answers[2]}</button>
<button type="button" className="btn btn-dark mt-2 mr-5 rounded-pill border border-light "css={css`width:50%`}>{quiz.answers[3]}</button>
<div className="">
        <button type="button" className="btn btn-secondary"css={css` width:20%;margin:1% `} onClick={this.previous} disabled={this.state.count==0}>prev</button>
        <button type="button" className="btn btn-secondary"css={css` width:20%; margin:1% `} onClick={this.next} disabled={this.state.count==this.props.x-1} >next</button>
        </div>
</div>

</div>

</div>
</div>
</div>
                // </li>
            );
        });
    }

    render(){
       console.log(this.props.quiz);
      return(
        <>
            {this.renderList()}
        </>
        );
    }


}

function mapStateToProps(state){
    return{
             quiz: state.quiz
     };
}



export default connect(mapStateToProps)(QuizData);
