import React from 'react';
import './Questions.css';

function Questions() {
  // Implement form submission logic here

  return (
    <div className="questions-page">
      <h1>Predefined Questions</h1>
      <form id="questions-form">
      <div className="question">
          <h3>Question 1</h3>
          <label htmlFor="question1">What should I call you? </label>
          <input name="question1" rows="4" cols="50" required />
        </div>
        <div className="question">
          <h3>Question 2</h3>
          <label htmlFor="question3">How is the weather today? (Multiple Choice):</label>
          <div className="radio-container">
            <input type="radio" name="question3" value="option1" required /><label className="radio-label">Option 1</label>
            <input type="radio" name="question3" value="option2" /><label className="radio-label">Option 2</label>
            <input type="radio" name="question3" value="option3" /><label className="radio-label">Option 3</label>
          </div>
        </div>
        <div className="question">
          <h3>Question 3</h3>
          <label htmlFor="question4">Are you busy recently? (Select Dropdown):</label>
          <select name="question4" required>
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="question">
          <h3>Question 4</h3>
          <label htmlFor="question1">How do you feel today? </label>
          <textarea name="question1" rows="4" cols="50" required />
        </div>
        <div className="question">
          <h3>Question 5</h3>
          <label htmlFor="question2">What's the most memorible thing that happended yesterday? </label>
          <textarea name="question2" rows="4" cols="50" required />
        </div>
        <input className="submit-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Questions;
