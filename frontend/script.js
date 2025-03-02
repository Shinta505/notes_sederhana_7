document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("tbody");
    const deleteSelectedBtn = document.getElementById("deleteSelected");
    const selectAllCheckbox = document.getElementById("selectAll");

    // Fungsi untuk memformat tanggal
    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    // Fetch data dari backend
    function fetchNotes() {
        fetch("http://localhost:5000/notes")
            .then(response => response.json())
            .then(data => {
                tableBody.innerHTML = "";
                data.forEach(note => {
                    const row = `<tr>
                        <td><input type='checkbox' class='select-note' data-id='${note.id}'></td>
                        <td>${note.id}</td>
                        <td>${note.isi}</td>
                        <td>${note.label}</td>
                        <td>${formatDate(note.createdAt)}</td>
                        <td>${formatDate(note.updatedAt)}</td>
                        <td>
                            <button class='btn edit-btn' data-id='${note.id}'>Edit</button>
                        </td>
                    </tr>`;
                    tableBody.innerHTML += row;
                });
            })
            .catch(error => console.error("Error fetching notes:", error));
    }

    fetchNotes();

    // Tambah catatan baru
    document.getElementById("addNoteForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const isi = document.getElementById("isi").value;
        const label = document.getElementById("label").value;

        fetch("http://localhost:5000/add-notes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ isi, label })
        }).then(() => {
            fetchNotes();
            document.getElementById("addNoteForm").reset();
        });
    });

    // Edit catatan
    tableBody.addEventListener("click", function (e) {
        if (e.target.classList.contains("edit-btn")) {
            const id = e.target.getAttribute("data-id");
            window.location.href = `edit.html?id=${id}`;
        }
    });

    // Pilih semua checkbox
    selectAllCheckbox.addEventListener("change", function () {
        document.querySelectorAll(".select-note").forEach(checkbox => {
            checkbox.checked = selectAllCheckbox.checked;
        });
    });

    // Hapus catatan yang dipilih
    deleteSelectedBtn.addEventListener("click", function () {
        const selectedIds = Array.from(document.querySelectorAll(".select-note:checked"))
            .map(checkbox => checkbox.getAttribute("data-id"));

        if (selectedIds.length === 0) {
            alert("Pilih setidaknya satu catatan untuk dihapus.");
            return;
        }

        if (confirm(`Yakin ingin menghapus ${selectedIds.length} catatan?`)) {
            selectedIds.forEach(id => {
                fetch(`http://localhost:5000/note/${id}`, { method: "DELETE" })
                    .then(() => fetchNotes());
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username");
    if (username) {
        document.getElementById("welcomeMessage").textContent = `Welcome, ${username}!`;
    } else {
        window.location.href = "welcome.html"; // Redirect jika belum ada nama
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username");

    if (!username) {
        window.location.href = "welcome.html"; // Jika belum ada username, redirect ke welcome
    } else {
        document.getElementById("welcomeMessage").textContent = `Welcome, ${username}!`;
    }

    // Logout Function
    document.getElementById("logoutBtn").addEventListener("click", function () {
        localStorage.removeItem("username"); // Hapus data nama user
        window.location.href = "welcome.html"; // Redirect ke halaman awal
    });
});
