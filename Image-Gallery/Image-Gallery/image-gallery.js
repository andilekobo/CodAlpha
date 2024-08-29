/**
 * @Author: Your name
 * @Date:   2024-08-09 14:36:22
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-08-13 22:04:50
 */
'use strict';
const displayImage = document.getElementById('fullImage');
const fullImg = document.getElementById('full-Image');

function viewImage(picture) {
  displayImage.style.display = "flex";
  fullImg.src = picture;
}

function closeImage () {
  displayImage.style.display = "none";
}