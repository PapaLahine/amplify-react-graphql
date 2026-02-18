const storageKeys = {
  clockings: "opsguard.clockings",
  incidents: "opsguard.incidents",
};

const state = {
  clockings: JSON.parse(localStorage.getItem(storageKeys.clockings) || "[]"),
  incidents: JSON.parse(localStorage.getItem(storageKeys.incidents) || "[]"),
};

const clockForm = document.querySelector("#clock-form");
const incidentForm = document.querySelector("#incident-form");

function persist() {
  localStorage.setItem(storageKeys.clockings, JSON.stringify(state.clockings));
  localStorage.setItem(storageKeys.incidents, JSON.stringify(state.incidents));
}

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" });
}

function render() {
  document.querySelector("#kpi-clockings").textContent = state.clockings.length;
  document.querySelector("#kpi-open-incidents").textContent = state.incidents.filter((i) => i.status !== "CLOSED").length;
  document.querySelector("#kpi-critical").textContent = state.incidents.filter((i) => i.severity === "CRITICAL").length;
  document.querySelector("#kpi-sites").textContent = new Set(state.clockings.map((c) => c.site)).size;

  const clockingsList = document.querySelector("#clockings-list");
  clockingsList.innerHTML = "";
  state.clockings.slice(-8).reverse().forEach((entry) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${entry.agent}</strong> • ${entry.site}<br>
      <span class="badge">${entry.type}</span> ${formatDate(entry.at)}
    `;
    clockingsList.appendChild(li);
  });

  const incidentsList = document.querySelector("#incidents-list");
  incidentsList.innerHTML = "";
  state.incidents.slice(-8).reverse().forEach((incident) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${incident.title}</strong><br>
      <span class="badge ${incident.severity}">${incident.severity}</span>
      <span class="badge">${incident.status}</span>
      <div>${incident.description}</div>
      <small>${formatDate(incident.createdAt)}</small>
    `;
    incidentsList.appendChild(li);
  });
}

clockForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const agent = document.querySelector("#agent-name").value.trim();
  const site = document.querySelector("#site-name").value.trim();
  const type = document.querySelector("#clock-type").value;

  if (!agent || !site) {
    return;
  }

  state.clockings.push({ agent, site, type, at: new Date().toISOString() });
  persist();
  clockForm.reset();
  render();
});

incidentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.querySelector("#incident-title").value.trim();
  const severity = document.querySelector("#incident-severity").value;
  const description = document.querySelector("#incident-description").value.trim();

  if (!title || !description) {
    return;
  }

  state.incidents.push({
    id: crypto.randomUUID(),
    title,
    severity,
    description,
    status: "OPEN",
    createdAt: new Date().toISOString(),
  });

  persist();
  incidentForm.reset();
  render();
});

render();
