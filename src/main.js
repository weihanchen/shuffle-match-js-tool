'use strict';
/* Stylesheets */
import 'tether/dist/css/tether.min.css';
import 'bootstrap-v4-dev/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './stylesheets/style.scss';


/* scripts */
import { matchHelper } from './lib';
import 'jquery/dist/jquery.min.js';

/* declare */
const clearBtn = document.getElementById('clear-btn');
const editArea = document.getElementById('edit-area');
const matchBtn = document.getElementById('match-btn');
const numGenBtn = document.getElementById('num-gen-btn');
const previewArea = document.getElementById('preview-area');
const uploadBtn = document.getElementById('upload-btn');
const uploadFile = document.getElementById('upload-file');

/* methods */
const clearInput = (event) => {
  event.preventDefault();
  editArea.value = "";
}

const match = (event) => {
  event.preventDefault();
  const arr = editArea.value.split(/,|\n/g).filter(el => el && el.length > 0);
  const shuffledArr = matchHelper.shuffleArray(arr);
  const matched = matchHelper.matchElements(shuffledArr, 'name', 'match');
  const sortedArr = matchHelper.sortArrObjBy(matched, 'name');
  output(sortedArr);
};

const numGen = () => {
  const input = prompt("", 50);
  const n = parseInt(input);
  if (isNaN(n)) {
    alert("");
    return;
  }
  const arr = Array.from(new Array(n), (val, idx) => idx + 1);
  editArea.value = arr.reduce((result, el) => `${result}${el}\n`, '');
};

const openFileDialog = (event) => {
  event.preventDefault();
  uploadFile.click();
};

const output = (arr) => previewArea.value = arr.reduce((result, el) => `${result}${el.name} -> ${el.match}\n`, '');

const loadFile = () => {
  if (!window.FileReader) {
    alert('Your browser is not supported');
    return false;
  }

  // Create a reader object
  const reader = new FileReader();
  if (uploadFile.files.length) {
    const textFile = uploadFile.files[0];
    // Read the file
    reader.readAsText(textFile);
    // When it's loaded, process it
    uploadBtn.onload = (e) => {
      const file = e.target.result;
      if (file && file.length) {
        editArea.value = file;
      }
    };
    
  } else {
    alert('Please upload a file before continuing')
  }
};

/* binding */
clearBtn.addEventListener('click', clearInput);
matchBtn.addEventListener('click', match);
numGenBtn.addEventListener('click', numGen);
uploadBtn.addEventListener('click', openFileDialog);
uploadFile.addEventListener('click', loadFile);
// input.addEventListener('keypress', (event) => {
//    if (event.keyCode === 13) insert(event)
// });
// input.focus();

/* run init methods */
