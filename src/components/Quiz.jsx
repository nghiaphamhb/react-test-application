import { useState } from "react";

const quizData = [
  {
    question: "Biến nào sau đây là hợp lệ trong JavaScript?",
    options: ["1variable", "_variable", "var-name", "var name"],
    answer: "_variable",
  },
  {
    question:
      "Trong JavaScript, kiểu dữ liệu nào sau đây là kiểu dữ liệu nguyên thủy (primitive)?",
    options: ["object", "array", "string", "function"],
    answer: "string",
  },
  {
    question:
      "Thuật toán sắp xếp nào sau đây có độ phức tạp trung bình là O(n log n)?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Linear Sort"],
    answer: "Merge Sort",
  },
  {
    question: "Kết quả của `typeof null` trong JavaScript là gì?",
    options: ["'null'", "'undefined'", "'object'", "'number'"],
    answer: "'object'",
  },
  {
    question: "Bộ nhớ Stack dùng để làm gì?",
    options: [
      "Lưu trữ dữ liệu dạng hàng đợi",
      "Lưu trữ các lời gọi hàm (function calls)",
      "Lưu ảnh",
      "Lưu video",
    ],
    answer: "Lưu trữ các lời gọi hàm (function calls)",
  },
  {
    question: "Toán tử nào so sánh nghiêm ngặt giá trị và kiểu dữ liệu?",
    options: ["==", "===", "!=", "="],
    answer: "===",
  },
  {
    question: "JSON là viết tắt của gì?",
    options: [
      "Java Syntax Object Notation",
      "JavaScript Object Notation",
      "JavaScript Online Network",
      "Java Server Object Notation",
    ],
    answer: "JavaScript Object Notation",
  },
  {
    question:
      "Cấu trúc dữ liệu nào hoạt động theo nguyên tắc FIFO (First In First Out)?",
    options: ["Stack", "Queue", "Array", "Linked List"],
    answer: "Queue",
  },
  {
    question: "Câu lệnh nào in ra nội dung trong console trình duyệt?",
    options: ["print()", "console.log()", "echo()", "show()"],
    answer: "console.log()",
  },
  {
    question: "Khi bạn viết `let x;` trong JavaScript, giá trị ban đầu của x là gì?",
    options: ["null", "0", "undefined", "false"],
    answer: "undefined",
  },
  {
    question: "HTML là gì?",
    options: [
      "Ngôn ngữ lập trình để xử lý logic",
      "Ngôn ngữ đánh dấu để tạo cấu trúc website",
      "Framework của JavaScript",
      "Trình duyệt web",
    ],
    answer: "Ngôn ngữ đánh dấu để tạo cấu trúc website",
  },
  {
    question: "Trong thuật toán, Big O dùng để đo gì?",
    options: [
      "Tốc độ mạng",
      "Thời gian load ảnh",
      "Độ phức tạp của thuật toán",
      "Dung lượng RAM máy tính",
    ],
    answer: "Độ phức tạp của thuật toán",
  },
];


const Quiz = () => {
    const [optionSelected, setOptionSelected] = useState(""); // react hook
    const [userAnswers, setUserAnswers] = useState(Array.from( {length: quizData.length} ));

    const handleSelectedOption = (option, index) => {
        setOptionSelected(option);  // callback: optionSelected = option

        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = index;
        setUserAnswers(newUserAnswers);
        // console.log(newUserAnswers);  // debugger
    };

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const goBack = () => {
      if(currentQuestion > 0){
        setCurrentQuestion((prev) => prev - 1);
      };
      // lấy index của answer từ trong array đã lưu 
      const indexAnswer = Number(userAnswers[currentQuestion - 1]);
      // lấy answer đã chọn nếu có 
      const pastOptionSelected = quizData[currentQuestion - 1].options[indexAnswer];

      if(indexAnswer !== undefined){
        setOptionSelected(pastOptionSelected);
      } else {
        setOptionSelected("");
      }

      } 

    const goNext = () => {
      setCurrentQuestion((prev) => prev + 1); // sau khi ra khỏi hàm goNext: prev' = prev + 1 

      // lấy index của answer từ trong array đã lưu 
      const indexAnswer = Number(userAnswers[currentQuestion + 1]);
      // lấy answer đã chọn nếu có 
      const pastOptionSelected = quizData[currentQuestion + 1].options[indexAnswer];

      if(indexAnswer !== undefined){
        setOptionSelected(pastOptionSelected);
      } else {
        setOptionSelected("");
      }
    };

    return (<div>
        <h2>Câu hỏi {currentQuestion + 1}</h2>
        <p className="question">{quizData[currentQuestion].question}</p>

        {quizData[currentQuestion].options.map((op, index) => (
            <button 
            key={op}
            className={`option ${optionSelected === op ? "selected" : "" }`}
            disabled={!!optionSelected && optionSelected !== op}
            onClick={() => handleSelectedOption(op, index)}>{op}</button>
        ))}


        {
            optionSelected ? (optionSelected === quizData[currentQuestion].answer ? 
            (
                <p className="correct-answer">
                    Câu trả lời của bạn chính xác
                </p>
            )
            :
            (
                <p className="incorrect-answer">
                    Câu trả lời của bạn sai
                </p>
            ))
            :
            ("")
        }

        <div className="nav-buttons">
            <button onClick={goBack}>Quay lại</button>
            <button onClick={goNext}>Kế tiếp</button>
        </div>
    </div>);
};

export default Quiz;