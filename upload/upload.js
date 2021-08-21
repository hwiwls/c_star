const upload = document.querySelector(".upload");
const header = document.querySelector("header");
const content = document.querySelector(".content");
const afterUpload = document.querySelector(".afterUpload");
const writing = document.querySelector("footer form .writing");
const search = document.querySelector("footer form .search");
const mypage = document.querySelector("footer form .mypage");

function handleUploadClick() {
  header.classList.add("hidden");
  content.classList.add("hidden");
  afterUpload.classList.remove("hidden");
  afterUpload.innerText = "업로드가 완료됐습니다.";
}

function handleWritingClick() {
  location.href = ""; // 글 창으로 이동
}

function handleSearchClick() {
  location.href = ""; // 글 창으로 이동
}

function handleMypageClick() {
  location.href = ""; // 글 창으로 이동
}

upload.addEventListener("click", handleUploadClick);
writing.addEventListener("click", handleWritingClick);
search.addEventListener("click", handleSearchClick);
mypage.addEventListener("click", handleMypageClick);
