import init_buttons_grid from "./init_buttons.js";
import handleOnMouseMove from "./glow_effect.js";
import calculator_buttons from "./buttons.js";
import gamma from "./gamma.js";
import search from "./search.js";

const keyboard = document.querySelector("#keyboard");
const output_operation_element = document.querySelector(".output");
const output_result_element = document.querySelector(".input");

init_buttons_grid(keyboard);

const keys = document.querySelectorAll(".key");
start_glow_effect(keys);

const OPERATORS = ["+", "-", "*", "/"];
const POWER = "POWER";
const FACTORIAL = "FACTORIAL";

const data = {
    operation: [],
    formula: [],
};

let ans = 0;
let RADIAN = true;
const rad_btn = document.getElementById("rad");
const deg_btn = document.getElementById("deg");

function start_glow_effect(keys) {
    for (const key of keys) {
        key.onmousemove = (e) => handleOnMouseMove(e);
    }
}

rad_btn.classList.add("active-angle");

function angleToggler() {
    rad_btn.classList.toggle("active-angle");
    deg_btn.classList.toggle("active-angle");
}

keyboard.addEventListener("click", (event) => {
    const target_button = event.target;
    calculator_buttons.forEach((button) => {
        if (button.name === target_button.id) {
            calculator(button);
        }
    });
});

function calculator(button) {
    if (button.type == "operator") {
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
    } else if (button.type === "number") {
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
    } else if (button.type === "trigo_function") {
        data.operation.push(button.symbol + "(");
        data.formula.push(button.formula);
    } else if (button.type === "math_function") {
        let symbol, formula;

        if (button.name === "factorial") {
            symbol = "!";
            formula = button.formula;
            data.operation.push(symbol);
            data.formula.push(formula);
        } else if (button.name === "power") {
            symbol = "^(";
            formula = button.formula;
            data.operation.push(symbol);
            data.formula.push(formula);
        } else if (button.name === "square") {
            symbol = "^(";
            formula = button.formula;

            data.operation.push(symbol);
            data.formula.push(formula);

            data.operation.push("2)");
            data.formula.push("2)");
        } else {
            symbol = button.symbol + "(";
            formula = button.formula + "(";
            data.operation.push(symbol);
            data.formula.push(formula);
        }
    } else if (button.type === "key") {
        if (button.name === "clear") {
            data.operation = [];
            data.formula = [];
            updateOutputResult(0);
        } else if (button.name === "delete") {
            data.operation.pop();
            data.formula.pop();
        } else if (button.name === "rad") {
            RADIAN = true;
            angleToggler();
        } else if (button.name === "deg") {
            RADIAN = false;
            angleToggler();
        }
    } else if (button.type === "calculate") {
        let formula_string = data.formula.join("");

        let POWER_SEARCH_RESULT = search(data.formula, POWER);
        let FACTORIAL_SEARCH_RESULT = search(data.formula, FACTORIAL);

        const BASES = powerBaseGetter(data.formula, POWER_SEARCH_RESULT);
        BASES.forEach((base) => {
            let toReplace = base + POWER;
            let replacement = "Math.pow(" + base + ",";
            formula_string = formula_string.replace(toReplace, replacement);
        });

        const NUMBERS = factorialNumberGetter(
            data.formula,
            FACTORIAL_SEARCH_RESULT
        );

        NUMBERS.forEach((factorial) => {
            formula_string = formula_string.replace(
                factorial.toReplace,
                factorial.replacement
            );
        });

        console.log(formula_string);

        let result;
        try {
            result = eval(formula_string);
        } catch (e) {
            if (e instanceof SyntaxError) {
                result = "Syntax Error!";
                updateOutputResult(result);
                return;
            }
        }
        ans = result;
        data.operation = [result];
        data.formula = [result];

        updateOutputResult(result);
        return;
    }

    updateOutputOperation(data.operation.join(""));
}

function factorialNumberGetter(formula, FACTORIAL_SEARCH_RESULT) {
    let numbers = [];
    let factorial_sequence = 0;
    FACTORIAL_SEARCH_RESULT.forEach((factorial_index) => {
        let number = [];
        let next_index = factorial_index + 1;
        let next_input = formula[next_index];

        if (next_input === FACTORIAL) {
            factorial_sequence++;
            return;
        }
        let first_factorial_index = factorial_index - factorial_sequence;
        let previous_index = first_factorial_index - 1;
        let parenthesis_count = 0;

        while (previous_index >= 0) {
            if (formula[previous_index] == "(") {
                parenthesis_count--;
            }
            if (formula[previous_index] == ")") {
                parenthesis_count++;
            }
            let is_operator = false;
            OPERATORS.forEach((OPERATOR) => {
                if (formula[previous_index] == OPERATOR) {
                    is_operator = true;
                }
            });
            if (is_operator && parenthesis_count == 0) {
                break;
            }

            number.unshift(formula[previous_index]);
            previous_index--;
        }
        let number_str = number.join("");
        const factorial = "factorial(",
            close_parenthesis = ")";
        let times = factorial_sequence + 1;
        let toReplace = number_str + FACTORIAL.repeat(times);
        let replacement =
            factorial.repeat(times) +
            number_str +
            close_parenthesis.repeat(times);

        numbers.push({ toReplace: toReplace, replacement: replacement });
        factorial_sequence = 0;
    });

    return numbers;
}

function powerBaseGetter(formula, POWER_SEARCH_RESULT) {
    let power_bases = [];
    POWER_SEARCH_RESULT.forEach((power_index) => {
        let base = [];
        let parenthesis_count = 0;
        let previous_index = power_index - 1;

        while (previous_index >= 0) {
            if (formula[previous_index] == "(") {
                parenthesis_count--;
            }
            if (formula[previous_index] == ")") {
                parenthesis_count++;
            }
            let is_operator = false;
            OPERATORS.forEach((OPERATOR) => {
                if (formula[previous_index] == OPERATOR) {
                    is_operator = true;
                }
            });
            let is_power = formula[previous_index] == POWER;
            if ((is_operator && parenthesis_count == 0) || is_power) {
                break;
            }

            base.unshift(formula[previous_index]);
            previous_index--;
        }
        power_bases.push(base.join(""));
    });
    return power_bases;
}

function updateOutputOperation(operation) {
    output_operation_element.innerHTML = operation;
}

function updateOutputResult(operation) {
    output_result_element.innerHTML = operation;
}

function trigo(callback, angle) {
    if (!RADIAN) {
        angle = (angle * Math.PI) / 180;
    }
    return callback(angle);
}

function inv_trigo(callback, value) {
    let angle = callback(value);
    if (!RADIAN) {
        angle = (angle * 180) / Math.PI;
    }
    return angle;
}

function factorial(number) {
    if (number % 1 !== 0) {
        gamma(number + 1);
    }
    if (number === 0 || number === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
        if (result === Infinity) {
            return Infinity;
        }
    }
    return result;
}
