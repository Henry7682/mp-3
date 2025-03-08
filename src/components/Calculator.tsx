import { useState } from "react";
import goldBackground from "../assets/gold.jpg";

function Calculator() {
    const [num1, setNum1] = useState<number | "">("");
    const [num2, setNum2] = useState<number | "">("");
    const [result, setResult] = useState<string>("Answer:");

    const calculate = (operation: string) => {
        const n1 = Number(num1);
        const n2 = Number(num2);

        if (isNaN(n1) || isNaN(n2)) {
            setResult("Invalid Input");
            return;
        }

        let res: number | string;

        switch (operation) {
            case "+":
                res = n1 + n2;
                break;
            case "-":
                res = n1 - n2;
                break;
            case "*":
                res = n1 * n2;
                break;
            case "/":
                res = n2 === 0 ? "CANNOT DIVIDE BY ZERO!!!" : n1 / n2;
                break;
            case "^":
                res = Math.pow(n1, n2);
                break;
            default:
                res = "Error";
        }

        setResult(`Answer: ${res}`);
    };

    const clearAll = () => {
        setNum1("");
        setNum2("");
        setResult("Answer:");
    };

    return (
        <div className="calc" style={{ backgroundImage: `url(${goldBackground})` }}>
            <label htmlFor="first-number">First num:</label>
            <input
                type="number"
                id="first-number"
                value={num1}
                onChange={(e) => setNum1(e.target.value === "" ? "" : Number(e.target.value))}
            />
            <label htmlFor="second-number">Second num:</label>
            <input
                type="number"
                id="second-number"
                value={num2}
                onChange={(e) => setNum2(e.target.value === "" ? "" : Number(e.target.value))}
            />

            <div className="buttons">
                <button onClick={() => calculate("+")}> + </button>
                <button onClick={() => calculate("-")}> - </button>
                <button onClick={() => calculate("*")}> * </button>
                <button onClick={() => calculate("/")}> / </button>
                <button onClick={() => calculate("^")}>^</button>
                <button onClick={clearAll}>C</button>
            </div>

            <p id="output" style={{ color: result.includes("-") ? "red" : "black" }}>{result}</p>
        </div>
    );
}

export default Calculator;
