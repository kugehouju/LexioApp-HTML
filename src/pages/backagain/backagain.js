// src/pages/dictionary/backagain.js
function Backagain() {
  return `
  <div class="BackAgainPage">
    <div class="FailedQuiz">
        <h1>最近の間違いを直そう。</h1>
          <div class="solid"></div>
        <h2>間違い 2個</h2>
          <div class="FailedList">
            <p>次の単語に一致するものはどれですか？</p>
            <p><span>シームレス<span></p>
          <div class="solid"></div>
            <p>文章を読み、答えてください。</p>
          </div>  
    </div>
    <button><a  class="StartBtn" href="../../../src/pages/backagainquiz/quiz1/quiz1.html">回答する</a></button>
  </div>    
`;
}

export default Backagain;
