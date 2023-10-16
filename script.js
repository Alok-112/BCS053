function validateForm() {
    var studentID = document.getElementById("studentID").value;
    var programmeCode = document.getElementById("programmeCode").value;
    var studentName = document.getElementById("studentName").value;
    var admissionYear = document.getElementById("admissionYear").value;
    var passingYear = document.getElementById("passingYear").value;
    var feedback = document.getElementById("feedback").value;

    if (studentID === "") {
        alert("Please enter Student ID.");
        return false;
    }

    if (programmeCode === "") {
        alert("Please select Programme Code.");
        return false;
    }

    if (studentName === "") {
        alert("Please enter Name of the Student.");
        return false;
    }

    if (admissionYear === "") {
        alert("Please enter Year of Admission.");
        return false;
    }

    if (passingYear === "") {
        alert("Please enter Year of Passing.");
        return false;
    }

    if (feedback === "") {
        alert("Please enter Feedback.");
        return false;
    }

    return true;
}
