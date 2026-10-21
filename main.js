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
  ],
  "Year 11": [
    { id: 0, q: "What is the primary purpose of an organizational Corporate House Style?", options: ["To automate software updates", "To encrypt internal company documents", "To ensure all corporate documents maintain a consistent visual identity", "To speed up database query execution"] },
    { id: 1, q: "Which typography element is typically defined within a document house style?", options: ["IP Address mapping", "Database record layout", "File compression format", "Mandatory font family and point size"] },
    { id: 2, q: "What is a major advantage of enforcing a corporate house style across all company publications?", options: ["It eliminates the need for data validation", "It automatically repairs hardware faults", "It strengthens brand recognition and reduces formatting errors", "It increases spreadsheet storage capacity"] },
    { id: 3, q: "Automated spell checking compares text against dictionary files, but which type of error does it fail to detect?", options: ["Missing XML tags", "Incorrect file extensions", "Non-numeric values in integer fields", "Contextual typos like using 'there' instead of 'their'"] },
    { id: 4, q: "How does visual verification (proofreading) differ from automated software validation?", options: ["Visual verification is performed by software algorithms", "Software validation checks document margin widths", "Proofreading is human inspection of layout and contextual accuracy", "Validation checks for grammar syntax errors only"] },
    { id: 5, q: "Which data validation check ensures that a mandatory input field cannot be left blank?", options: ["Format Check", "Range Check", "Presence Check", "Length Check"] },
    { id: 6, q: "An exam score input field must accept numbers only between 0 and 100. Which validation check should be applied?", options: ["Character Check", "Presence Check", "Picture Check", "Range Check"] },
    { id: 7, q: "A system requires a National Identity Number to consist of exactly 11 digits. Which validation check enforces this rule?", options: ["Type Check", "Format Check", "Length Check", "Lookup Check"] },
    { id: 8, q: "Which validation check verifies that input data conforms to a specific structure, such as DD/MM/YYYY?", options: ["Presence Check", "Range Check", "Length Check", "Format Check (Picture Check)"] },
    { id: 9, q: "If a phone number entry field rejects text letters, which data validation check is active?", options: ["Presence Check", "Range Check", "Character / Type Check", "Length Check"] },
    { id: 10, q: "What is the main function of a chart or graph in a spreadsheet application?", options: ["To encrypt numerical dataset columns", "To format cell text alignment automatically", "To visually represent numerical data to identify trends and patterns", "To compress flat-file data structures"] },
    { id: 11, q: "Which type of chart is best suited for showing continuous data trends or changes over time?", options: ["Pie Chart", "Histogram", "Doughnut Chart", "Line Graph"] },
    { id: 12, q: "When is a Pie Chart most effectively used in data presentation?", options: ["When tracking continuous fluctuating temperatures", "When plotting high-frequency stock exchange changes", "When displaying proportions or percentages of a single whole", "When comparing multiple non-adjacent data series"] },
    { id: 13, q: "In a bar or column chart, what does the Value Axis (Y-Axis) represent?", options: ["The list of category labels", "The secondary legend key", "The numerical scale used for measurement", "The background gridlines"] },
    { id: 14, q: "What component of a chart provides a visual key identifying colors or patterns assigned to data series?", options: ["Category Axis Title", "Data Value Label", "Chart Header Tag", "Legend"] },
    { id: 15, q: "Which keyboard key must be held down to select non-contiguous (separated) cells for creating a chart?", options: ["Shift key", "Alt key", "Ctrl key", "Tab key"] },
    { id: 16, q: "When is it necessary to add a Secondary Axis (Dual Axis) to a chart?", options: ["When plotting continuous text labels against discrete values", "When exploding a sector slice from a pie chart", "When plotting two data series with significantly different units or scales", "When formatting gridlines in 3D bar graphs"] },
    { id: 17, q: "What chart enhancement technique is used to pull out a slice from a Pie Chart for visual emphasis?", options: ["Cropping", "Filtering", "Segmenting", "Exploding (Extracting)"] },
    { id: 18, q: "Which chart type is specifically designed to show frequency distributions across continuous range intervals?", options: ["Scatter Plot", "Bar Chart", "Histogram", "Area Chart"] },
    { id: 19, q: "What is the function of Data Value Labels printed directly on a chart's bars or sectors?", options: ["To show formula calculations behind cells", "To display category group names", "To state exact numerical values or percentages on data points", "To define the minimum and maximum axis scale"] },
    { id: 20, q: "What is a Flat-File Database?", options: ["A database that stores data in encrypted XML pages", "A database that links multiple tables using foreign keys", "A database storing all records in a single table, often causing data duplication", "A web-based database hosted on cloud servers"] },
    { id: 21, q: "What is a primary advantage of a Relational Database over a Flat-File Database?", options: ["It does not require data validation rules", "It only allows text-based data entries", "It links tables using keys, reducing data redundancy and duplication", "It eliminates the need for primary key fields"] },
    { id: 22, q: "What is a Primary Key in a relational database table?", options: ["A field that automatically formats cell borders", "A field containing duplicate record references", "A field that uniquely identifies each record in a table", "A control button used on data entry forms"] },
    { id: 23, q: "When importing a raw .csv file into a database, what does .csv stand for?", options: ["Computerized Standard Values", "Centralized System Variable", "Calculated Sequence Values", "Comma-Separated Values"] },
    { id: 24, q: "In Microsoft Access, which data type should be assigned to a field that holds true/false or yes/no values?", options: ["Text", "AutoNumber", "Boolean / Logical (Yes/No)", "Currency"] },
    { id: 25, q: "Which data type automatically generates a sequential unique number whenever a new record is added?", options: ["Integer", "Text", "Currency", "AutoNumber"] },
    { id: 26, q: "Why should a telephone number field usually be assigned a Text data type rather than Number?", options: ["Number fields cannot store more than 5 digits", "Text data types compress file size faster", "To preserve leading zeros and prevent arithmetic operations on phone numbers", "Number fields convert phone entries to currency"] },
    { id: 27, q: "What database object provides a user-friendly graphical interface with controls for entering and editing records?", options: ["Query", "Report", "Table Grid", "Form"] },
    { id: 28, q: "In database design, what links a secondary table to the Primary Key of a master table?", options: ["Calculated Field", "Control Label", "Foreign Key", "Macro Rule"] },
    { id: 29, q: "Which data type is most appropriate for storing product price details in a database?", options: ["Text", "AutoNumber", "Currency", "Boolean"] },
    { id: 30, q: "Which database component is used to define the structure, field names, and data types of a table?", options: ["Form View", "Report Wizard", "Datasheet View", "Design View"] },
    { id: 31, q: "What occurs when data is imported from a flat .csv file into a relational database system?", options: ["Primary keys are deleted automatically", "All text data is converted into currency", "Unstructured delimited text is mapped into structured tables and fields", "Validation rules are permanently disabled"] },
    { id: 32, q: "Which Access feature allows a database administrator to restrict data entry via user selection lists?", options: ["AutoNumber Generator", "Format Rule Wizard", "Lookup Control (Dropdown)", "Calculated Field"] },
    { id: 33, q: "What is the main function of a Foreign Key in a relational database?", options: ["To automatically count the total number of tables", "To establish a link or relationship between two tables", "To calculate averages across numeric columns", "To encrypt individual field entries"] },
    { id: 34, q: "Which view in Microsoft Access displays actual record rows and columns for direct data entry?", options: ["Design View", "Form Layout View", "Structure View", "Datasheet View"] },
    { id: 35, q: "Why is data validation implemented during database structure creation?", options: ["To automatically format tables with corporate colors", "To ensure data entered is sensible, reasonable, and accurate", "To generate executive presentation reports", "To eliminate the need for primary keys"] },
    { id: 36, q: "What type of relationship exists when one record in a Parent Table relates to many records in a Child Table?", options: ["Many-to-Many Relationship", "One-to-One Relationship", "One-to-Many Relationship", "Flat-File Relationship"] },
    { id: 37, q: "Which field property prevents a database user from leaving a field empty during record entry?", options: ["Field Size", "Default Value", "Required (Presence Check)", "Indexed"] },
    { id: 38, q: "When creating a database structure, what defines the maximum number of characters allowed in a text field?", options: ["Format Rule", "Validation Text", "Field Size", "Input Mask"] },
    { id: 39, q: "What is a major consequence of poor database structure design?", options: ["Data duplication, anomalies, and reduced processing efficiency", "Automatic deletion of foreign keys", "Inability to print physical reports", "Conversion of relational tables to text files"] },
    { id: 40, q: "What is a Query in a database management system?", options: ["A form used to change field background colors", "A method for backing up database files", "A search filter used to extract specific data based on criteria", "A print template for address labels"] },
    { id: 41, q: "What is a Calculated Field in a database query?", options: ["A permanent table field storing fixed numerical constants", "A primary key field that increments automatically", "A new field created in a query that performs calculations on existing fields", "A validation rule checking input numbers"] },
    { id: 42, q: "In a database query, which wildcard symbol represents any number of unknown characters?", options: ["Question mark (?)", "Exclamation mark (!)", "Ampersand (&)", "Asterisk (*)"] },
    { id: 43, q: "To perform a query search for all surnames starting with the letter 'B', which criterion syntax should be used?", options: ["= \"B?\"", "CONTAINS \"B\"", "LIKE \"B*\"", "START (\"B\")"] },
    { id: 44, q: "If you want to sort database query results from highest price to lowest price, which sort order is applied?", options: ["Ascending Order", "Alphabetical Order", "Descending Order", "Chronological Order"] },
    { id: 45, q: "Which operator is used in a database query to search for values greater than or equal to a target number?", options: ["=>", "=<", ">=", "<="] },
    { id: 46, q: "What query expression syntax creates a calculated field named 'TotalCost' multiplying 'Price' by 'Quantity'?", options: ["TotalCost = Price * Quantity", "TotalCost := [Price] x [Quantity]", "TotalCost: [Price] * [Quantity]", "CALCULATE TotalCost ([Price] * [Quantity])"] },
    { id: 47, q: "Which aggregate function in a database query counts the total number of records matching specific criteria?", options: ["SUM()", "AVG()", "TOTAL()", "COUNT()"] },
    { id: 48, q: "To find all students born after December 31, 2008, which query criterion should be applied to the DateOfBirth field?", options: ["< #31/12/2008#", "BETWEEN 2008 AND 2009", "> #31/12/2008#", "= #31/12/2008#"] },
    { id: 49, q: "What is the purpose of combining multiple criteria using the AND operator in a database query?", options: ["To return records that match either one criterion or another", "To exclude all records from the output result", "To return only records that satisfy all specified conditions simultaneously", "To sort records alphabetically by field name"] }
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
