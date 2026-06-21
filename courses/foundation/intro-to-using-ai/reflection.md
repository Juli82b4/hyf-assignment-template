## Part A – Improvements from Code Review

After using AI to review my portfolio code, I decided to make the following improvements:

1. **Fix button text**
   The button text originally had a duplicate word ("Change Change Background Color").
   I corrected it to **"Change Background Color"** to improve readability.

2. **Improve JavaScript background styling**
   I changed `document.body.style.background` to `document.body.style.backgroundColor` so it does not override other background properties.

3.  **Add a safety check for the button element**
   I added a check in JavaScript to make sure the button exists before adding the event listener `if (!btn) return;`. This prevents errors if the element is missing.

-------------------------------------------------------

## ASCII Diagram of Portfolio Structure

portfolio-project
│
├── assignment.html
├── styles.css
└── script.js

- **assignment.html** – Contains the structure of the webpage
- **styles.css** – Contains the styling for the webpage
- **script.js** – Handles the JavaScript functionality (changing background color)

---------------------------------------------------

## 3 Things I Learned

1. **Small mistakes affect usability**
   Even small issues like duplicated button text can make a website look unprofessional.

2. **JavaScript should check for elements before using them**
   Adding checks like `if (!btn)` prevents errors in the code.

3. **Separating HTML, CSS, and JavaScript improves organization**
   Keeping code in separate files makes projects easier to maintain and read.

---------------------------------------------

# Part B – Ethics and Risks of AI in Development

## 1. Over-reliance on AI

**Issue:**
Developers might rely too much on AI tools and stop learning how to solve problems themselves.

**Mitigation:**
I will use AI as a helper tool, but I will make sure I understand the code and concepts before using them.

---

## 2. Incorrect AI-generated code

**Issue:**
AI can sometimes generate incorrect or outdated code that may cause bugs.

**Mitigation:**
I will always test and review AI-generated code before adding it to my projects.

---

## 3. Security risks

**Issue:**
AI might generate code that contains security vulnerabilities.

**Mitigation:**
I will review the code carefully and follow secure coding practices to avoid security problems.

---

