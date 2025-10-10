// input type="text"の値を取得する
const inputText = document.querySelector('#inputText');
const inputTextResult = document.querySelector('#inputTextResult');

inputText.addEventListener("change", (e) => {
    // ユーザーが入力した内容を取得する
    const value = e.target.value;
    inputTextResult.innerHTML = value;
});

// textareaの値を取得する
const textArea = document.querySelector('#textArea');
const textAreaResult = document.querySelector('#textAreaResult');

textArea.addEventListener("change", (e) => {
    // ユーザーが入力した内容を取得する
    const value = e.target.value;
    textAreaResult.innerHTML = value.split('\n').join('<br>');
});

// checkboxの値を取得する
const checkbox = document.querySelector('#checkbox');
const checkboxResult = document.querySelector('#checkboxResult');

checkbox.addEventListener("change", (e) => {
    // ユーザーがチェックしたかどうかを取得する
    const value = e.target.checked;
    checkboxResult.innerHTML = value;
});