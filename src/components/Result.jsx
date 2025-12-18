const Result = ({score, totalQuestion, restart}) => {
    return(
        <div>
            <h2>Kết quả</h2>
            <p className="result">Bạn trả lời đúng {score}/{totalQuestion} câu 👏👏👏</p>
            <div className="resultButtonsContainer">
                <button className="result-button">Xem lại</button>
                <button className="result-button" onClick={restart}>Làm lại</button>
            </div>
        </div>
    )
};

export default Result;