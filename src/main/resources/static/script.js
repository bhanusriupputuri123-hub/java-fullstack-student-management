const API = "/api/students";

async function loadStudents() {
  const search = document.getElementById("search").value.trim();
  const url = search ? `${API}?search=${encodeURIComponent(search)}` : API;
  const response = await fetch(url);
  const students = await response.json();
  const tbody = document.getElementById("studentTable");
  tbody.innerHTML = students.map(s => `
    <tr>
      <td>${s.id}</td><td>${escapeHtml(s.name)}</td><td>${escapeHtml(s.email)}</td>
      <td>${escapeHtml(s.course)}</td><td>${escapeHtml(s.department)}</td><td>${s.cgpa}</td>
      <td>
        <button class="edit" onclick='editStudent(${JSON.stringify(s)})'>Edit</button>
        <button class="delete" onclick="deleteStudent(${s.id})">Delete</button>
      </td>
    </tr>`).join("");
}

document.getElementById("studentForm").addEventListener("submit", async e => {
  e.preventDefault();
  const id = document.getElementById("studentId").value;
  const student = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    course: document.getElementById("course").value,
    department: document.getElementById("department").value,
    cgpa: Number(document.getElementById("cgpa").value)
  };
  const response = await fetch(id ? `${API}/${id}` : API, {
    method: id ? "PUT" : "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(student)
  });
  if (response.ok) {
    showMessage(id ? "Student updated successfully." : "Student added successfully.");
    resetForm();
    loadStudents();
  } else {
    showMessage("Unable to save student. Check the details.", true);
  }
});

function editStudent(s) {
  document.getElementById("studentId").value = s.id;
  document.getElementById("name").value = s.name;
  document.getElementById("email").value = s.email;
  document.getElementById("course").value = s.course;
  document.getElementById("department").value = s.department;
  document.getElementById("cgpa").value = s.cgpa;
  document.getElementById("formTitle").textContent = "Update Student";
  window.scrollTo({top:0, behavior:"smooth"});
}

async function deleteStudent(id) {
  if (!confirm("Delete this student?")) return;
  const response = await fetch(`${API}/${id}`, {method:"DELETE"});
  if (response.ok) { showMessage("Student deleted successfully."); loadStudents(); }
}

function resetForm() {
  document.getElementById("studentForm").reset();
  document.getElementById("studentId").value = "";
  document.getElementById("formTitle").textContent = "Add Student";
}

function showMessage(text, error=false) {
  const el = document.getElementById("message");
  el.textContent = text;
  el.style.color = error ? "#dc2626" : "#15803d";
  setTimeout(() => el.textContent="", 3000);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}

loadStudents();
