const ModifyPersonalInfo = document.querySelector("#modifyPersonalInfo");
const follow = document.querySelector(".friends .follow");
const follower = document.querySelector(".friends .follower");
const writing = document.querySelector("footer form .writing");
const search = document.querySelector("footer form .search");
const mypage = document.querySelector("footer form .mypage");

function handleMPIClick() {
  location.href = "https://www.naver.com"; // 개인정보 수정창으로 이동
}

function handleFollowClick() {
  location.href = "https://www.naver.com"; // 팔로우 창으로 이동
}

function handleFollowerClick() {
  location.href = "https://www.naver.com"; // 팔로워 창으로 이동
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

ModifyPersonalInfo.addEventListener("click", handleMPIClick);
follow.addEventListener("click", handleFollowClick);
follower.addEventListener("click", handleFollowerClick);
writing.addEventListener("click", handleWritingClick);
search.addEventListener("click", handleSearchClick);
mypage.addEventListener("click", handleMypageClick);
