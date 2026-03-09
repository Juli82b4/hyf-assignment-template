Part A – Improvements
- I changed document.body.style.background to document.body.style.backgroundColor so it does not overwrite other background styles.
- Instead of throwing an error if #colorBtn is missing, I added a check (if (!btn) return;) so the script does not break.
- I improved the random color function so the same color does not appear twice in a row.

ASCII Diagram of Project

portfolio
│
├── assignment.html
├── styles.css
└── script.js