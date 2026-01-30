import React, { useState, useEffect, useRef } from 'react';
import Die from './components/Die';
import { nanoid } from 'nanoid';
import './App.css';
import Confetti from 'react-confetti';

function App() {
    const [dice, setDice] = useState(() => generateAllNewDice());
    const [rolls, setRolls] = useState(0);
    const [time, setTime] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);

    const timerRef = useRef(null);
    const buttonRef = useRef(null);

    // SAFE win condition – prevents crash if dice is empty or dice[0] undefined
    const allHeld = dice.every(die => die?.isHeld === true);
    const firstValue = dice[0]?.value;
    const allSame = dice.length >= 1 && dice.every(die => die?.value === firstValue);
    const gameWon = allHeld && allSame;

    // Focus "New Game" button when won
    useEffect(() => {
        if (gameWon && buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [gameWon]);

    // Timer logic
    useEffect(() => {
        if (gameStarted && !gameWon) {
            timerRef.current = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        }

        // Cleanup
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [gameStarted, gameWon]);

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }));
    }

    function rollDice() {
        if (gameWon) {
            // New Game – reset everything
            setDice(generateAllNewDice());
            setRolls(0);
            setTime(0);
            setGameStarted(false);
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
            return;
        }

        // Normal roll
        setDice(prevDice =>
            prevDice.map(die =>
                die.isHeld
                    ? die
                    : { ...die, value: Math.ceil(Math.random() * 6) }
            )
        );

        setRolls(prev => prev + 1);

        // Start timer on first real roll
        if (!gameStarted) {
            setGameStarted(true);
            setTime(0);
        }
    }

    function holdDice(id) {
        setDice(prevDice =>
            prevDice.map(die =>
                die.id === id ? { ...die, isHeld: !die.isHeld } : die
            )
        );
    }

    const diceElements = dice.map(dieObj => (
        <Die
            key={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            holdDice={() => holdDice(dieObj.id)}
        />
    ));

    return (
        <main>
            {gameWon && <Confetti />}

            <h1 className="tenzie-header">TENZIES</h1>

            <p className="instructions">
                Roll until all dice are the same. Click each die to freeze it at
                its current value between rolls.
            </p>

            <p className="stats">
                Rolls: <strong>{rolls}</strong> | Time: <strong>{time} sec</strong>
            </p>

            <div className="dice-container">{diceElements}</div>

            <button
                ref={buttonRef}
                className="roll-dice"
                onClick={rollDice}
            >
                {gameWon ? "New Game" : "Roll"}
            </button>
        </main>
    );
}

export default App;