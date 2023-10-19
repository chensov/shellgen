const downloadBtn = document.querySelector(".downloadbtn");

downloadBtn.addEventListener("click", () => {
  const surnameField = document.getElementById("surname").value;
  const firstName = document.getElementById("firstName").value;
  const age = document.getElementById("age").value;
  const profile = document.getElementById("profile").value;
  const favColor = document.getElementById("favcolor").value;

  const myBlobText = `

     echo Name: ${firstName}
     echo Surname: ${surnameField}
     echo Age: ${age}
     echo Profile:${profile}
     echo Fav Color: ${favColor}
  `;
  const blob = new Blob([myBlobText], { type: "text/plain" });

  const url = URL.createObjectURL(blob);

  const downloadLink = document.createElement("a");

  downloadLink.href = url;
  downloadLink.download = `${firstName}_${surnameField}_cv.sh`;

  downloadLink.click();
});
