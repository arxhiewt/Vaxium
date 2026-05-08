function openImg(img) {
  document.getElementById("viewer").style.display = "flex";
  document.getElementById("viewerImg").src = img.src;
}

function closeImg() {
  document.getElementById("viewer").style.display = "none";
}
