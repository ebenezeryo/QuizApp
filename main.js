// Paste your Google Apps Script Web App URL here:
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyK0tsy2krGJmSstKmH6Z_FpRQWQ3TDqlXYLgCFN0YVkV8DAWrg7JFui-xNvXnQIgyI/exec";



// Add each class's questions under its matching class name.
const questionBanks = {
  "Year 7": [
    { id: 0, q: "What is a computer system?", options: ["An mechanical engine for weaving patterns", "An electronic machine that takes inputs, processes data, and creates outputs", "A tool only designed for typing text documents", "A manual counting board made of beads"] },
    { id: 1, q: "Which of the following elements focus on the basic components that make up a complete computer system?", options: ["Hardware, Software, and Users (Peopleware)", "Calculators and Slide Rules", "Monitor, Keyboard, and Printer", "Vacuum tubes and Transistors"] },
    { id: 2, q: "Which major physical part of a computer system acts as the brain to process data and control operations?", options: ["Primary Memory (RAM)", "Secondary Storage", "Processing Unit (CPU)", "Visual Display Unit"] },
    { id: 3, q: "Which device is classified as an input device in a computer system?", options: ["Monitor", "Speaker", "Scanner", "Printer"] },
    { id: 4, q: "Which storage component provides temporary memory inside a computer system?", options: ["Primary Storage (RAM)", "Hard Disk Drive", "Flash Drive", "Punched Card"] },
    { id: 5, q: "What constitutes the software component of a computer system?", options: ["The physical wires and circuitry", "Set of instructions or programs telling hardware what to do", "The human operator using the system", "The hard disk drive enclosure"] },
    { id: 6, q: "Which of the following is an example of system software?", options: ["Scanners", "Windows OS", "Computer Mouse", "Punched Card Reader"] },
    { id: 7, q: "What is the primary function of output devices like monitors and printers?", options: ["Entering raw values into the CPU", "Displaying or outputting the results of processed data", "Executing logarithm formulas", "Storing long-term database records"] },
    { id: 8, q: "Peopleware in computer terminology refers specifically to:", options: ["The human users who operate the computer system", "Operating system files", "Physical computer cables", "Application programs"] },
    { id: 9, q: "Which of these is classified as secondary long-term storage?", options: ["Processor Registers", "RAM Memory", "Hard Disk Drive", "Control Unit"] },
    { id: 10, q: "What led to the historical development of modern computers?", options: ["The creation of high-speed monitors", "Advances in technology and human need to quantify things", "The introduction of operating systems", "The discovery of electrical microprocessors"] },
    { id: 11, q: "Which method was used by ancient humans for simple counting before mechanical tools existed?", options: ["Fingers, pebbles, and cowries", "Punched Cards", "Logarithm Tables", "Vacuum Tubes"] },
    { id: 12, q: "Which early counting device was developed about 5000 years ago by the Babylonians using wood and beads?", options: ["Pascaline", "Abacus", "Slide Rule", "Napier's Bones"] },
    { id: 13, q: "Who invented the Slide Rule in 1622 for performing mechanical numerical calculations?", options: ["William Oughtred", "Blaise Pascal", "John Napier", "Charles Babbage"] },
    { id: 14, q: "John Napier invented Napier's Bones in 1617 based on which mathematical concept?", options: ["Binary Logic", "Vacuum Calculation", "Logarithms", "Punched Cards"] },
    { id: 15, q: "What mathematical operation does John Napier's logarithm technology simplify into addition?", options: ["Multiplication", "Division", "Subtraction", "Square Root"] },
    { id: 16, q: "Who invented the gear-driven calculator known as the Pascaline in 1642?", options: ["Gottfried Leibnitz", "Blaise Pascal", "Herman Hollerith", "John Von Neumann"] },
    { id: 17, q: "What was the single mathematical calculation function the original Pascaline could perform?", options: ["Addition", "Multiplication", "Division", "Logarithmic extraction"] },
    { id: 18, q: "For whom did Blaise Pascal construct the Pascaline calculator at age 19?", options: ["A military general", "A school teacher", "His father who was a tax collector", "A Babylonian merchant"] },
    { id: 19, q: "Which early device used clay spheres, sticks, and stones for basic counting?", options: ["Early ancient counting methods", "Slide Rule", "Logarithm Bones", "Pascaline"] },
    { id: 20, q: "What key improvement did Gottfried Wilhelm Leibnitz introduce in 1679 to the Pascaline design?", options: ["Constructed a handle-driven mechanism capable of multiplication", "Added electronic vacuum tubes", "Used silicon microprocessors", "Replaced gears with magnetic tape"] },
    { id: 21, q: "What feature did Joseph Jacquard's Loom use to automatically control woven textile patterns?", options: ["Gears and handles", "Punched cards", "Logarithm rods", "Electric relays"] },
    { id: 22, q: "Which inventor proposed the Analytical Engine and Difference Engine to simplify logarithm tables?", options: ["Charles Babbage", "Herman Hollerith", "Blaise Pascal", "John Von Neumann"] },
    { id: 23, q: "In 1881, Herman Hollerith invented a punched card device specifically to process:", options: ["Tax collections", "Census data", "Woven fabric designs", "Logarithm tables"] },
    { id: 24, q: "Which of the following is classified as an electro-mechanical device?", options: ["Silicon Integrated Circuit", "Abacus", "Herman Hollerith's Punched Card Tabulator", "Microprocessor"] },
    { id: 25, q: "What primary function did punched cards serve in Jacquard's loom and Hollerith's machine?", options: ["Controlling actions and storing data patterns", "Displaying screen outputs", "Storing primary RAM instructions", "Cooling internal gears"] },
    { id: 26, q: "Charles Babbage is historically referred to as the father of computing due to proposing:", options: ["The Abacus framework", "The Difference and Analytical Engines", "The Pascaline gear design", "Logarithmic bones"] },
    { id: 27, q: "Which device uses simple mechanical manipulations to read numerical computation results quickly?", options: ["Slide Rule", "ENIAC", "UNIVAC", "Microprocessor"] },
    { id: 28, q: "Electro-mechanical devices differ from purely mechanical devices because they:", options: ["Combine electrical components with physical mechanical moving parts", "Use artificial intelligence", "Do not contain moving physical parts", "Depend entirely on silicon microchips"] },
    { id: 29, q: "Which of these is an example of an electro-mechanical office sorting device?", options: ["Abacus", "Mail sorters / Label printers", "Slide Rule", "Pascaline"] },
    { id: 30, q: "Who began designing the IAS stored-program electronic computer architecture in 1947?", options: ["Charles Babbage", "John Von Neumann", "Herman Hollerith", "Blaise Pascal"] },
    { id: 31, q: "What does the abbreviation ENIAC stand for?", options: ["Electronic Numerical Integrator and Computer", "Electronic Network Integrated Automatic Computer", "Electrical Numerical Internal Access Calculator", "Essential Number System Algorithmic Code"] },
    { id: 32, q: "What does the abbreviation UNIVAC stand for?", options: ["Unified Vector Automated Code", "Universal Automatic Computer", "Universal Advanced Access Calculator", "Unit Integrated Vacuum Computer"] },
    { id: 33, q: "Which of the following is an everyday modern electronic device embedded with computer-based control?", options: ["Automated Teller Machine (ATM)", "Logarithm rod", "Slide rule", "Jacquard loom"] },
    { id: 34, q: "Electronic voting devices like Direct Recording Electronic (DRE) systems rely on which input method for reading marks?", options: ["Punched paper strips", "Logarithm sliders", "Optical Mark Recognition (OMR)", "Manual gear counting"] },
    { id: 35, q: "What major technology shift separated electronic computing devices from electro-mechanical devices?", options: ["Replacing moving mechanical relays with electronic vacuum tubes and circuits", "Replacing electricity with steam power", "Using wooden counting beads", "Switching to pure manual gear manipulation"] },
    { id: 36, q: "Which early stored-program electronic computer design set the foundation for modern computer architecture?", options: ["Pascaline", "Von Neumann Machine (IAS)", "Abacus", "Slide Rule"] },
    { id: 37, q: "Microwave ovens and modern sewing machines contain microcontrollers, making them examples of:", options: ["Modern electronic computer-based devices", "Mechanical gear devices", "Ancient counting devices", "Electro-mechanical looms"] },
    { id: 38, q: "Which electronic counting system uses specialized optical technology to read filled-in bubbles on papers?", options: ["Pascaline Reader", "Optical Mark Recognition (OMR)", "Difference Engine", "Direct Mechanical Recorder"] },
    { id: 39, q: "In modern electronic computing, what allows machines like industrial robots to run operations automatically?", options: ["Stored electronic programs", "Manual hand cranks", "Punched cards", "Wooden beads"] },
    { id: 40, q: "What defines a 'computer generation'?", options: ["Stages of development based on major changes in hardware technology over time", "The physical size of the monitor screen", "The brand name of the manufacturer", "The total number of software applications installed"] },
    { id: 41, q: "Which major electronic technology was used in First Generation computers (1940–1956)?", options: ["Transistors", "Vacuum Tubes", "Integrated Circuits (IC)", "Microprocessors"] },
    { id: 42, q: "What were key characteristics of First Generation computers like ENIAC and UNIVAC?", options: ["Very large in size, generated high heat, and consumed high electricity", "Small, portable, and low power consumption", "Used artificial intelligence and voice recognition", "Utilized silicon microprocessors"] },
    { id: 43, q: "Second Generation computers (1956–1963) replaced vacuum tubes with which technology?", options: ["Transistors", "Microprocessors", "Integrated Circuits", "Artificial Intelligence"] },
    { id: 44, q: "What was a major advantage of Second Generation transistors over First Generation vacuum tubes?", options: ["Required zero electricity", "Smaller size, faster operation, and generated less heat", "Introduced touchscreens", "Eliminated machine code completely"] },
    { id: 45, q: "Third Generation computers (1964–1971) were characterized by the invention of which technology?", options: ["Integrated Circuits (IC)", "Vacuum Tubes", "Transistors", "Microprocessors"] },
    { id: 46, q: "Which generation of computers introduced Operating Systems to manage memory and execution?", options: ["First Generation", "Third Generation", "Second Generation", "Fifth Generation"] },
    { id: 47, q: "Fourth Generation computers (1971–Present) are built using which central technology?", options: ["Microprocessors", "Vacuum Tubes", "Transistors", "Magnetic Drums"] },
    { id: 48, q: "What technology defines Fifth Generation computers (Present and Beyond)?", options: ["Vacuum Tubes", "Transistors", "Artificial Intelligence (AI)", "Integrated Circuits"] },
    { id: 49, q: "Which of the following features belongs to Fifth Generation computing systems?", options: ["Voice recognition, robotics, and systems that can learn", "Using assembly language only", "Enormous room-sized frames", "High dependency on punched cards"] }
  ],
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
  "Year 10": [
    { id: 0, q: "What is the evolution of computing devices?", options: ["The sudden discovery of modern microprocessors", "The process of writing computer programs using high-level code", "The gradual development and improvement of counting and calculating tools over time", "The replacement of electronic computers with mechanical gears"] },
    { id: 1, q: "Which of the following was used as an early manual counting method before mechanical devices were invented?", options: ["Vacuum tubes", "Fingers, stones, and cowries", "Transistors", "Integrated circuits"] },
    { id: 2, q: "Which early mechanical device invented by the Chinese is made up of a frame with beads on vertical threads?", options: ["Pascaline", "Slide Rule", "Abacus (Soroban / Suan Pan)", "Napier's Bones"] },
    { id: 3, q: "What mathematical tool invented by John Napier in 1617 allows multiplication via addition?", options: ["Logarithms", "Punched cards", "Binary logic", "Vacuum scales"] },
    { id: 4, q: "Which counting tool consisted of eleven four-sided rods made of bone for performing multiplication?", options: ["Jacquard Loom", "Pascaline", "Abacus", "Napier's Bones"] },
    { id: 5, q: "Built in England in 1632, which device uses two logarithmic scales to allow rapid multiplication and division?", options: ["Slide Rule", "Abacus", "Leibnitz Calculator", "Pascaline"] },
    { id: 6, q: "Invented by Blaise Pascal in 1642, the Pascaline was the first mechanical calculator designed primarily for:", options: ["Multiplying large prime numbers", "Punched card census counting", "Addition and subtraction of up to 8-digit numbers", "Evaluating logarithmic tables"] },
    { id: 7, q: "How did Gottfried Baron Von Leibnitz improve upon Blaise Pascal's calculator design?", options: ["He added electronic vacuum tubes", "He added toothed wheels to enable multiplication by repeated addition", "He used microprocessors", "He introduced artificial intelligence"] },
    { id: 8, q: "Which device introduced punched cards to control and program intricate woven patterns into cloth?", options: ["Jacquard Loom", "Abacus", "Slide Rule", "Difference Engine"] },
    { id: 9, q: "Who designed the Difference Engine in 1822 to solve polynomial equations using the method of differences?", options: ["John Napier", "Charles Babbage", "Blaise Pascal", "Herman Hollerith"] },
    { id: 10, q: "Why is Charles Babbage's Analytical Engine (1834) historically significant?", options: ["It was the first hand-held pocket calculator", "It incorporated an ALU, control flow, and memory, making it the first general-purpose computer design", "It was powered by artificial intelligence", "It replaced silicon microchips with vacuum tubes"] },
    { id: 11, q: "Which mechanical counting machine was built out of wood and beads about 5000 years ago?", options: ["Abacus", "Slide Rule", "Pascaline", "Jacquard Loom"] },
    { id: 12, q: "What defines a 'computer generation'?", options: ["The weight and physical color of a monitor", "Stages of computer development based on major hardware technology changes over time", "The geographical location where a computer is built", "The number of users connected to a network"] },
    { id: 13, q: "Which core technology powered First Generation computers (1940–1956)?", options: ["Transistors", "Integrated Circuits (IC)", "Vacuum Tubes", "Microprocessors"] },
    { id: 14, q: "Which of the following is a key characteristic of First Generation computers like ENIAC and UNIVAC?", options: ["Used artificial intelligence", "Very small and portable", "Very large in size, generated high heat, and consumed high electricity", "Utilized silicon microprocessors"] },
    { id: 15, q: "What technology replaced vacuum tubes in Second Generation computers (1956–1963)?", options: ["Transistors", "Integrated Circuits", "Microprocessors", "Robotics"] },
    { id: 16, q: "Which programming language type was introduced during the Second Generation of computing?", options: ["Machine Code only", "Assembly Language", "Python", "HTML"] },
    { id: 17, q: "Third Generation computers (1964–1971) were defined by which central technological breakthrough?", options: ["Integrated Circuits (ICs)", "Vacuum tubes", "Microprocessors", "Punched cards"] },
    { id: 18, q: "Which generation saw the first introduction of Operating Systems to manage computer memory and task execution?", options: ["First Generation", "Third Generation", "Second Generation", "Fifth Generation"] },
    { id: 19, q: "Fourth Generation computers (1971–Present) use which technology component on a single chip?", options: ["Microprocessors", "Vacuum tubes", "Magnetic drums", "Valves"] },
    { id: 20, q: "Which computer generation made computing devices small and affordable enough to become Personal Computers (PCs)?", options: ["First Generation", "Fourth Generation", "Second Generation", "Third Generation"] },
    { id: 21, q: "Fifth Generation computing (Present and Beyond) is centered around which advancing technology?", options: ["Vacuum tubes", "Artificial Intelligence (AI)", "Transistors", "Integrated Circuits"] },
    { id: 22, q: "Which of the following features belongs to Fifth Generation computing systems?", options: ["Voice recognition, expert systems, and robotics", "Using assembly language only", "Enormous room-sized frames", "High dependency on punched cards"] },
    { id: 23, q: "IBM 1401 and Honeywell 400 are notable examples of which computer generation?", options: ["Second Generation", "First Generation", "Fourth Generation", "Fifth Generation"] },
    { id: 24, q: "IBM System/360 and PDP-11 belong to which computer generation?", options: ["Third Generation", "First Generation", "Second Generation", "Fourth Generation"] },
    { id: 25, q: "Which three criteria are commonly used to classify computers?", options: ["Brand, Price, and Screen Resolution", "Size, Usage/Type (data handled), and Functionality (purpose)", "Weight, Color, and Keyboard layout", "Country of manufacture, Age, and Speed"] },
    { id: 26, q: "Which type of computer measures and processes continuous physical data (e.g., speed or temperature)?", options: ["Digital Computer", "Analog Computer", "Hybrid Computer", "Microcomputer"] },
    { id: 27, q: "A clinical hospital monitoring machine that combines both analog measurement and digital processing is a:", options: ["Hybrid Computer", "Mainframe Computer", "Digital Computer", "Special-purpose Microcomputer"] },
    { id: 28, q: "Digital computers process data using which representation?", options: ["Continuous physical signals", "Numbers, letters, and discrete binary symbols", "Fluid pressure readings", "Gear rotation angles"] },
    { id: 29, q: "Which category of computers by size is the largest, fastest, and used for space research and weather forecasting?", options: ["Mainframe Computer", "Supercomputer", "Minicomputer", "Microcomputer"] },
    { id: 30, q: "Large institutions like banks use which type of large computer to handle thousands of users simultaneously?", options: ["Mainframe Computer", "Microcomputer", "Supercomputer", "Analog Computer"] },
    { id: 31, q: "Desktops, laptops, tablets, and smartphones are classified under which size category?", options: ["Microcomputers", "Mainframe Computers", "Minicomputers", "Supercomputers"] },
    { id: 32, q: "A computer system designed to perform a wide variety of tasks (e.g., school/office PCs) is known as a:", options: ["Special-Purpose Computer", "General-Purpose Computer", "Dedicated Controller", "Analog System"] },
    { id: 33, q: "An Automated Teller Machine (ATM) or traffic light controller is an example of a:", options: ["General-Purpose Computer", "Special-Purpose Computer", "Supercomputer", "Mainframe System"] },
    { id: 34, q: "Which of the following is an example of an Analog Computer?", options: ["Desktop computer", "Automobile speedometer", "Smartphone", "Mainframe server"] },
    { id: 35, q: "Medium-sized computers typically used by small businesses and institutions are called:", options: ["Minicomputers", "Supercomputers", "Microcomputers", "Analog Computers"] },
    { id: 36, q: "What is computer hardware?", options: ["Programs and instructions that control execution", "The physical, touchable parts of a computer system", "The digital data files stored on a drive", "The cloud network protocols"] },
    { id: 37, q: "Which component is the main enclosure box that holds the internal hardware parts of a computer?", options: ["System Unit", "Monitor", "Peripheral enclosure", "Expansion slot"] },
    { id: 38, q: "What is the motherboard in a computer system?", options: ["The secondary storage drive", "The main printed circuit board connecting all internal components", "The temporary working memory module", "The power adapter cable"] },
    { id: 39, q: "The Central Processing Unit (CPU) is often described as the:", options: ["Brain of the computer that carries out instructions and performs calculations", "Long-term file archive unit", "Visual display monitor controller", "Power conversion unit"] },
    { id: 40, q: "What is Random Access Memory (RAM)?", options: ["Permanent memory holding startup instructions", "Temporary, volatile working memory that loses contents when power is turned off", "Auxiliary long-term disk storage", "External expansion hardware"] },
    { id: 41, q: "How does Read Only Memory (ROM) differ from RAM?", options: ["ROM loses contents when powered down", "ROM is slow secondary disk storage", "ROM is non-volatile permanent memory that holds start-up instructions (BIOS)", "ROM stores dynamic temporary app data"] },
    { id: 42, q: "Which hardware part converts household AC electricity into DC electricity needed by internal computer parts?", options: ["Power Supply Unit (PSU)", "Heat sink", "CMOS Battery", "Motherboard chipset"] },
    { id: 43, q: "What is the primary function of the CMOS battery on the motherboard?", options: ["Powers the CPU cooling fan", "Keeps the system date and time updated when the computer is turned off", "Generates display output", "Powers the hard drive motor"] },
    { id: 44, q: "Which component removes heat generated by the Central Processing Unit (CPU)?", options: ["Cooling fan / Heat sink", "CMOS Battery", "Expansion card", "BIOS chip"] },
    { id: 45, q: "What are peripheral devices?", options: ["Internal CPU registers", "Software code files", "Hardware devices located outside the system unit that plug into the computer", "Memory slots on the motherboard"] },
    { id: 46, q: "Which of the following is an example of primary storage (main memory)?", options: ["Hard Disk Drive (HDD)", "RAM and ROM", "USB Flash Drive", "Solid State Drive (SSD)"] },
    { id: 47, q: "Which of the following is classified as secondary storage?", options: ["RAM Memory", "CPU Cache", "Hard Disk Drive (HDD) / Solid State Drive (SSD)", "ROM Memory"] },
    { id: 48, q: "Hardware components cannot function without which complementary element?", options: ["Software", "Punched cards", "Vacuum tubes", "Cooling fans"] },
    { id: 49, q: "Which card expansion slot on a motherboard allows enhancing display and graphic output performance?", options: ["Graphics card (GPU)", "Network card (NIC)", "Sound card", "BIOS chip"] }
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
  ],
  "Year 12": [
    {"id":0,"q":"What is the primary function of an Operating System (OS)?","options":["To design graphic logos","To run web searches","To manage hardware resources, files, and user execution","To translate vocal commands"]},
    {"id":1,"q":"Which user interface relies on text-driven commands and prompt syntax?","options":["GUI","WIMP","API","CLI"]},
    {"id":2,"q":"What does the acronym WIMP stand for in graphical interfaces?","options":["Web, Internet, Media, Programs","Workstation, Integrated, Memory, Processing","Windows, Icons, Menus, Pointer","Wireless, Input, Management, Platform"]},
    {"id":3,"q":"Which metric is a core characteristic of a Command Line Interface (CLI)?","options":["High GPU resource consumption","Complex point-and-click navigation","Limited customizability","Low system overhead and high script execution speed"]},
    {"id":4,"q":"Which of the following is an example of a Graphical User Interface (GUI)?","options":["Linux Bash","Windows Command Prompt","PowerShell","Windows 11"]},
    {"id":5,"q":"Which CLI command lists files and folders in Windows Command Prompt?","options":["cd","mkdir","open","dir /b"]},
    {"id":6,"q":"Which command is used to create a new directory via the command prompt?","options":["cd","dir","ls","mkdir"]},
    {"id":7,"q":"Which metric correctly describes a Graphical User Interface (GUI)?","options":["Requires minimal RAM","Offers lower accessibility for beginners","Executes scripts faster than CLI","Consumes higher RAM and graphics processor resources"]},
    {"id":8,"q":"What is the smallest unit of digital data in a computer system?","options":["Byte","Nibble","Word","Bit"]},
    {"id":9,"q":"A nibble consists of how many binary bits?","options":["2 bits","8 bits","16 bits","4 bits"]},
    {"id":10,"q":"How many bits make up one Byte?","options":["4 bits","16 bits","32 bits","8 bits"]},
    {"id":11,"q":"A standard 'Word' in computer design architecture usually contains how many bits?","options":["8 bits","32 bits","64 bits","16 bits"]},
    {"id":12,"q":"How many bytes are in 1 Kilobyte (KB)?","options":["1000 bytes","512 bytes","2048 bytes","1024 bytes"]},
    {"id":13,"q":"Which storage unit equals 2^30 bytes (approximately 1 billion bytes)?","options":["Megabyte (MB)","Terabyte (TB)","Petabyte (PB)","Gigabyte (GB)"]},
    {"id":14,"q":"Secondary storage devices (e.g., hard disks) differ from RAM because:","options":["They are directly accessible by the CPU","They are volatile temporary storage","They cannot hold digital files","They are non-volatile and not directly accessible by the CPU"]},
    {"id":15,"q":"What operation is performed when converting from a higher storage unit to a smaller unit?","options":["Addition","Division","Subtraction","Multiplication"]},
    {"id":16,"q":"What arithmetic operation converts a smaller storage unit to a higher unit?","options":["Multiplication","Exponential","Modulus","Division"]},
    {"id":17,"q":"Converting 2048 bytes into Kilobytes (KB) yields:","options":["1 KB","4 KB","20.48 KB","2 KB"]},
    {"id":18,"q":"How many Megabytes (MB) are in 2 Gigabytes (GB)?","options":["2000 MB","1024 MB","4096 MB","2048 MB"]},
    {"id":19,"q":"How many nibbles are equal to 32 bits?","options":["4 nibbles","16 nibbles","64 nibbles","8 nibbles"]},
    {"id":20,"q":"Converting 5 Kilobytes (KB) to bytes yields:","options":["5000 bytes","5242 bytes","10245 bytes","5120 bytes"]},
    {"id":21,"q":"What is a computer file?","options":["A CPU hardware component","A physical folder in a cabinet","A volatile memory block","A structured collection of related data stored under a specific name"]},
    {"id":22,"q":"What character separates a file name from its file extension?","options":["A comma (,)","A hyphen (-)","A slash (/)","A dot (.)"]},
    {"id":23,"q":"Which level of the Logical Data Hierarchy comes immediately after Byte/Character?","options":["Bit","Record","Database","Field"]},
    {"id":24,"q":"In the logical data hierarchy, what is a 'Field'?","options":["A single bit value","A collection of integrated tables","A complete set of student records","A grouping of characters forming a meaningful attribute"]},
    {"id":25,"q":"Which option represents a 'Record' in logical data organization?","options":["The letter 'A'","An entire database file","An Excel sheet grid","A collection of related fields describing a single entity"]},
    {"id":26,"q":"Which list correctly orders the logical data hierarchy from smallest to largest?","options":["Database, Record, Field, Bit","Bit, Record, Field, Database","Field, Bit, Record, Database","Bit, Field, Record, Database"]},
    {"id":27,"q":"Which file extension indicates an executable program file?","options":[".docx",".mp3",".jpg",".exe"]},
    {"id":28,"q":"What is an integrated collection of logically related files or tables called?","options":["Field","Record","Byte","Database"]},
    {"id":29,"q":"Which device is an example of non-volatile secondary storage?","options":["RAM","CPU Register","Cache Memory","Hard Drive / USB Flash Drive"]},
    {"id":30,"q":"What is a spreadsheet application package?","options":["A graphics editing tool","A slideshow design program","An application software used to process data in tabular form (rows and columns)","An operating system service"]},
    {"id":31,"q":"How is data organized inside a spreadsheet worksheet?","options":["Paragraphs and bullets","Slides and frames","Nodes and vectors","Rows and columns"]},
    {"id":32,"q":"Which of the following is the most widely used spreadsheet software?","options":["CorelDraw","Photoshop","Access","Microsoft Excel"]},
    {"id":33,"q":"Which spreadsheet software is developed by Apple?","options":["Lotus 1-2-3","Quattro Pro","OpenOffice Calc","Apple Numbers"]},
    {"id":34,"q":"Which spreadsheet feature allows users to automate repetitive tasks?","options":["Charts","Worksheets","Cell borders","Macros"]},
    {"id":35,"q":"Which spreadsheet feature represents data visually?","options":["Macros","Status Bar","Name Box","Charts"]},
    {"id":36,"q":"Which of the following is NOT a spreadsheet package?","options":["Lotus 1-2-3","LibreOffice Calc","Google Sheets","Microsoft Word"]},
    {"id":37,"q":"Spreadsheets are primarily designed to process which type of data?","options":["Audio clips","Video frames","Vector shapes","Numerical data"]},
    {"id":38,"q":"Which cloud-based spreadsheet is accessible via web browsers?","options":["Lotus 1-2-3","Quattro Pro","Kingsoft Desktop","Google Sheets"]},
    {"id":39,"q":"Managing personal and business budgets is a primary application of:","options":["Presentation packages","Desktop publishing software","Media players","Spreadsheet packages"]},
    {"id":40,"q":"What is a workbook in Microsoft Excel?","options":["A single cell grid","A toolbar item","A chart template","A single file containing one or more worksheets"]},
    {"id":41,"q":"What is a cell in a spreadsheet?","options":["An entire workbook page","A menu bar","A graph element","The intersection of a row and a column"]},
    {"id":42,"q":"How is a cell address designated in Excel?","options":["Row number then Column letter (e.g., 1A)","Column letter only","Row number only","Column letter then Row number (e.g., A1)"]},
    {"id":43,"q":"What is the currently selected cell with a thick border called?","options":["Formula bar","Inactive cell","Name Box","Active cell"]},
    {"id":44,"q":"Where is the Fill Handle located on an active cell?","options":["Top left corner","Center","Top right corner","Lower right corner"]},
    {"id":45,"q":"Which interface box displays the address of the active cell?","options":["Title Bar","Status Bar","Formula Bar","Name Box"]},
    {"id":46,"q":"Which bar allows entering or editing formulas and data in cells?","options":["Quick Access Toolbar","Scroll Bar","Tab Bar","Formula Bar"]},
    {"id":47,"q":"Text entered into a cell is commonly referred to as a:","options":["Value","Formula","Operator","Label"]},
    {"id":48,"q":"Every formula in Microsoft Excel MUST start with which symbol?","options":["#","@","+","="]},
    {"id":49,"q":"Which keyboard shortcut closes active application windows in Windows?","options":["Ctrl + C","Ctrl + Z","Shift + F5","Alt + F4"]},
    {"id":50,"q":"Where are window controls (Minimize, Maximize, Close) located?","options":["Bottom left corner","Formula bar","Status bar","Top right corner"]},
    {"id":51,"q":"Which ribbon tab contains common formatting commands like Bold and Font Color?","options":["Page Layout Tab","Data Tab","View Tab","Home Tab"]},
    {"id":52,"q":"What is worksheet formatting used for?","options":["Deleting cell values","Closing workbooks","Configuring hardware","Emphasizing data and enhancing presentation"]},
    {"id":53,"q":"A numerical entry inside a cell is referred to as a:","options":["Label","Macro","Header","Value"]},
    {"id":54,"q":"Which component allows switching between different worksheets?","options":["Scroll Bars","Zoom Slider","Title Bar","Worksheet Tabs"]},
    {"id":55,"q":"Which bar at the bottom displays status messages and zoom settings?","options":["Formula Bar","Title Bar","Quick Access Toolbar","Status Bar"]},
    {"id":56,"q":"Which Excel function sums a range of numbers?","options":["COUNT()","TOTAL()","ADD()","SUM()"]},
    {"id":57,"q":"Which function calculates the arithmetic mean of a range?","options":["MEAN()","MEDIAN()","SUM()","AVERAGE()"]},
    {"id":58,"q":"Which function counts only cells containing numeric values?","options":["COUNTA()","SUM()","INDEX()","COUNT()"]},
    {"id":59,"q":"Which logical function evaluates a condition as TRUE or FALSE?","options":["OR()","AND()","NOT()","IF()"]},
    {"id":60,"q":"What is the primary purpose of an organizational Corporate House Style?","options":["To authorize software licenses","To encrypt internal files","To guarantee a consistent visual identity across documents","To speed up database execution"]},
    {"id":61,"q":"Which element is defined within a document house style?","options":["IP Address mapping","Database structure","File compression settings","Mandatory font family and point size"]},
    {"id":62,"q":"What is a major benefit of enforcing a corporate house style?","options":["Eliminates data validation","Repairs hardware faults","Strengthens brand recognition and reduces formatting errors","Increases drive capacity"]},
    {"id":63,"q":"Automated spell checking fails to detect which type of error?","options":["Missing XML tags","Incorrect file extensions","Non-numeric values in integer fields","Contextual typos like using 'there' instead of 'their'"]},
    {"id":64,"q":"How does visual verification (proofreading) differ from software validation?","options":["Visual verification is done by software algorithms","Validation checks document margins","Proofreading is human inspection of layout and context","Validation checks syntax grammar"]},
    {"id":65,"q":"Which data validation check prevents mandatory fields from being left blank?","options":["Format Check","Range Check","Presence Check","Length Check"]},
    {"id":66,"q":"An exam score field accepting numbers strictly between 0 and 100 uses which validation?","options":["Character Check","Presence Check","Picture Check","Range Check"]},
    {"id":67,"q":"A field requiring an exact 11-digit identity number applies which check?","options":["Type Check","Format Check","Length Check","Lookup Check"]},
    {"id":68,"q":"Which check verifies that input matches a pattern structure like DD/MM/YYYY?","options":["Presence Check","Range Check","Length Check","Format Check (Picture Check)"]},
    {"id":69,"q":"If a telephone field rejects alphabetical characters, which check is active?","options":["Presence Check","Range Check","Character / Type Check","Length Check"]},
    {"id":70,"q":"What is the primary function of a chart in a spreadsheet?","options":["To encrypt numerical columns","To align cell text","To visually represent numerical data to identify trends and patterns","To compress flat-file data"]},
    {"id":71,"q":"Which chart type best shows continuous data trends over time?","options":["Pie Chart","Histogram","Doughnut Chart","Line Graph"]},
    {"id":72,"q":"When is a Pie Chart most effectively used?","options":["Tracking continuous temperature changes","Plotting high-frequency stock data","Displaying proportions or percentages of a single whole","Comparing non-adjacent series"]},
    {"id":73,"q":"In a column chart, what does the Value Axis (Y-Axis) represent?","options":["Category labels","Secondary legend key","The numerical scale used for measurement","Background gridlines"]},
    {"id":74,"q":"What chart element identifies colors or fill patterns assigned to data series?","options":["Category Axis Title","Data Value Label","Chart Header","Legend"]},
    {"id":75,"q":"Which key is held down to select non-contiguous cells for chart creation?","options":["Shift key","Alt key","Ctrl key","Tab key"]},
    {"id":76,"q":"When should a Secondary Axis (Dual Axis) be added to a chart?","options":["When plotting continuous text against discrete values","When exploding a pie slice","When plotting two data series with significantly different scales","When formatting 3D gridlines"]},
    {"id":77,"q":"Which technique pulls out a slice from a Pie Chart for emphasis?","options":["Cropping","Filtering","Segmenting","Exploding (Extracting)"]},
    {"id":78,"q":"Which chart represents frequency distributions across continuous ranges?","options":["Scatter Plot","Bar Chart","Histogram","Area Chart"]},
    {"id":79,"q":"What is the function of Data Value Labels printed on chart bars?","options":["Showing cell formulas","Displaying category names","Stating exact numerical values or percentages on data points","Setting scale limits"]},
    {"id":80,"q":"What is a Flat-File Database?","options":["A database storing data in encrypted XML pages","A database linking tables using foreign keys","A database storing all records in a single table, causing duplication","A cloud-hosted database"]},
    {"id":81,"q":"What is a key advantage of a Relational Database over a Flat-File Database?","options":["It requires no validation rules","It allows text entries only","It links tables using keys, reducing data redundancy","It eliminates primary key fields"]},
    {"id":82,"q":"What is a Primary Key in a database table?","options":["A field formatting cell borders","A field containing duplicate records","A field uniquely identifying each record in a table","A form control button"]},
    {"id":83,"q":"When importing data, what does .csv stand for?","options":["Computerized Standard Values","Centralized System Variable","Calculated Sequence Values","Comma-Separated Values"]},
    {"id":84,"q":"Which Access data type holds true/false or yes/no values?","options":["Text","AutoNumber","Boolean / Logical (Yes/No)","Currency"]},
    {"id":85,"q":"Which data type automatically generates sequential unique integers?","options":["Integer","Text","Currency","AutoNumber"]},
    {"id":86,"q":"Why are telephone numbers assigned Text data type rather than Number?","options":["Number fields hold max 5 digits","Text compresses files faster","To preserve leading zeros and prevent arithmetic operations","Number fields convert values to currency"]},
    {"id":87,"q":"Which database object provides a graphical interface for entering records?","options":["Query","Report","Table Grid","Form"]},
    {"id":88,"q":"In database design, what links a table to the Primary Key of a master table?","options":["Calculated Field","Control Label","Foreign Key","Macro Rule"]},
    {"id":89,"q":"Which data type is best for storing product prices?","options":["Text","AutoNumber","Currency","Boolean"]},
    {"id":90,"q":"Which database view defines field names, data types, and primary keys?","options":["Form View","Report Wizard","Datasheet View","Design View"]},
    {"id":91,"q":"What happens when importing a flat .csv file into a relational database?","options":["Primary keys are deleted","Text converts to currency","Delimited text is structured into tables and fields","Validation rules are disabled"]},
    {"id":92,"q":"Which Access feature restricts input to user selection lists?","options":["AutoNumber Generator","Format Rule Wizard","Lookup Control (Dropdown)","Calculated Field"]},
    {"id":93,"q":"What is the main function of a Foreign Key?","options":["Counting total tables","Establishing a relationship between two tables","Calculating averages","Encrypting field values"]},
    {"id":94,"q":"Which Access view displays record rows and columns for direct editing?","options":["Design View","Form Layout View","Structure View","Datasheet View"]},
    {"id":95,"q":"Why is data validation implemented in database design?","options":["To format tables with colors","To ensure data entered is sensible, reasonable, and accurate","To generate presentation reports","To eliminate primary keys"]},
    {"id":96,"q":"Which database component extracts specific data matching criteria?","options":["Form","Report","Query","Macro"]},
    {"id":97,"q":"What is a Calculated Field in a query?","options":["A fixed numerical table column","An auto-incrementing key","A new field created in a query performing calculations on existing fields","A validation rule"]},
    {"id":98,"q":"Which wildcard symbol represents any number of unknown characters in queries?","options":["Question mark (?)","Exclamation mark (!)","Ampersand (&)","Asterisk (*)"]},
    {"id":99,"q":"Which query syntax creates a calculated field named 'TotalCost' multiplying 'Price' by 'Quantity'?","options":["TotalCost = Price * Quantity","TotalCost := [Price] x [Quantity]","TotalCost: [Price] * [Quantity]","CALCULATE TotalCost ([Price] * [Quantity])"]}
  ]
};

const answerKeys = {
  "Year 7": [
    1, 0, 2, 2, 0, 1, 1, 1, 0, 2,
    1, 0, 1, 0, 2, 0, 1, 0, 2, 0,
    0, 1, 0, 1, 2, 0, 1, 0, 0, 1,
    1, 0, 1, 0, 2, 0, 1, 0, 1, 0,
    0, 1, 0, 0, 1, 0, 1, 0, 2, 0
  ],
  "Year 8": [
    1, 2, 0, 1, 2, 2, 0, 2, 2, 1,
    1, 1, 1, 1, 2, 2, 0, 1, 1, 1,
    1, 1, 2, 2, 1, 1, 2, 2, 2, 1
  ],
  "Year 9": [
    0, 1, 0, 0, 0, 0, 3, 1, 0, 0,
    1, 1, 0, 1, 0, 1, 1, 0, 0, 2,
    0, 1, 1, 0, 1, 1, 0, 1, 0, 0,
    0, 0, 1, 0, 0, 0, 1, 1, 1, 0,
    0, 0, 1, 0, 1, 1, 1, 1, 0, 1
  ],
  "Year 10": [
    2, 1, 2, 0, 3, 0, 2, 1, 0, 1,
    1, 0, 1, 2, 2, 0, 1, 0, 1, 0,
    1, 1, 0, 0, 0, 1, 1, 0, 1, 1,
    0, 0, 1, 1, 1, 0, 1, 0, 1, 0,
    1, 2, 0, 1, 0, 2, 1, 2, 0, 0
  ],
  "Year 11": [
    2, 3, 2, 3, 2, 2, 3, 2, 3, 2,
    2, 3, 2, 2, 3, 2, 2, 3, 2, 2,
    2, 2, 2, 3, 2, 3, 2, 3, 2, 2,
    3, 2, 2, 2, 3, 2, 2, 2, 2, 2,
    2, 2, 3, 2, 2, 2, 2, 3, 2, 2
  ],
  "Year 12": [
    2, 3, 2, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    2, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    2, 3, 2, 3, 2, 2, 3, 2, 3, 2,
    2, 3, 2, 2, 3, 2, 2, 3, 2, 2,
    2, 2, 2, 3, 2, 3, 2, 3, 2, 2,
    3, 2, 2, 2, 3, 2, 2, 2, 3, 2
  ]
};

let activeBatch = [];
let activeQuestionBank = [];
let userAnswers = {};
let attemptCounter = 1;
let historyLog = [];
let studentName = "";
let studentClass = "";

function getQuestionsPerAttempt(className) {
  return className === "Year 12" ? 20 : 5;
}

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
  const questionsPerAttempt = getQuestionsPerAttempt(classInput.value);
  if (!activeQuestionBank || activeQuestionBank.length < questionsPerAttempt) {
    classInput.classList.add("input-error");
    classInput.setAttribute("aria-invalid", "true");
    const classError = document.getElementById("class-error");
    classError.textContent = `Questions for ${classInput.value} are not available yet. Please choose a class with available questions.`;
    classError.style.display = "block";
    classInput.focus();
    return;
  }

  const answerKey = answerKeys[classInput.value];
  if (!answerKey || activeQuestionBank.some(question =>
    !Number.isInteger(answerKey[question.id]) ||
    answerKey[question.id] < 0 ||
    answerKey[question.id] >= question.options.length
  )) {
    classInput.classList.add("input-error");
    classInput.setAttribute("aria-invalid", "true");
    const classError = document.getElementById("class-error");
    classError.textContent = `The answer key for ${classInput.value} is incomplete. Please contact your teacher.`;
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
  activeBatch = shuffledBank.slice(0, getQuestionsPerAttempt(studentClass));
  userAnswers = {};

  document.getElementById("attempt-count").innerText = `Attempt: #${attemptCounter}`;
  document.getElementById("questions-per-session").innerText = `Questions: ${activeBatch.length} per session`;
  document.getElementById("quiz-body").style.display = "block";
  document.getElementById("nav-buttons").style.display = "flex";
  document.getElementById("result-box").style.display = "none";
  
  renderQuestions();
}

function renderQuestions() {
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
  error.textContent = `Please answer all ${activeBatch.length} questions before submitting. Question ${activeBatch.indexOf(unanswered) + 1} needs an answer.`;
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
      document.getElementById("score-details").innerText = `${studentName}, you scored ${data.score} out of ${data.total} correctly.`;
      renderAnswerReview();
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

function renderAnswerReview() {
  const reviewList = document.getElementById("answer-review-list");
  reviewList.innerHTML = "";

  activeBatch.forEach((question, index) => {
    const correctOptionIdx = answerKeys[studentClass][question.id];
    const selectedOptionIdx = userAnswers[question.id];
    const card = document.createElement("article");
    card.className = "review-question";

    const title = document.createElement("h4");
    title.className = "review-question-title";
    title.innerText = `Q${index + 1}. ${question.q}`;
    card.appendChild(title);

    const options = document.createElement("ul");
    options.className = "review-options";
    question.options.forEach((option, optionIdx) => {
      const item = document.createElement("li");
      item.className = "review-option";
      const marker = document.createElement("span");
      marker.className = "review-marker";
      marker.setAttribute("aria-hidden", "true");
      const label = document.createElement("span");
      label.className = "sr-only";

      if (optionIdx === correctOptionIdx) {
        item.classList.add("review-option-correct");
        marker.innerText = "✓";
        label.innerText = "Correct answer";
      } else if (optionIdx === selectedOptionIdx) {
        item.classList.add("review-option-incorrect");
        marker.innerText = "×";
        label.innerText = "Your incorrect answer";
      } else {
        marker.innerText = "";
        label.innerText = "";
      }

      const optionText = document.createElement("span");
      optionText.innerText = option;
      item.append(marker, optionText, label);
      options.appendChild(item);
    });

    card.appendChild(options);
    reviewList.appendChild(card);
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
  document.getElementById("next-attempt-description").innerText =
    `You will receive a new batch of ${getQuestionsPerAttempt(studentClass)} random questions. Are you ready for attempt #${attemptCounter + 1}?`;
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
