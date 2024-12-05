document.addEventListener("DOMContentLoaded", function () {
       const timerElement = document.getElementById("timer");
       const outputElement = document.getElementById("output");
       const inputElement = document.getElementById("user-input");
       const h1Element = document.getElementById("title");
       const h2Element = document.getElementById("EndMessage");
   
       let time = 5 * 60;
       let currentLineIndex = 0;
   
       const password = "SECURITY"; 
       let passwordIndex = 0;
   
       const codeLines = [
           "Initializing core system...",
           "███▓▒░░ Loading module: 0x7b8b21 ░░▒▓███",
           "[✔] Accessing mainframe...",
           "[+] Checking server status... OK",
           "[!] Rebooting kernel...",
           "░▒▓█ Decrypting user data █▓▒░",
           "[-] Attempting secure connection...",
           "[~] Running diagnostic tool...",
           "[✔] Boot sequence completed.",
           "Executing bypass protocol...",
           "▒▒▒ Retrieving classified files ▒▒▒",
           "[✔] What letter do you add to http to secure your site?",
           "[+] widely used means of online communication for sending messages, often associated with risks of phishing or spam?",
           "[!] A set of practices and technologies used to protect systems, networks and data against digital threats?",
           "[✔] Which portable storage device, often used to transfer data, can also be a source of malware if infected?",
           "What term refers to the action of resetting a forgotten password?",
           "[~] Next key password [I]...",
           "██▓▒▒ DEBUGGING ROOT ▒▒▓██",
           "After finding the first letters try to guess the remaining 2 letters to complete the password",
           "FIND THE PASSWORD TO ESCAPE...",
       ];
   
       const rebootLines = [
           "Initializing core system...",
           "███▓▒░░ Loading module: 0x7b8b21 ░░▒▓███",
           "[✔] Accessing mainframe...",
           "[+] Checking server status... OK",
           "[!] Rebooting kernel...",
           "░▒▓█ Decrypting user data █▓▒░",
           "[-] Attempting secure connection...",
           "[~] Running diagnostic tool...",
           "[✔] Boot sequence completed.",
           "Executing bypass protocol...",
           "[~] Rebooting system...",
           "[*] Shutting down services...",
           "[!] Disconnecting from mainframe...",
           "[✔] System reset completed.",
           "[*] Restarting core...",
           "[✔] Boot sequence reinitialized.",
           "[~] System rebooted.",
       ];
   
       function updateTimer() {
           const minutes = Math.floor(time / 60);
           const seconds = time % 60;
   
           timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
               .toString()
               .padStart(2, "0")}`;
   
           if (time > 0) {
               if (time <= 60) timerElement.classList.add("blink");
               time--;

           } else {
               clearInterval(timerInterval);
               clearInterval(lineInterval);
               handleTimeout();

           }
       }
   
       function updateOutput() {
           if (currentLineIndex < codeLines.length) {
               outputElement.textContent += codeLines[currentLineIndex] + "\n";
               currentLineIndex++;
               outputElement.scrollTop = outputElement.scrollHeight;
           }
       }
       let isEndMessageDisplayed = false; 

       function handleTimeout() {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "black";

        let blinkCount = 0;
        const blinkInterval = setInterval(() => {
            const opacity = blinkCount % 2 === 0 ? 1 : 0.5;
            outputElement.style.opacity = opacity;
            inputElement.style.opacity = opacity;
            timerElement.style.opacity = opacity;
            h1Element.style.opacity = opacity;

            blinkCount++;

            if (blinkCount >= 9) {
                clearInterval(blinkInterval);
                outputElement.style.display = "none";
                inputElement.style.display = "none";
                timerElement.style.display = "none";
                h1Element.style.display = "none";
                typeMessage("YOU LOST YOUR FILES");
            }
        }, 300);
    }

       function updateRebootOutput() {
              if (currentLineIndex < rebootLines.length) {
                  outputElement.textContent += rebootLines[currentLineIndex] + "\n";
                  currentLineIndex++;
                  outputElement.scrollTop = outputElement.scrollHeight;
              } else {
                  if (!isEndMessageDisplayed) {
                      document.body.style.backgroundColor = "black";
                      document.body.style.color = "black";
          
                      let blinkCount = 0;
                      const blinkInterval = setInterval(() => {
                          const opacity = blinkCount % 2 === 0 ? 1 : 0.5;
                          outputElement.style.opacity = opacity;
                          inputElement.style.opacity = opacity;
                          timerElement.style.opacity = opacity;
                          h1Element.style.opacity = opacity;
          
                          blinkCount++;
          
                          if (blinkCount >= 9) { 
                              clearInterval(blinkInterval);
                              outputElement.style.display = "none";
                              inputElement.style.display = "none";
                              timerElement.style.display = "none";
                              h1Element.style.display = "none";
                              typeMessage("You managed to save your files, but next time you might not be so lucky");
                          }
                      }, 300); 
                      inputElement.disabled = true;
                      isEndMessageDisplayed = true; // Marquer que le message a été affiché
                  }
              }
          }
          
          
          function typeMessage(message) {
              const messageElement = document.createElement("h2");
              messageElement.classList.add("terminal-message");
              document.body.appendChild(messageElement);
          
              let index = 0;
              function typeText() {
                  if (index < message.length) {
                      messageElement.textContent += message[index];
                      index++;
                      setTimeout(typeText, 100);
                  } else {
                      addBlinkingCursor(messageElement);
                  }
              }
          
              typeText();
          }
          
          

       inputElement.addEventListener("input", function () {
           const userInput = inputElement.value.trim();
   
           const enteredChar = userInput[passwordIndex]?.toUpperCase();
           const expectedChar = password[passwordIndex];
   
           if (passwordIndex < password.length && enteredChar) {
               if (enteredChar === expectedChar) {
                   outputElement.textContent += `[✔] The character "${enteredChar}" is valid\n`;
                   passwordIndex++;
               } else {
                   outputElement.textContent += `[✘] The character "${enteredChar}" is invalid\n`;
               }
   
               outputElement.scrollTop = outputElement.scrollHeight;
           }
   
           if (passwordIndex === password.length) {
               clearInterval(timerInterval);
               clearInterval(lineInterval);
   
               currentLineIndex = 0;
               const rebootInterval = setInterval(updateRebootOutput, 200);
           }
       });
   
       const timerInterval = setInterval(updateTimer, 1000);
       const lineInterval = setInterval(updateOutput, 200);
   
       updateTimer();
   });