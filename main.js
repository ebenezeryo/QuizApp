// Paste your Google Apps Script Web App URL here:
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx-R7Y2w_yIIAuOIYF0JCJksEKK5cB0z3_80UoIghRv41BpUQCgVvN85QOPsvM2es3_/exec";


// Question bank without stored answer keys in client browser
const questionBank = [
  { id: 0, q: "What is the primary function of an Operating System (OS)?", options: ["To create graphic designs", "To manage hardware resources, files, and user execution", "To connect to the internet automatically", "To translate human speech into text"] },
  { id: 1, q: "Which user interface operates through text-driven commands and prompt syntax?", options: ["GUI", "WIMP", "CLI", "API"] },
  { id: 2, q: "What does the acronym WIMP stand for in GUI interfaces?", options: ["Windows, Icons, Menus, Pointer", "Web, Internet, Media, Programs", "Wireless, Input, Memory, Processing", "Workstation, Integrated, Management, Platform"] },
  { id: 3, q: "Which metric is a key characteristic of a Command Line Interface (CLI)?", options: ["High GPU resource usage", "Low system overhead and fast execution for scripts", "Point-and-click navigation", "Steep customizability limits"] },
  { id: 4, q: "Which of the following is an example of a Graphical User Interface (GUI)?", options: ["Linux Bash", "Windows Command Prompt", "Windows 11", "PowerShell"] },
  { id: 5, q: "Which command line command is used to list files and folders in Windows CMD?", options: ["cd", "mkdir", "dir /b", "open"] },
  { id: 6, q: "What command is used to create a new folder via the command prompt?", options: ["mkdir", "cd", "dir", "ls"] },
  { id: 7, q: "Which metric correctly compares GUI with CLI?", options: ["GUI uses minimal RAM compared to CLI", "GUI has lower accessibility for beginners", "GUI consumes higher RAM / Graphics processor usage", "GUI is faster for batch task execution"] },
  { id: 8, q: "What is the smallest unit of digital data in a computer system?", options: ["Byte", "Nibble", "Bit", "Word"] },
  { id: 9, q: "A nibble consists of how many bits?", options: ["2 bits", "4 bits", "8 bits", "16 bits"] },
  { id: 10, q: "How many bits make up one Byte?", options: ["4 bits", "8 bits", "16 bits", "32 bits"] },
  { id: 11, q: "A 'Word' in standard computer design architecture usually contains how many bits?", options: ["8 bits", "16 bits", "32 bits", "64 bits"] },
  { id: 12, q: "How many bytes are in 1 Kilobyte (KB)?", options: ["1000 bytes", "1024 bytes", "512 bytes", "2048 bytes"] },
  { id: 13, q: "Which unit equals 2^30 bytes (approximately 1 billion bytes)?", options: ["Megabyte (MB)", "Gigabyte (GB)", "Terabyte (TB)", "Petabyte (PB)"] },
  { id: 14, q: "Secondary storage devices like hard disks differ from RAM because:", options: ["They are directly accessible by CPU", "They are high-speed temporary storage", "They are not directly accessible by CPU", "They do not hold digital data"] },
  { id: 15, q: "What arithmetic operation is performed when converting from a higher storage unit to a smaller unit?", options: ["Addition", "Division", "Multiplication", "Subtraction"] },
  { id: 16, q: "What operation is performed when converting from a smaller storage unit to a higher unit?", options: ["Division", "Multiplication", "Exponential", "Modulus"] },
  { id: 17, q: "Convert 2048 bytes into Kilobytes (KB):", options: ["1 KB", "2 KB", "4 KB", "20.48 KB"] },
  { id: 18, q: "How many MB are equal to 2 GB?", options: ["2000 MB", "2048 MB", "1024 MB", "4096 MB"] },
  { id: 19, q: "How many nibbles are in 32 bits?", options: ["4 nibbles", "8 nibbles", "16 nibbles", "64 nibbles"] },
  { id: 20, q: "Converting 5 Kilobytes (KB) to bytes yields:", options: ["5000 bytes", "5120 bytes", "5242 bytes", "10245 bytes"] },
  { id: 21, q: "What is a computer file?", options: ["A hardware component inside CPU", "A structured collection of related data stored under a specific name", "A physical folder inside a cabinet", "A temporary memory allocation in RAM"] },
  { id: 22, q: "What separates a file name from its file extension?", options: ["A comma", "A hyphen", "A dot (.)", "A forward slash"] },
  { id: 23, q: "Which level of the Logical Data Hierarchy comes immediately after Byte/Character?", options: ["Bit", "Record", "Field", "Database"] },
  { id: 24, q: "In the logical data hierarchy, what is a 'Field'?", options: ["A single bit value", "A grouping of characters forming a meaningful attribute", "A collection of all tables", "A complete set of records"] },
  { id: 25, q: "Which of the following represents a 'Record' in logical data organization?", options: ["The single letter 'A'", "A collection of related fields describing a single entity", "An entire integrated database system", "An Excel file containing multiple sheets"] },
  { id: 26, q: "Arrange from smallest to largest: Bit, Field, Record, Database.", options: ["Database, Record, Field, Bit", "Bit, Record, Field, Database", "Bit, Field, Record, Database", "Field, Bit, Record, Database"] },
  { id: 27, q: "Which file extension represents an executable file?", options: [".docx", ".mp3", ".exe", ".jpg"] },
  { id: 28, q: "What is an integrated collection of logically related files or tables called?", options: ["Field", "Record", "Database", "Byte"] },
  { id: 29, q: "Which of these is an example of secondary storage?", options: ["RAM", "Hard Drive / USB Flash Drive", "CPU Registers", "Cache Memory"] }
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

function startNewAttemptSession() {
  const shuffledBank = shuffleArray(questionBank);
  activeBatch = shuffledBank.slice(0, 5);
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
      const checked = userAnswers[qObj.id] === optIdx ? "checked" : "";
      optionsHTML += `
        <label class="option">
          <input type="radio" name="q${qObj.id}" value="${optIdx}" ${checked} onchange="saveAnswer(${qObj.id}, ${optIdx})">
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

function saveAnswer(questionId, optionIdx) {
  userAnswers[questionId] = optionIdx;
}

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
  if (!validateStudentName()) return;

  const studentName = document.getElementById("student-name").value.trim();
  const submitBtn = document.getElementById("submit-btn");
  submitBtn.disabled = true;
  submitBtn.innerText = "Grading & Submitting...";

  const payload = {
    studentName: studentName,
    attempt: attemptCounter,
    answers: userAnswers
  };

  fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(payload)
  })
  .then(res => res.json())
  .then(data => {
    submitBtn.disabled = false;
    submitBtn.innerText = "Submit Answers";

    if (data.status === "success") {
      historyLog.push({ attempt: attemptCounter, score: data.score, total: data.total, percent: data.percent });

      document.getElementById("quiz-body").style.display = "none";
      document.getElementById("nav-buttons").style.display = "none";
      document.getElementById("result-box").style.display = "block";

      document.getElementById("score-percentage").innerText = `${data.percent}%`;
      document.getElementById("score-details").innerText = `Great job, ${studentName}! You scored ${data.score} out of ${data.total} correctly.`;
      document.getElementById("save-status").innerText = "Result recorded in teacher's Google Sheet!";

      updateHistoryUI();
    } else {
      alert("Error grading test. Please try again.");
    }
  })
  .catch(err => {
    console.error(err);
    submitBtn.disabled = false;
    submitBtn.innerText = "Submit Answers";
    alert("Connection error. Could not submit results.");
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