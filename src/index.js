import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する。
  const inPutText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inPutText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div作成
  const div = document.createElement("div");
  div.className = "list-row";

  // li作成
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 未完了リストから削除する
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキスト取得
    const text = addTarget.firstElementChild.innerText;

    // divタグの中を初期化
    addTarget.textContent = null;

    // liタグの作成
    const li = document.createElement("li");
    li.innerText = text;

    // button(戻す)タグ作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divの子要素
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // divの子要素を完了リストに追加する
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
