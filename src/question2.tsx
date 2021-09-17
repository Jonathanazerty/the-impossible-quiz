import React from 'react';
import './questions.css';
import Header from './header';

const Question2 = () => {
    
        const compareUserAnswer = () => {
            console.log('hello!');
    
            const correctAnswer: string = rightAnswer();
            const input: string = (document.getElementById('input') as HTMLInputElement).value;
    
            if (correctAnswer === input) { 
                alert("Awesome! Your answer: " + input + " was correct 👏🏿 👏🏻. You can be named many things, stupid not being one of them. On to the next question");
                if (window.confirm('Are you sure you are ready for question 2 ?'))
                    {
                        window.location.href = "./question3";
                    }
                    else
                    {
                        window.location.href = "./question2";
                    }
            } else {
                alert("Bummer... You guessed " + input + ". and that's wrong 🤦🏽 🤦🏼! Please try again !");
            }
        }
    
        function rightAnswer() {
            const correctAnswer = 'tomorrow';
    
            return correctAnswer;
        }
    
    return (
        <div className="home">
        <Header />
            <p className="questions">Question 2: What is always coming, but never arrives?</p>
            <label className="answer">Your answer:</label>
            <input className="form-control input-lg" type="text" id="input" placeholder="Try to give the correct answer here..."/>
            <button className="submit" type="submit" value="Submit" onClick={compareUserAnswer}>Submit</button>
        </div>
    )
}
export {Question2};