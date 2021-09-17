import React from 'react';
import './questions.css';
import Header from './header';

const Question7 = () => {
    
        const compareUserAnswer = () => {
    
            const correctAnswer: string = rightAnswer();
            const input: string = (document.getElementById('input') as HTMLInputElement).value;
    
            if (correctAnswer === input) { 
                alert("Awesome! Your answer: " + input + " was correct 👏🏿 👏🏻. You can be named many things, stupid not being one of them. On to the next question");
                if (window.confirm('Are you sure you are ready for question 2 ?'))
                    {
                        window.location.href = "./question8";
                    }
                    else
                    {
                        window.location.href = "./question7";
                    }
            } else {
                alert("Bummer... You guessed " + input + ". and that's wrong 🤦🏽 🤦🏼! Please try again !");
            }
        }
    
        function rightAnswer() {
            const correctAnswer = 'time';
    
            return correctAnswer;
        }
    
        return (
            <div className="home">
            <Header />
                <p className="questions">Question 7: What flies without wings?</p>
                <label className="answer">Your answer:</label>
                <input className="form-control input-lg" type="text" id="input" placeholder="Try to give the correct answer here..."/>
                <button className="submit" type="submit" value="Submit" onClick={compareUserAnswer}>Submit</button>
            </div>
        )
}
export {Question7};