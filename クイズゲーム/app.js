const quiz = [
  {
    question: "このクイズの製作者の血液型は次の内どれ？",
    answers: ["A型", "B型", "AB型", "O型"],
    correct: "O型"
  }, {
    question: "このクイズの製作者の星座は次の内どれ？",
    answers: ["おうし座", "ふたご座", "かに座", "しし座"],
    correct: "かに座"
  }, {
    question: "このクイズの製作者の身長は次の内どれ？",
    answers: ["170cm", "176cm", "181cm", "186cm"],
    correct: "181cm"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;


//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert("終了！あなたは" + quizLength + "問中" + score + "問正解しました！");
  }
};

//ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handleIndex <buttonLength) {
  $button[handleIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handleIndex++;
}
