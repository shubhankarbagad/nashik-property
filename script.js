// Branch data for each bank
const branchData = {
  sbi: [
    { value: "mgroad", text: "MG Road - Near Central Mall" },
    { value: "panchavati", text: "Panchavati - Main Branch" },
    { value: "satpur", text: "Satpur - MIDC Road" }
  ],
  hdfc: [
    { value: "collegeroad", text: "College Road - Beside Bank of India" },
    { value: "cidco", text: "CIDCO - Ambad Link Road" },
    { value: "indiranagar", text: "Indira Nagar - Near Big Bazaar" }
  ],
  icici: [
    { value: "nashikroad", text: "Nashik Road - Bytco Point" },
    { value: "gangapur", text: "Gangapur Road - Near Cosmos Bank" },
    { value: "satpur", text: "Satpur - Industrial Estate" }
  ],
  bob: [
    { value: "mumbainaka", text: "Mumbai Naka - Opp. Petrol Pump" },
    { value: "dwarka", text: "Dwarka - Near Flyover" }
  ],
  axis: [
    { value: "trimbak", text: "Trimbak Road - Below Hotel Rama" },
    { value: "ashoknagar", text: "Ashok Nagar - Main Market" }
  ]
};

// Function to update branches based on bank selection
function updateBranches() {
  const bank = document.getElementById("bank").value;
  const branch = document.getElementById("branch");
  branch.innerHTML = '<option value="">-- Select Branch --</option>';

  if (branchData[bank]) {
    branchData[bank].forEach(b => {
      const option = document.createElement("option");
      option.value = b.value;
      option.textContent = b.text;
      branch.appendChild(option);
    });
  }
}

// Function to update digital clock
function updateClock() {
  const now = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const time = now.toLocaleTimeString();

  const clock = document.getElementById("clock");
  if (clock) {
    clock.textContent = `${day}, ${date} ${month} ${year} | ${time}`;
  }
}

// Initialize clock on page load
setInterval(updateClock, 1000);
updateClock();
