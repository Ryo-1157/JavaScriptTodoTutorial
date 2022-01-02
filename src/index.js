import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";

  //HTMLのDOMをJSで生成する時はcreateElementを使う.
  const li = document.createElement("li");
  li.className = "list-row";

  // liの中でpタグを作ってみよう。
  const p = document.createElement("p");
  p.innerText = inputText;

  // button(完了)タグを作成する。
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode.parentNode;
    completeTarget.removeChild(completeTarget.lastChild);
    const backButton = document.createElement("button");

    // button(戻す)を作成する。
    backButton.innerText = "戻す";
    backButton.className = "backButton";
    completeTarget.appendChild(backButton);
    document.querySelector("#incompleteList").removeChild(completeTarget);
    const completeArea = document.querySelector("#completeList");
    completeArea.appendChild(completeTarget);
    backButton.addEventListener("click", () => {
      const backTarget = backButton.parentNode;
      backTarget.removeChild(backButton);
      document.querySelector("#completeList").removeChild(backTarget);
      backTarget.appendChild(buttonArea);
      document.querySelector("#incompleteList").appendChild(backTarget);
    });
  });

  // button(削除)タグを作成する。
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了のリストから削除する。
    // 親要素を確認するためには、parentNodeを使う。これは複数回重ねることができる。
    const deleteTarget = deleteButton.parentNode.parentNode;
    document.querySelector("#incompleteList").removeChild(deleteTarget);
  });

  // buttonAreaタグを生成する。
  const buttonArea = document.createElement("div");
  buttonArea.className = "button_area";

  // 削除ボタンと完了ボタンをbuttonAreaに格納する。
  buttonArea.appendChild(completeButton);
  buttonArea.appendChild(deleteButton);

  // liの子要素に、inputのような各要素を入れてみる。
  li.appendChild(p);
  li.appendChild(buttonArea);

  // 未完了リストに追加する。（incompleteList）
  document.querySelector("#incompleteList").appendChild(li);
};

document.querySelector("#add-button").addEventListener("click", () => {
  onClickAdd();
});
