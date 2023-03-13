import React, { useState,useRef } from "react";
import { useDispatch,useSelector} from 'react-redux'
import { askQuestion } from '../../actions/question'

import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from "../Question/Question";
// import { Plus } from '@fortawesome/free-solid-svg-icons'
// import { Minus } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };
//PostQuestion
const dispatch = useDispatch()

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [ questionTitle, setQuestionTitle ] = useState('')
const [ questionBody, setQuestionBody ] = useState('')
// const [ questionTags, setQuestionTags ] = useState('')
// const questionList = useSelector((state) => state.questionsReducer);

const formRef = useRef(null);

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(askQuestion({name, email, questionTitle, questionBody}));
  // console.log(e);
}
function handleReset() {
  formRef.current.reset();
}

//Contact
const form = useRef();
const[done, setDone] = useState(false);
const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_99d0e4q', 'template_rr1brs9', form.current, 'dWZkcnfsjWTsLOzdI')
    .then((result) => {
        console.log(result.text);
        form.current.reset();
        // setTimeout(()=>{
        //     setDone(true);
        // },2000)
        setDone(true);
    }, (error) => {
        console.log(error.text);
    });
};

const notify = () => toast("Thank You Contacting me");

var questionList=[{
questionTitle: "What is JS",
        questionBody: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
}

]

  return (
    // <>
    // {
    //   questionList.data === null ?
    //   <h1>Loading...</h1> :
    <>
       
        <div className="main-div">
          {/* <Question questionList={questionList}/> */}
          <h3>FAQ</h3>
           {
          questionList.map((question) =>(
          <div className="que-ans">
            <p className="p1">{question.questionTitle}</p>
            <p className="p2">
              {showText && (
                <div className="span2">
                {question.questionBody}
                </div>
              )}
            </p>
            <span className="main-span" onClick={handleClick}>
              {showText ? (
                <i
                  class="fas fa-minus"
                  style={{ position: "relative", bottom: "40px" }}
                ></i>
              ) : (
                <i class="fas fa-plus"></i>
              )}
            </span>
          </div>
          ))} 

          {/* FORM  */}
          <div className="form-main">
            <h2 className="f-h2">Ask you Question</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="f-main">
                <div className="f1">
                  <input type="text" id='name' name='name' placeholder="Name" onChange={(e) => {setName(e.target.value)}} required/>
                  <input type="email" name="email" id="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} required/>
                </div>
                <input type="text" placeholder="Question" onChange={(e) => {setQuestionTitle(e.target.value)}}/>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"onChange={(e) => {setQuestionBody(e.target.value)}}

                ></textarea>
                <button className="btn2" type="submit" onClick={handleReset}>
                  Submit
                  <i
                    class="fad fa-angle-double-right"
                    style={{ color: "black", paddingLeft: "12px" }}
                  ></i>
                </button>
              </div>
              {/* <input type="submit" value="Submit" /> */}
            </form>
          </div>

          {/* CONTACT  */}
          <div className="main-contact">
            <h1 className="c-head">CONTACT US</h1>
            <div className="li-items">
              <ul>
                <li>General Enquiry</li>
                <li>Business</li>
                <li>Investor</li>
                <li>Media</li>
              </ul>
            </div>
            <div className="c-head1">
              <h3>THANKS FOR YOUR INTEREST IN REDPHANTOM</h3>
              <p >
                Please provide your most valuable information, so we can help you
                beter!
              </p>
              <form ref={form} onSubmit={sendEmail}>
              <div className="c-form">
                <input type="text" name="user_name" placeholder="Full Name" required/>
                <input type="email" name="user_email" placeholder="Email ID" required/>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Query"
                ></textarea>
                <button className="btn3" type="submit" onClick={notify}>Send</button>
                {/* <span style={{color:"white"}}>{done && "Thanks for contacting me!"}</span> */}
              </div>
              <ToastContainer 
              theme="dark"
              />
              </form>
            </div>
          </div>
        </div>
        {/* // ))
        //       } */}
     {/* </> */}
 </>
  );
};

export default Home;
