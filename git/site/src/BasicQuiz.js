import React from 'react'
import { useState } from "react"
import Header from './Header'
import './BasicQuiz.css'

const stardewQuestions = () => {
  
}

const BasicQuiz = () => {
  const questions = [
    {
      id: 1,
      question: "Fav Season?",
      options: [
        {text: "Spring (classic!)", points: {leah: 3, elliott: 2, alex: 1}},
        {text: "Summer (music bangs!)", points: {alex: 3, leah: 2, elliott: 1}},
        {text: "Fall (immacculate vibes)", points: {elliott:3, leah: 2, alex: 1}},
        {text: "Winter (idk i just like it :])", points: {elliott: 2, leah: 2, alex: 2}},
      ],
    },

    {
      id: 2,
      question: "fav farm?",
      options: [
        {text: "standard/classic farm", points: {alex:3, leah:2, elliott:1}},
        {text: "riverland farm", points: {leah:3,elliott:2, alex:1}},
        {text: "forest farm", points: {elliott:3, leah:2, alex:1}},
      ],
    },

    {
      id:3,
      question: "fav playstyle?",
      options: [
        {text:"mines!", points:{alex:2, elliott:1, leah: 1}},
        {text:"farming!", points: {leah:2, elliott:2, alex:1}},
        {text:"fishing!", points: {elliott:2,leah:1,alex:2}},
      ],
    },
  ];

  const stardewResults = {
    elliott: "YOU HAVE SUCH GOOD TASTE!!! ELLIOTT SUPREMECY!!! (he's my favorite guy!)\n ajskfjaslk hes my lil blorbo my babygirl light of my life the specialest boy ever!!!! &#2840;(&#2669;*&#714;&#7509;&#715;)&#2669;* &#2632;&#9825;&#8231;&#8330;&#730; <font size='1px'><br><br>(though,,, i will shamefully admit i do use a portrait mod.... i can't with his vanilla portrait :v)</font>",
    leah: "leah lover!!! <3 she's so underrated ppl really need to go talk abt her more. but anyways, you go live your best cottagecore life with your artist gf!",
    alex: "i diagnose u with himbo lover",
  };

  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [finalScore, setFinalScore] = useState(null);
  const [userSelections, setUserSelections] = useState({});

  const handleChangeAnswer = (questionId, points, optionText) => {
    setAnswers({...answers, [questionId]: points});
    setUserSelections({...userSelections, [questionId]: optionText});
  };

  const calculateResult = () => {
    const scores = {};
    Object.values(answers).forEach((points) => {
      Object.entries(points).forEach(([key, value]) => {
        scores[key] = (scores[key] || 0) + value;
      });
    });

    setFinalScore(scores);
    console.log(scores);

    const finalResult = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );
    setResult(finalResult);
  };
  // ;-; this is so complicated to read or maybe im jsut dumb
  // i miss normal js...
  // erm the map stuff is useful though! im thinking for the custom quiz stuff
  // i can just use this sort of template, i just need to figure out how to take the user input
  // and set the labels/values they want instead of preset values...

  return (
    <div>
        <Header />
      <h1>basic quiz 1 page</h1>
      <div class="quizBody">
        <h1>lil sdv quiz to guess which bachelor/ette i think u like the most!!</h1>
        <p>ermm ummm since this is a test it doesnt have everyone and uhh not all the questions have been added yet...</p>
        
        {questions.map((q) => (
        <div key={q.id}>
          <h3>{q.question}</h3>
            {q.options.map((option, index) => (
                <label key={index}>

                  <input type="radio" name={`question-${q.id}`} value={option.text} checked={userSelections[q.id] == option.text} onChange={() => handleChangeAnswer(q.id, option.points, option.text)}/>
                  {option.text}

                  <br />
                </label>
            ))}
            <p>ans... {userSelections[q.id]}</p>
            <p>scores... {JSON.stringify(answers[q.id])}</p>
            
            </div>
      ))}

      <br />
      <button onClick={calculateResult}>Submit!</button>
      
      <br />
      <br />
      
      
      {<div>Result: {result} <br /> <br /> Blurb: {stardewResults[result]} <br /> <br /> Total Points: {JSON.stringify(finalScore)}</div>}

      </div>
    
    </div>
  )
}

export default BasicQuiz
