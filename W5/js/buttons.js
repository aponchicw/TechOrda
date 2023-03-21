let calculator_buttons = [
    {
        name: "rad",
        symbol: "Rad",
        formula: false,
        type: "key",
        engineering: true,
    },
    {
        name: "deg",
        symbol: "Deg",
        formula: false,
        type: "key",
        engineering: true,
    },
    {
        name: "square-root",
        symbol: "√",
        formula: "Math.sqrt",
        type: "math_function",
        engineering: true,
    },
    {
        name: "square",
        symbol: "x²",
        formula: "POWER",
        type: "math_function",
        engineering: true,
    },
    {
        name: "open-parenthesis",
        symbol: "(",
        formula: "(",
        type: "number",
        engineering: false,
    },
    {
        name: "close-parenthesis",
        symbol: ")",
        formula: ")",
        type: "number",
        engineering: false,
    },
    {
        name: "clear",
        symbol: "AC",
        formula: false,
        type: "key",
        engineering: false,
    },
    {
        name: "delete",
        symbol: "C",
        formula: false,
        type: "key",
        engineering: false,
    },
    {
        name: "pi",
        symbol: "π",
        formula: "Math.PI",
        type: "number",
        engineering: true,
    },
    {
        name: "cos",
        symbol: "cos",
        formula: "trigo(Math.cos,",
        type: "trigo_function",
        engineering: true,
    },
    {
        name: "sin",
        symbol: "sin",
        formula: "trigo(Math.sin,",
        type: "trigo_function",
        engineering: true,
    },
    {
        name: "tan",
        symbol: "tan",
        formula: "trigo(Math.tan,",
        type: "trigo_function",
        engineering: true,
    },
    {
        name: "7",
        symbol: 7,
        formula: 7,
        type: "number",
        engineering: false,
    },
    {
        name: "8",
        symbol: 8,
        formula: 8,
        type: "number",
        engineering: false,
    },
    {
        name: "9",
        symbol: 9,
        formula: 9,
        type: "number",
        engineering: false,
    },
    {
        name: "division",
        symbol: "÷",
        formula: "/",
        type: "operator",
        engineering: false,
    },
    {
        name: "e",
        symbol: "e",
        formula: "Math.E",
        type: "number",
        engineering: true,
    },
    {
        name: "acos",
        symbol: "acos",
        formula: "inv_trigo(Math.acos,",
        type: "trigo_function",
        engineering: true,
    },
    {
        name: "asin",
        symbol: "asin",
        formula: "inv_trigo(Math.asin,",
        type: "trigo_function",
        engineering: true,
    },
    {
        name: "atan",
        symbol: "atan",
        formula: "inv_trigo(Math.atan,",
        type: "trigo_function",
        engineering: true,
    },
    {
        name: "4",
        symbol: 4,
        formula: 4,
        type: "number",
        engineering: false,
    },
    {
        name: "5",
        symbol: 5,
        formula: 5,
        type: "number",
        engineering: false,
    },
    {
        name: "6",
        symbol: 6,
        formula: 6,
        type: "number",
        engineering: false,
    },
    {
        name: "multiplication",
        symbol: "×",
        formula: "*",
        type: "operator",
        engineering: false,
    },
    {
        name: "factorial",
        symbol: "x!",
        formula: "FACTORIAL",
        type: "math_function",
        engineering: true,
    },
    {
        name: "exp",
        symbol: "exp",
        formula: "Math.exp",
        type: "math_function",
        engineering: true,
    },
    {
        name: "ln",
        symbol: "ln",
        formula: "Math.log",
        type: "math_function",
        engineering: true,
    },
    {
        name: "log",
        symbol: "log",
        formula: "Math.log10",
        type: "math_function",
        engineering: true,
    },
    {
        name: "1",
        symbol: 1,
        formula: 1,
        type: "number",
        engineering: false,
    },
    {
        name: "2",
        symbol: 2,
        formula: 2,
        type: "number",
        engineering: false,
    },
    {
        name: "3",
        symbol: 3,
        formula: 3,
        type: "number",
        engineering: false,
    },
    {
        name: "subtraction",
        symbol: "–",
        formula: "-",
        type: "operator",
        engineering: false,
    },
    {
        name: "power",
        symbol: "ₓʸ",
        formula: "POWER",
        type: "math_function",
        engineering: true,
    },
    {
        name: "ANS",
        symbol: "ANS",
        formula: "ans",
        type: "number",
        engineering: true,
    },
    {
        name: "percent",
        symbol: "%",
        formula: "/100",
        type: "number",
        engineering: true,
    },
    {
        name: "comma",
        symbol: ".",
        formula: ".",
        type: "number",
        engineering: true,
    },
    {
        name: "0",
        symbol: 0,
        formula: 0,
        type: "number",
        engineering: false,
    },
    {
        name: "calculate",
        symbol: "=",
        formula: "=",
        type: "calculate",
        engineering: false,
    },
    {
        name: "addition",
        symbol: "+",
        formula: "+",
        type: "operator",
        engineering: false,
    },
];
export default calculator_buttons;
