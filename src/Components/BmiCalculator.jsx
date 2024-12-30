import React, { useState } from 'react';
import '../App.css'

function BmiCalculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [msg, setMsg] = useState('');

    const calculateBMI = (e) => {
        e.preventDefault();
        if (weight > 0 && height > 0) {
            const heightInMeters = height / 100; 
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2); 
            setBmi(bmiValue);
            getMsg(bmiValue); 
        } else {
            setMsg('Please enter valid weight and height.');
        }
    };

    const getMsg = (bmi) => {
        if (bmi < 18.5) {
            setMsg('You are underweight');
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            setMsg('You have a normal weight');
        } else if (bmi >= 25 && bmi <= 29.9) {
            setMsg('You are overweight');
        } else {
            setMsg('You are obese');
        }
    };

    const resetForm = () => {
        setWeight('');
        setHeight('');
        setBmi(null);
        setMsg('');
    };

    return (
        <div className="bmi-container">
            <div className="bmi-card animate-card">
                <h1 className="bmi-title">BMI Calculator</h1>
                <form onSubmit={calculateBMI} className="bmi-form">
                    <label>Weight (kg):</label>
                    <input
                        type="number"
                        value={weight}
                        placeholder="Enter your weight"
                        onChange={(e) => setWeight(Number(e.target.value))}
                        className="bmi-input"
                    />
                    <label>Height (cm):</label>
                    <input
                        type="number"
                        value={height}
                        placeholder="Enter your height"
                        onChange={(e) => setHeight(Number(e.target.value))}
                        className="bmi-input"
                    />
                    <div className="button-group">
                        <button type="submit" className="calculate-btn">Calculate BMI</button>
                        <button type="button" onClick={resetForm} className="reset-btn">Reset</button>
                    </div>
                </form>
                {bmi && (
                    <div className="bmi-result animate-result">
                        <h2>Your BMI is: {bmi}</h2>
                        <p>{msg}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BmiCalculator;
