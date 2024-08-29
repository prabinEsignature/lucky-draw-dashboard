const csvUploadInput = document.querySelector(".csv-upload-input");
const fileUploadBtn = document.querySelector(".page-upload-btn");

if (csvUploadInput && fileUploadBtn) {
  fileUploadBtn.addEventListener("click", () => csvUploadInput.click());
}
