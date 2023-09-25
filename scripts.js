function getdata() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const imageInput = document.getElementById("image");
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const skills = document.getElementById("skills").value;

    const student = {
        name: name,
        email: email,
        website: website,
        image: imageInput.files[0], // Get the selected image file
        gender: gender,
        skills: skills,
    };

    const studentDataElement = document.getElementById("student-data");
    studentDataElement.innerHTML = `
    <div class="content">
    <p>Name: ${student.name}</p>
    <p>Email: ${student.email}</p>
    <p>Website: ${student.website}</p>
    <p>Gender: ${student.gender}</p>
    <p>Skills: ${student.skills}</p>
</div>
    `;

    // Display the image
    if (student.image) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageContainer = document.createElement("div");
            imageContainer.classList.add("image-container");

            const imageElement = document.createElement("img");
            imageElement.src = e.target.result;

            imageContainer.appendChild(imageElement);
            studentDataElement.appendChild(imageContainer);
        };
        reader.readAsDataURL(student.image);
    }

    document.getElementById("userform").reset();
}
