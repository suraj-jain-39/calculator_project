# 🧮 Simple Calculator (AngularJS)

A modern, minimal **calculator web application** built using **HTML, CSS, and AngularJS**.
It supports basic arithmetic operations, percentage calculations, bracket handling, and a history panel.

---

## 🚀 Features

* Basic operations: `+`, `-`, `×`, `/`
* Percentage calculation (`%`)
* Smart bracket handling `()`
* Input validation (prevents invalid expressions)
* Character limit (22 characters)
* Keyboard input support via `<textarea>`
* Delete (backspace) functionality
* Calculation history panel (toggle view)
* Clean dark UI design

---

## 🎓 Leaned

Developed as a learning project for:

* AngularJS
* DOM manipulation
* Expression parsing

---

## 🛠️ Tech Stack

Frontend:
  * HTML
  * CSS
  * AngularJS

---

## 📁 Project Structure

```
├── index.html        # Main UI structure
├── style.css         # Styling and layout
├── Angular-Folder/
│   ├── angular.min.js
│   └── app.js        # Application logic (controllers)
```

---

## ⚙️ How It Works

### 1. AngularJS Controllers

* **MyController1**

  * Handles:

    * Input (`enter()`)
    * Calculation (`calculate()`)
    * Delete (`del()`)
    * Validation (character limit)
  * Uses `$scope.result` as the main state

* **MyController2**

  * Controls:

    * History panel toggle

---

### 2. Expression Handling

Before calculation, input is sanitized:

```js
$scope.result
  .replace(/x/g, '*')
  .replace(/\s+/g, '')
  .replace(/[^0-9+\-*/%().]/g, '')
```

---

### 3. Percentage Logic

```js
expression.replace(/(\d+(\.\d+)?)%/g, (match, number) => {
  return `(${number} / 100)`;
});
```

---

### 4. Evaluation

Uses JavaScript `Function` constructor:

```js
return new Function('return ' + expression)();
```

---

## 🎯 UI Highlights

* Dark themed calculator interface
* Grid-based button layout
* Slide-in history panel
* Custom scrollbar styling 

---

## 📌 Important Notes

* Input is limited to **22 characters**:

  ```js
  if ($scope.result.length > 22) { ... }
  ```
* Uses `$watch` to handle keyboard input validation 
* History is dynamically added using `innerHTML` 

---

## ⚠️ Limitations

* Uses `new Function()` for evaluation (not safe for untrusted input)
* History items are not Angular-compiled (ng-click won’t work dynamically)
* No persistent storage (history resets on refresh)

---

## 💡 Future Improvements

* Replace `innerHTML` with `$compile` for dynamic Angular binding
* Add localStorage for history persistence
* Add keyboard shortcuts (Enter = calculate)
* Improve error handling UI (replace `alert()`)
* Add scientific functions (sqrt, power, etc.)

---

## 🛠️ How to Run

1. Download or clone the repository
   
   ```
   git clone https://github.com/oswal-suraj-39/calculator_project.git
   ```
   
3. Open `index.html` in your browser
4. Start calculating!

---

## 📸 Preview

Simple, responsive calculator with history panel and clean UI.

---

## 👨‍💻 Author

**Oswal Suraj**
📧 [oswalsuraj369@gmail.com](mailto:oswalsuraj369@gmail.com)

---

## 📄 License

Free to use for learning and personal projects.
