// Paste your Google Apps Script Web App URL here:
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzVIwsszeY4z5U3VVIhqE_agSSUBfmR7cEeBmsAxLkDeOLKW-06AxgHuMlakH-NPeMb/exec";



// Add each class's questions under its matching class name.
const questionBanks = {
  "Year 8": [
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
  ],
  "Year 9": [
    { id: 0, q: "What is a spreadsheet package?", options: ["An application software used to process data in tabular form", "A graphics design tool for creating posters", "An operating system interface", "A database system for sending emails"] },
    { id: 1, q: "Data in a spreadsheet package is arranged in what format?", options: ["Paragraphs and headings", "Rows and columns", "Slides and layers", "Tracks and audio files"] },
    { id: 2, q: "Which of the following is the most widely used spreadsheet software?", options: ["Microsoft Excel", "CorelDraw", "Adobe Photoshop", "Microsoft Access"] },
    { id: 3, q: "Which of these is an example of a spreadsheet package developed by Apple?", options: ["Apple Numbers", "Lotus 1-2-3", "OpenOffice Calc", "Quattro Pro"] },
    { id: 4, q: "Which feature of a spreadsheet package allows users to automate repetitive tasks?", options: ["Macros", "Charts", "Worksheets", "Cell borders"] },
    { id: 5, q: "Which feature of a spreadsheet is used to represent data graphically?", options: ["Charts", "Macros", "Status Bar", "Name Box"] },
    { id: 6, q: "Which of the following is NOT an example of a spreadsheet package?", options: ["Lotus 1-2-3", "LibreOffice Calc", "Google Sheets", "Microsoft Word"] },
    { id: 7, q: "Spreadsheet packages are primarily designed for processing what type of data?", options: ["Audio data", "Numerical data", "Video sequences", "Vector graphics"] },
    { id: 8, q: "Which spreadsheet application is cloud-based and accessible via a web browser?", options: ["Google Sheets", "Corel Quattro Pro", "Lotus 1-2-3", "Kingsoft Desktop"] },
    { id: 9, q: "Managing personal and business budgets is a major use of which software?", options: ["Spreadsheets", "Presentation software", "Desktop Publishing", "Media Players"] },
    { id: 10, q: "What is a workbook in Microsoft Excel?", options: ["A single cell in a grid", "A file containing one or more worksheets", "A toolbar icon", "A chart template"] },
    { id: 11, q: "By default, how many worksheets were included in older versions of an Excel workbook?", options: ["1", "3", "5", "10"] },
    { id: 12, q: "What is a cell in a spreadsheet?", options: ["The intersection of a row and a column", "A entire page in a workbook", "The top toolbar", "A graphical chart"] },
    { id: 13, q: "How is a cell address designated in Excel?", options: ["Row number followed by Column letter (e.g., 1A)", "Column letter followed by Row number (e.g., A1)", "Only by Column letter", "Only by Row number"] },
    { id: 14, q: "What is the cell currently selected and surrounded by a thick border called?", options: ["Active cell", "Formula bar", "Inactive cell", "Name Box"] },
    { id: 15, q: "Where is the Fill Handle located on an active cell?", options: ["Top left corner", "Lower right corner", "Center", "Top right corner"] },
    { id: 16, q: "Which bar displays the name or address of the active cell?", options: ["Title Bar", "Name Box", "Status Bar", "Formula Bar"] },
    { id: 17, q: "Which bar allows you to enter or edit formulas and data in a cell?", options: ["Formula Bar", "Quick Access Toolbar", "Scroll Bar", "Tab Bar"] },
    { id: 18, q: "Text entered into a cell is commonly referred to as a what?", options: ["Label", "Value", "Formula", "Operator"] },
    { id: 19, q: "Every formula or calculation in Microsoft Excel MUST start with which symbol?", options: ["#", "@", "=", "+"] },
    { id: 20, q: "Which navigation route opens Excel via the Start menu?", options: ["Start > All Programs > Microsoft Office > Microsoft Excel", "File > Open > Excel", "Alt + F4", "Ctrl + Alt + Delete"] },
    { id: 21, q: "What keyboard shortcut closes the active application window in Windows?", options: ["Ctrl + C", "Alt + F4", "Ctrl + Z", "Shift + F5"] },
    { id: 22, q: "Where are window control buttons (Minimize, Maximize, Close) located?", options: ["Bottom left corner", "Top right corner", "Formula Bar", "Status Bar"] },
    { id: 23, q: "Which Ribbon tab contains the most common formatting options like Bold and Font Color?", options: ["Home Tab", "Page Layout Tab", "Data Tab", "View Tab"] },
    { id: 24, q: "What is formatting used for in a worksheet?", options: ["To delete data", "To emphasize information and enhance presentation", "To close the workbook", "To change computer hardware settings"] },
    { id: 25, q: "A numerical entry inside a spreadsheet cell is referred to as a what?", options: ["Label", "Value", "Macro", "Header"] },
    { id: 26, q: "Which component of the Excel interface allows you to switch between different worksheets?", options: ["Worksheet Tabs", "Scroll Bars", "Zoom Slider", "Title Bar"] },
    { id: 27, q: "Which bar at the bottom of the Excel window displays status messages and zoom settings?", options: ["Formula Bar", "Status Bar", "Title Bar", "Quick Access Toolbar"] },
    { id: 28, q: "How can you launch Excel directly from the Desktop?", options: ["Double-click the Excel icon", "Press Esc key", "Right-click the Taskbar", "Click the Scroll Bar"] },
    { id: 29, q: "Which menu option in the File menu closes Microsoft Excel?", options: ["Exit / Close", "Save As", "New", "Print"] },
    { id: 30, q: "Which Excel function adds up a range of numbers?", options: ["SUM()", "COUNT()", "TOTAL()", "ADD()"] },
    { id: 31, q: "What is the correct syntax to add numbers from cell A1 to A10?", options: ["=SUM(A1:A10)", "=ADD(A1..A10)", "SUM A1 to A10", "=A1+A10 SUM"] },
    { id: 32, q: "Which function calculates the arithmetic mean of a range of numbers?", options: ["MEAN()", "AVERAGE()", "MEDIAN()", "SUM()"] },
    { id: 33, q: "Which function counts only the number of cells that contain numbers?", options: ["COUNT()", "COUNTA()", "SUM()", "INDEX()"] },
    { id: 34, q: "Which logical function returns one value if a condition is TRUE and another if FALSE?", options: ["IF()", "OR()", "AND()", "NOT()"] },
    { id: 35, q: "What is the function syntax for an IF statement in Excel?", options: ["=IF(condition, value_if_true, value_if_false)", "=IF(value_if_true, condition)", "=IF[condition = true]", "=IF.THEN.ELSE()"] },
    { id: 36, q: "Which lookup function searches vertically for a value in the first column of a table?", options: ["HLOOKUP()", "VLOOKUP()", "MATCH()", "INDEX()"] },
    { id: 37, q: "In the function =VLOOKUP(D1, A1:B10, 2, FALSE), what does '2' represent?", options: ["The row index", "The column index number to return", "The sheet number", "The formula version"] },
    { id: 38, q: "Which lookup function searches horizontally across the first row of a range?", options: ["VLOOKUP()", "HLOOKUP()", "LOOKUP()", "SEARCH()"] },
    { id: 39, q: "Which function returns the value of a cell based on specified row and column numbers?", options: ["INDEX()", "MATCH()", "TEXT()", "COUNT()"] },
    { id: 40, q: "Which function searches for a specified item in a range and returns its relative position?", options: ["MATCH()", "INDEX()", "LOCATE()", "POSITION()"] },
    { id: 41, q: "Which function joins multiple text strings into one single text string?", options: ["CONCATENATE()", "JOIN()", "MERGE()", "COMBINE()"] },
    { id: 42, q: "What is the output of =CONCATENATE(\"Blooming\", \" \", \"Greens\")?", options: ["BloomingGreens", "Blooming Greens", "Blooming, Greens", "ERROR"] },
    { id: 43, q: "Which function converts a numeric value into formatted text (e.g., date formats)?", options: ["TEXT()", "FORMAT()", "VALUE()", "STRING()"] },
    { id: 44, q: "In an Excel range address like A1:A10, what symbol separates the starting and ending cell?", options: ["Semicolon (;)", "Colon (:)", "Comma (,)", "Hyphen (-)"] },
    { id: 45, q: "Which arithmetic operator is used for multiplication in Excel formulas?", options: ["x", "*", "•", "^"] },
    { id: 46, q: "Which arithmetic operator is used for division in Excel formulas?", options: ["\\", "/", "÷", "%"] },
    { id: 47, q: "What happens if you enter A1+B1 without an equals (=) sign in a cell?", options: ["Excel calculates the sum", "Excel treats it as text/label", "Excel shows an error message", "Excel deletes the cell"] },
    { id: 48, q: "Which feature is used to manipulate large amounts of data by sorting and filtering?", options: ["Databases", "Font Styles", "Scroll Bars", "Zoom Controller"] },
    { id: 49, q: "Which component of the Excel interface displays the title of the active workbook?", options: ["Status Bar", "Title Bar", "Name Box", "Formula Bar"] }
  ]
};

let activeBatch = [];
let activeQuestionBank = [];
let userAnswers = {};
let attemptCounter = 1;
let historyLog = [];
let studentName = "";
let studentClass = "";

function startQuiz(event) {
  event.preventDefault();

  const nameInput = document.getElementById("student-name");
  const classInput = document.getElementById("student-class");

  if (!nameInput.value.trim()) {
    nameInput.classList.add("input-error");
    nameInput.setAttribute("aria-invalid", "true");
    document.getElementById("name-error").style.display = "block";
    nameInput.focus();
    return;
  }

  if (!classInput.value) {
    classInput.classList.add("input-error");
    classInput.setAttribute("aria-invalid", "true");
    const classError = document.getElementById("class-error");
    classError.textContent = "Please select your class.";
    classError.style.display = "block";
    classInput.focus();
    return;
  }

  activeQuestionBank = questionBanks[classInput.value];
  if (!activeQuestionBank || activeQuestionBank.length < 5) {
    classInput.classList.add("input-error");
    classInput.setAttribute("aria-invalid", "true");
    const classError = document.getElementById("class-error");
    classError.textContent = `Questions for ${classInput.value} are not available yet. Please choose a class with available questions.`;
    classError.style.display = "block";
    classInput.focus();
    return;
  }

  studentName = nameInput.value.trim();
  studentClass = classInput.value;
  document.getElementById("student-summary").innerText = `${studentName} · ${studentClass}`;
  document.getElementById("landing-page").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  startNewAttemptSession();
}

function shuffleArray(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startNewAttemptSession() {
  const shuffledBank = shuffleArray(activeQuestionBank);
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
    card.dataset.questionId = qObj.id;

    let optionsHTML = "";
    qObj.options.forEach((opt, optIdx) => {
      const checked = userAnswers[qObj.id] === optIdx ? "checked" : "";
      optionsHTML += `
        <label class="option">
          <input type="radio" name="q${qObj.id}" value="${optIdx}" ${checked} required onchange="saveAnswer(${qObj.id}, ${optIdx})">
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
  const card = document.querySelector(`[data-question-id="${questionId}"]`);
  card.classList.remove("question-unanswered");

  if (activeBatch.every(question => Number.isInteger(userAnswers[question.id]))) {
    const error = document.getElementById("answer-error");
    error.textContent = "";
    error.style.display = "none";
  }
}

function hasStudentDetails() {
  return Boolean(studentName.trim() && studentClass);
}

function validateAnswers() {
  const unanswered = activeBatch.find(question =>
    !Number.isInteger(userAnswers[question.id]) ||
    userAnswers[question.id] < 0 ||
    userAnswers[question.id] >= question.options.length
  );

  if (!unanswered) return true;

  const card = document.querySelector(`[data-question-id="${unanswered.id}"]`);
  card.classList.add("question-unanswered");
  const error = document.getElementById("answer-error");
  error.textContent = `Please answer all 5 questions before submitting. Question ${activeBatch.indexOf(unanswered) + 1} needs an answer.`;
  error.style.display = "block";
  card.querySelector('input[type="radio"]').focus();
  card.scrollIntoView({ behavior: "smooth", block: "center" });
  return false;
}

function clearNameError() {
  const nameInput = document.getElementById("student-name");
  const errorMsg = document.getElementById("name-error");
  nameInput.classList.remove("input-error");
  nameInput.setAttribute("aria-invalid", "false");
  errorMsg.style.display = "none";
}

function clearClassError() {
  const classInput = document.getElementById("student-class");
  classInput.classList.remove("input-error");
  classInput.setAttribute("aria-invalid", "false");
  const classError = document.getElementById("class-error");
  classError.textContent = "Please select your class.";
  classError.style.display = "none";
}

function submitQuiz() {
  if (!hasStudentDetails() || !validateAnswers()) return;

  const submitBtn = document.getElementById("submit-btn");
  submitBtn.disabled = true;
  submitBtn.innerText = "Grading & Submitting...";

  const payload = {
    studentName: studentName,
    studentClass: studentClass,
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
      alert(data.message || "Error grading test. Please try again.");
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
