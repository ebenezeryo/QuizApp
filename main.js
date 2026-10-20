// Paste your Google Apps Script Web App URL here:
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx-R7Y2w_yIIAuOIYF0JCJksEKK5cB0z3_80UoIghRv41BpUQCgVvN85QOPsvM2es3_/exec";


const questionBank = [
  { q: "What is the primary function of an Operating System (OS)?", options: ["To create graphic designs", "To manage hardware resources, files, and user execution", "To connect to the internet automatically", "To translate human speech into text"], answer: 1 },
  { q: "Which user interface operates through text-driven commands and prompt syntax?", options: ["GUI", "WIMP", "CLI", "API"], answer: 2 },
  { q: "What does the acronym WIMP stand for in GUI interfaces?", options: ["Windows, Icons, Menus, Pointer", "Web, Internet, Media, Programs", "Wireless, Input, Memory, Processing", "Workstation, Integrated, Management, Platform"], answer: 0 },
  { q: "Which metric is a key characteristic of a Command Line Interface (CLI)?", options: ["High GPU resource usage", "Low system overhead and fast execution for scripts", "Point-and-click navigation", "Steep customizability limits"], answer: 1 },
  { q: "Which of the following is an example of a Graphical User Interface (GUI)?", options: ["Linux Bash", "Windows Command Prompt", "Windows 11", "PowerShell"], answer: 2 },
  { q: "Which command line command is used to list files and folders in Windows CMD?", options: ["cd", "mkdir", "dir /b", "open"], answer: 2 },
  { q: "What command is used to create a new folder via the command prompt?", options: ["mkdir", "cd", "dir", "ls"], answer: 0 },
  { q: "Which metric correctly compares GUI with CLI?", options: ["GUI uses minimal RAM compared to CLI", "GUI has lower accessibility for beginners", "GUI consumes higher RAM / Graphics processor usage", "GUI is faster for batch task execution"], answer: 2 },
  { q: "What is the smallest unit of digital data in a computer system?", options: ["Byte", "Nibble", "Bit", "Word"], answer: 2 },
  { q: "A nibble consists of how many bits?", options: ["2 bits", "4 bits", "8 bits", "16 bits"], answer: 1 },
  { q: "How many bits make up one Byte?", options: ["4 bits", "8 bits", "16 bits", "32 bits"], answer: 1 },
  { q: "A 'Word' in standard computer design architecture usually contains how many bits?", options: ["8 bits", "16 bits", "32 bits", "64 bits"], answer: 1 },
  { q: "How many bytes are in 1 Kilobyte (KB)?", options: ["1000 bytes", "1024 bytes", "512 bytes", "2048 bytes"], answer: 1 },
  { q: "Which unit equals 2^30 bytes (approximately 1 billion bytes)?", options: ["Megabyte (MB)", "Gigabyte (GB)", "Terabyte (TB)", "Petabyte (PB)"], answer: 1 },
  { q: "Secondary storage devices like hard disks differ from RAM because:", options: ["They are directly accessible by CPU", "They are high-speed temporary storage", "They are not directly accessible by CPU", "They do not hold digital data"], answer: 2 },
  { q: "What arithmetic operation is performed when converting from a higher storage unit to a smaller unit?", options: ["Addition", "Division", "Multiplication", "Subtraction"], answer: 2 },
  { q: "What operation is performed when converting from a smaller storage unit to a higher unit?", options: ["Division", "Multiplication", "Exponential", "Modulus"], answer: 0 },
  { q: "Convert 2048 bytes into Kilobytes (KB):", options: ["1 KB", "2 KB", "4 KB", "20.48 KB"], answer: 1 },
  { q: "How many MB are equal to 2 GB?", options: ["2000 MB", "2048 MB", "1024 MB", "4096 MB"], answer: 1 },
  { q: "How many nibbles are in 32 bits?", options: ["4 nibbles", "8 nibbles", "16 nibbles", "64 nibbles"], answer: 1 },
  { q: "Converting 5 Kilobytes (KB) to bytes yields:", options: ["5000 bytes", "5120 bytes", "5242 bytes", "10245 bytes"], answer: 1 },
  { q: "What is a computer file?", options: ["A hardware component inside CPU", "A structured collection of related data stored under a specific name", "A physical folder inside a cabinet", "A temporary memory allocation in RAM"], answer: 1 },
  { q: "What separates a file name from its file extension?", options: ["A comma", "A hyphen", "A dot (.)", "A forward slash"], answer: 2 },
  { q: "Which level of the Logical Data Hierarchy comes immediately after Byte/Character?", options: ["Bit", "Record", "Field", "Database"], answer: 2 },
  { q: "In the logical data hierarchy, what is a 'Field'?", options: ["A single bit value", "A grouping of characters forming a meaningful attribute", "A collection of all tables", "A complete set of records"], answer: 1 },
  { q: "Which of the following represents a 'Record' in logical data organization?", options: ["The single letter 'A'", "A collection of related fields describing a single entity", "An entire integrated database system", "An Excel file containing multiple sheets"], answer: 1 },
  { q: "Arrange from smallest to largest: Bit, Field, Record, Database.", options: ["Database, Record, Field, Bit", "Bit, Record, Field, Database", "Bit, Field, Record, Database", "Field, Bit, Record, Database"], answer: 2 },
  { q: "Which file extension represents an executable file?", options: [".docx", ".mp3", ".exe", ".jpg"], answer: 2 },
  { q: "What is an integrated collection of logically related files or tables called?", options: ["Field", "Record", "Database", "Byte"], answer: 2 },
  { q: "Which of these is an example of secondary storage?", options: ["RAM", "Hard Drive / USB Flash Drive", "CPU Registers", "Cache Memory"], answer: 1 }
];

let activeBatch = [];
let userAnswers = {};
let attemptCounter = 1;
let historyLog = [];

function shuffleArray(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Select only 5 random questions per attempt session
function startNewAttemptSession() {
  const shuffledBank = shuffleArray(questionBank);
  activeBatch = shuffledBank.slice(0, 5); // Pick only 5 questions
  userAnswers = {};

  document.getElementById("attempt-count").innerText = `Attempt: #${attemptCounter}`;
  document.getElementById("quiz-body").style.display = "block";
  document.getElementById("nav-buttons").style.display = "flex";
  document.getElementById("result-box").style.display = "none";
  
  renderFiveQuestions();
}

function renderFiveQuestions() {
  const container = document.getElementById("quiz-body");
  container.innerHTML = "";

  activeBatch.forEach((qObj, index) => {
    const card = document.createElement("div");
    card.className = "question-card";

    let optionsHTML = "";
    qObj.options.forEach((opt, optIdx) => {
      const checked = userAnswers[index] === optIdx ? "checked" : "";
      optionsHTML += `
        <label class="option">
          <input type="radio" name="q${index}" value="${optIdx}" ${checked} onchange="saveAnswer(${index}, ${optIdx})">
          ${opt}
        </label>
      `;
    });

    card.innerHTML = `
      <div class="question-title">Q${index + 1}. ${qObj.q}</div>
      ${optionsHTML}
    `;
    container.appendChild(card);
  });
}

function saveAnswer(questionIdx, optionIdx) {
  userAnswers[questionIdx] = optionIdx;
}

// Student Name Validation
function validateStudentName() {
  const nameInput = document.getElementById("student-name");
  const errorMsg = document.getElementById("name-error");
  
  if (!nameInput.value.trim()) {
    nameInput.classList.add("input-error");
    errorMsg.style.display = "block";
    window.scrollTo(0, 0);
    nameInput.focus();
    return false;
  }
  
  clearNameError();
  return true;
}

function clearNameError() {
  const nameInput = document.getElementById("student-name");
  const errorMsg = document.getElementById("name-error");
  nameInput.classList.remove("input-error");
  errorMsg.style.display = "none";
}

function submitQuiz() {
  if (!validateStudentName()) {
    return;
  }

  const studentName = document.getElementById("student-name").value.trim();

  let score = 0;
  activeBatch.forEach((qObj, idx) => {
    if (userAnswers[idx] === qObj.answer) {
      score++;
    }
  });

  const percentage = Math.round((score / activeBatch.length) * 100);
  
  historyLog.push({ attempt: attemptCounter, score: score, total: activeBatch.length, percent: percentage });
  
  // End active attempt display
  document.getElementById("quiz-body").style.display = "none";
  document.getElementById("nav-buttons").style.display = "none";
  document.getElementById("result-box").style.display = "block";
  
  document.getElementById("score-percentage").innerText = `${percentage}%`;
  document.getElementById("score-details").innerText = `Great job, ${studentName}! You scored ${score} out of ${activeBatch.length} correctly.`;

  updateHistoryUI();

  // Send result to Google Apps Script
  saveToGoogleSheet(studentName, attemptCounter, score, activeBatch.length, percentage);
}

function saveToGoogleSheet(studentName, attempt, score, total, percent) {
  const statusEl = document.getElementById("save-status");
  statusEl.innerText = "Saving score to Google Sheets...";

  if (APPS_SCRIPT_URL === "YOUR_APPS_SCRIPT_WEB_APP_URL_HERE") {
    statusEl.innerText = "Score recorded locally (Apps Script URL not configured).";
    return;
  }

  const payload = {
    studentName: studentName,
    attempt: attempt,
    score: score,
    total: total,
    percent: percent
  };

  fetch(APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
  .then(() => {
    statusEl.innerText = "Score successfully recorded in Google Sheets!";
  })
  .catch((err) => {
    console.error(err);
    statusEl.innerText = "Could not record score to Google Sheets.";
  });
}

function updateHistoryUI() {
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = "";
  historyLog.forEach(log => {
    const li = document.createElement("li");
    li.innerText = `Attempt #${log.attempt}: ${log.score}/${log.total} (${log.percent}%)`;
    historyList.appendChild(li);
  });
}

// Prompt Modal Functions
function promptNextAttempt() {
  document.getElementById("modal-attempt-num").innerText = `#${attemptCounter + 1}`;
  document.getElementById("attempt-modal").style.display = "flex";
}

function closeAttemptModal() {
  document.getElementById("attempt-modal").style.display = "none";
}

function confirmNextAttempt() {
  closeAttemptModal();
  attemptCounter++;
  startNewAttemptSession();
}

window.onload = startNewAttemptSession;