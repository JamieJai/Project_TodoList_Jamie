# 🌈 Todos 앱

> 해당 레포지토리는 교육용으로 만들어졌으며 어떠한 상업적 용도를 취하지 않습니다.

이 프로젝트는 사용자가 일상의 할 일을 기록하고 관리할 수 있는 간단한 웹 기반 애플리케이션입니다.

## 🚀 핵심 기능 및 구현 방법

### 1️⃣ 할 일 항목 추가

사용자는 새로운 할 일을 입력하면 목록에 새 항목이 추가됩니다. 이 기능은 JavaScript를 이용하여 구현되었으며, HTML의 form 요소와 연동하여 작동합니다. 사용자가 '새로운 TODO 추가하기' 버튼을 클릭하면, `prompt` 대화상자가 나타나고 이를 통해 입력을 받습니다.

```javascript
document.getElementById('newTodo').addEventListener('click', function() {
    const todoText = prompt('새로운 TODO를 추가하세요:');
});
```
<br>

### 2️⃣ 할 일 항목 수정 및 삭제
목록의 각 항목 옆에는 '수정' 및 '삭제' 버튼이 있어 사용자가 기존의 할 일을 수정하거나 삭제할 수 있습니다. '수정' 버튼은 클릭 시, 해당 항목의 내용을 수정할 수 있는 prompt 대화상자를 띄웁니다. '삭제' 버튼은 해당 항목을 바로 목록에서 제거합니다. 이러한 기능들은 JavaScript 이벤트 리스너를 통해 구현되었습니다.

```javascript
function editTodo(e) {
    const li = e.target.closest('li');
    const prevText = li.querySelector('span').innerText;
    const newText = prompt("TODO 내용을 수정하세요:", prevText);
    if (newText && newText.trim()) {
        li.querySelector('span').innerText = newText.trim();
        saveTodo();
    }
}

function deleteTodo(e) {
    const li = e.target.closest('li');
    li.parentNode.removeChild(li);
    saveTodo();
}
```
<br>

### 3️⃣ 데이터 저장
사용자가 추가, 수정, 삭제한 할 일 항목들은 웹 브라우저의 로컬 스토리지에 저장되므로, 웹 페이지를 새로고침하거나 재방문해도 이전의 상태를 그대로 유지할 수 있습니다. 이 기능은 JavaScript의 localStorage 객체를 이용하여 구현되었습니다. 할 일 항목들의 상태가 변경될 때마다, 변경된 상태가 로컬 스토리지에 자동으로 저장됩니다.

```javascript
function saveTodo() {
    const todos = [];
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => todos.push(item.querySelector('span').innerText));
    localStorage.setItem('todos', JSON.stringify(todos));
}
```
<br>

### 📘 사용 방법
---
이 앱을 사용하려면 웹 브라우저에서 index.html 파일을 열어 주세요. 새로운 할 일을 추가하려면 '새로운 TODO 추가하기' 버튼을 클릭하고, 수정하거나 삭제하려면 할 일 목록 옆의 '수정' 또는 '삭제' 버튼을 사용하세요.

<br>

### 🖥️ 구현화면
---
<br>
<img src=Result.png>