// const apiUrl = "http://localhost:3000/ai/get-review";

// document.getElementById("analyzeBtn").addEventListener("click", async () => {
//   const code = document.getElementById("codeInput").value;

//   if (!code.trim()) {
//     alert("Please enter some code.");
//     return;
//   }

//   try {
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer YOUR_API_KEY",
//       },
//       body: JSON.stringify({ code: code }),
//     });

//     const contentType = response.headers.get("content-type");

//     if (!contentType || !contentType.includes("application/json")) {
//       const text = await response.text();
//       console.error("Non-JSON response:", text);
//       throw new Error("Invalid response format: " + text);
//     }

//     const result = await response.json();
//     document.getElementById("output").textContent =
//       result.analysis || "No response from AI.";
//   } catch (error) {
//     console.error("Fetch error:", error);
//     document.getElementById("output").textContent = "Error: " + error.message;
//   }
// });
const apiUrl = "http://localhost:3000/ai/get-review";

document.getElementById("analyzeBtn").addEventListener("click", async () => {
  const code = document.getElementById("codeInput").value;

  if (!code.trim()) {
    alert("Please enter some code.");
    return;
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer YOUR_API_KEY",
      },
      body: JSON.stringify({ code: code }),
    });

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      console.error("Non-JSON response:", text);
      throw new Error("Invalid response format: " + text);
    }

    const result = await response.json();
    document.getElementById("output").textContent = result.analysis || "No response from AI.";
  } catch (error) {
    console.error("Fetch error:", error);
    document.getElementById("output").textContent = "Error: " + error.message;
  }
});