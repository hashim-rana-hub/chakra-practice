const { exec } = require("child_process");

// Windows
exec("taskkill /IM Code.exe /F", (err) => {
  if (err) {
    console.error("⚠️ Couldn't close VS Code:", err.message);
  } else {
    console.log("💀 VS Code closed before dev server started 💀");
  }
});

// macOS/Linux → replace with:
// exec("pkill code", ...)
