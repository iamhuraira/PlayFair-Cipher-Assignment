function getKeyword() {

    return document.getElementById('key').value;
}

function getPlainText() {
    return document.getElementById('plain-text').value;
}

function cipher() {
    var key = getKeyword().toUpperCase();
    document.getElementById('key-output').innerHTML = key

    // encryptKey(key)
    const key_arr = key.split('') // Splitting Key String Value InTo Array
    // console.log(key_arr)

    var plainText = getPlainText().toUpperCase();
    document.getElementById('plain-text-output').innerHTML = plainText
    // encryptKey(key)
    const pt_arr = plainText.split('')

    let alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] // Creating Alphabet Array 

    let table = [];

    // creating  array
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            table[i] = [];
        }
    }
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            table[i][j] = j;
        }
    }
    // console.log(table)
    // console.log(table);
    let controller = -1;

    // Creating Table Of Key And Alphabets
    for (let i = 0; i < key_arr.length; i++) {

        for (let j = 0; j < 25; j++) {
            if (key_arr[i] === alpha[j]) {
                controller++;

                // let round = controller / 5;
                // console.log(alpha[j]);
                // console.log(Array.isArray(table));

                // table[round][controller % 5] = alpha[j];


                table[Math.floor(controller / 5)][controller % 5] = alpha[j];
                // console.log(table)


                alpha[j] = '0';
                break;
            }
        }
    }
    for (let i = 0; i < alpha.length; i++) {
        if (alpha[i] != '0') {
            controller++;
            // console.log(controller)
            let round = controller / 5;

            table[Math.floor(round)][controller % 5] = alpha[i];

        }

    }
    console.log(table)



    //  Create the array of plainText after applaying Rules.


    let any = new Array(300);
    let c = 0;
    for (let i = 0; i < pt_arr.length; i++) {
        if (i == 0 && pt_arr[i] != pt_arr[i + 1] && i + 1 < pt_arr.length) {
            any[c++] = pt_arr[i];
            continue;
        }
        if (i == 1 && pt_arr[i] != pt_arr[i + 1] && i + 1 < pt_arr.length) {
            any[c++] = pt_arr[i];
            continue;
        }
        if (i == pt_arr.length - 2 && i % 2 == 0 && pt_arr[i] != pt_arr[i - 1] && pt_arr[i] != pt_arr[i + 1]) {
            any[c++] = pt_arr[i];
            continue;
        }
        if (i == pt_arr.length - 2 && i % 2 == 0 && pt_arr[i] != pt_arr[i - 1] && pt_arr[i] == pt_arr[i + 1]) {
            any[c++] = pt_arr[i];
            any[c++] = 'X';
            continue;
        }
        if (i == pt_arr.length - 2 && i % 2 == 0 && pt_arr[i] == pt_arr[i - 1] && pt_arr[i] != pt_arr[i + 1]) {
            any[c++] = pt_arr[i];
            continue;
        }
        if (i == pt_arr.length - 2 && i % 2 == 0 && pt_arr[i] == pt_arr[i - 1] && pt_arr[i] == pt_arr[i + 1]) {
            any[c++] = pt_arr[i];
            any[c++] = 'X';
            continue;
        }
        if (i == pt_arr.length - 2 && i % 2 != 0 && pt_arr[i] != pt_arr[i - 1] && pt_arr[i] != pt_arr[i + 1]) {
            any[c++] = pt_arr[i];
            continue;
        }
        if (i == pt_arr.length - 2 && i % 2 != 0 && pt_arr[i] != pt_arr[i - 1] && pt_arr[i] == pt_arr[i + 1]) {
            any[c++] = pt_arr[i];
            any[c++] = 'X';
            continue;
        }
        if (i == pt_arr.length - 2 && i % 2 != 0 && pt_arr[i] == pt_arr[i - 1] && pt_arr[i] != pt_arr[i + 1]) {
            any[c++] = pt_arr[i];
            continue;
        }
        if (i == pt_arr.length - 2 && i % 2 != 0 && pt_arr[i] == pt_arr[i - 1] && pt_arr[i] == pt_arr[i + 1]) {
            any[c++] = pt_arr[i];
            any[c++] = 'X';
            continue;
        }
        if (i == pt_arr.length - 1 && i % 2 == 0 && pt_arr[i] != pt_arr[i - 1]) {
            any[c++] = pt_arr[i];
            continue;
        }
        if (i == pt_arr.length - 1 && i % 2 == 0 && pt_arr[i] == pt_arr[i - 1]) {
            any[c++] = pt_arr[i];
            any[c++] = 'X';
            continue;
        }
        if (i == pt_arr.length - 1 && i % 2 != 0 && pt_arr[i] != pt_arr[i - 1]) {
            any[c++] = pt_arr[i];
            continue;
        }
        if (i == pt_arr.length - 1 && i % 2 != 0 && pt_arr[i] == pt_arr[i - 1]) {
            any[c++] = pt_arr[i];
            any[c++] = 'X';
            continue;
        }
        if (i % 2 == 0 && pt_arr[i] != pt_arr[i - 1] && pt_arr[i] == pt_arr[i + 1]) {
            any[c++] = pt_arr[i];
            any[c++] = 'X';
            continue;
        }
        if (i % 2 == 0 && pt_arr[i] != pt_arr[i - 1] && pt_arr[i] != pt_arr[i + 1]) {
            any[c++] = pt_arr[i];
            continue;
        }
        if (i % 2 == 0 && pt_arr[i] == pt_arr[i - 1] && pt_arr[i] != pt_arr[i + 1]) {
            any[c++] = pt_arr[i];
            continue;
        }
        if (i % 2 == 0 && pt_arr[i] == pt_arr[i - 1] && pt_arr[i] == pt_arr[i + 1]) {
            any[c++] = pt_arr[i];
            any[c++] = 'X';
            continue;
        }
        if (i % 2 != 0 && pt_arr[i] != pt_arr[i - 1] && pt_arr[i] == pt_arr[i + 1]) {
            any[c++] = pt_arr[i];
            any[c++] = 'X';
            continue;
        }
        if (i % 2 != 0 && pt_arr[i] != pt_arr[i - 1] && pt_arr[i] != pt_arr[i + 1]) {
            any[c++] = pt_arr[i];
            continue;
        }
        if (i % 2 != 0 && pt_arr[i] == pt_arr[i - 1] && pt_arr[i] != pt_arr[i + 1]) {
            any[c++] = pt_arr[i];
            continue;
        }
        if (i % 2 != 0 && pt_arr[i] == pt_arr[i - 1] && pt_arr[i] == pt_arr[i + 1]) {
            any[c++] = pt_arr[i];
            any[c++] = 'X';
            continue;
        }
    }
    if (c % 2 != 0)
        any[c++] = 'X';

    for (let i = 0; i < c; i++) {
        console.log(any[i]);

    }
    let encpt_arr = [];
    let encpt_arr_ctr = 0;
    for (let i = 0; i < c; i = i + 2) {
        if (any[i] == 'J')
            any[i] = 'I';
        if (any[i + 1] == 'J')
            any[i + 1] = 'I';
        let row1 = 0,
            row2 = 0,
            col1 = 0,
            col2 = 0;
        for (let j = 0; j < 5; j++) {
            for (let k = 0; k < 5; k++) {
                if (any[i] == table[j][k]) {
                    row1 = j;
                    col1 = k;
                    break;
                }
            }
        }
        for (let j = 0; j < 5; j++) {
            for (let k = 0; k < 5; k++) {
                if (any[i + 1] == table[j][k]) {
                    row2 = j;
                    col2 = k;
                    break;
                }
            }
        }
        if (row1 == row2) {
            col1 = (col1 + 1) % 5;
            col2 = (col2 + 1) % 5;
            encpt_arr[encpt_arr_ctr++] = table[row1][col1];
            encpt_arr[encpt_arr_ctr++] = table[row2][col2];
        } else if (col1 == col2) {
            row1 = (row1 + 1) % 5;
            row2 = (row2 + 1) % 5;
            encpt_arr[encpt_arr_ctr++] = table[row1][col1];
            encpt_arr[encpt_arr_ctr++] = table[row2][col2];
        } else if (row1 != row2 && col1 != col2) {
            let row = 0,
                col = 0;
            row = row1;
            col = col2;
            encpt_arr[encpt_arr_ctr++] = table[row][col];
            row = row2;
            col = col1;
            encpt_arr[encpt_arr_ctr++] = table[row][col];
        } else {}
    }

    let st1 = '';
    for (let i = 0; i < c; i++) {


        st1 += encpt_arr[i]



    }
    console.log(st1);
    document.getElementById('encrypted-text-output').innerHTML = st1




}





































































































































/* var isChet = false;
var isEnd = false;
var flag = false;
var flagX = false;
var flagAdd = false;
function getKeyword(key) { 
   var key = document.getElementById("key").value;
   return document.getElementById("key").value;
}

function getString() {
  return document.getElementById("String").value;
}

function processKey() { 
  var key = getKeyword();
  key = key.toUpperCase().replace(/\s/g, '').replace(/J/g, "I");
  var result = [];
  var temp = '';
  var alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
  for(var i = 0; i < key.length; i++) {
    if (alphabet.indexOf(key[i]) !== -1) {
      alphabet = alphabet.replace(key[i], '');
      temp += key[i];
    }
  }
  temp += alphabet;
  var result = [];
  temp = temp.split('');
  while(temp[0]) {
    result.push(temp.splice(0,5));
  }
  return result;
}

function cipher() {
  var keyresult = processKey();
  var res = [];
  var error = 'Warning!!! String is empty';
  var str = getString();
  if(str === '') {
    document.getElementById('printValue').innerHTML = error;
  }
  // var err = 'ERRORX';
  var textPhrase, separator;
  str = str.toUpperCase().replace(/\s/g, '').replace(/J/g, "I");
  if(str.length === 0) {
    //document.getElementById("printValue").innerHTML = err.toUpperCase().replace(/\s/g, '').replace(/J/g, "I");
    }
  else {
    textPhrase = str[0];
  }
  var help = 0; flagAdd = false;
  for(var i = 1; i < str.length; i++) {
      if(str[i - 1] === str[i]) {
        if(str[i] === 'X') {
          separator = 'Q';
        }
        else {
          separator = 'X';
        }
        textPhrase += separator + str[i];
        help = 1; 
      }
      else {
        textPhrase += str[i];
      }
    if(help === 1) {
      flagAdd = true;
    }
  }
  
  if(textPhrase.length % 2 !== 0) {
    if(textPhrase[textPhrase.length - 1] === 'X') {
      textPhrase += 'Q';
      isEnd = true;
      flagX = false;
    }
    else {
      textPhrase += 'X';
      isEnd = true;
      flagX = true;
    }
  }
  
  var t = [];
  var enCodeStr = '';
  for(var i = 0; i < textPhrase.length; i += 2){
  	var pair1 = textPhrase[i];
  	var pair2 = textPhrase[i + 1];
  	var p1i, p1j, p2i, p2j;
  	for(var stroka = 0; stroka < keyresult.length; stroka++) {
	    for(var stolbec = 0; stolbec < keyresult[stroka].length; stolbec++){
	      if (keyresult[stroka][stolbec] == pair1){
	      	p1i = stroka;
	      	p1j = stolbec;
	      }
	      if (keyresult[stroka][stolbec] == pair2){
	      	p2i = stroka;
	      	p2j = stolbec;
	      }
	    }
	  }
    var coord1 = '', coord2 = '';
    
    if(p1i === p2i) {
      if(p1j === 4) {
        coord1 = keyresult[p1i][0];
      }
      else {
        coord1 = keyresult[p1i][p1j + 1];
      }
      if(p2j === 4) {
        coord2 = keyresult[p2i][0];
      }
      else {
        coord2 = keyresult[p2i][p2j + 1]
      }
    }
    if(p1j === p2j) {
      if(p1i === 4) {
        coord1 = keyresult[0][p1j];
      }
      else {
        coord1 = keyresult[p1i + 1][p1j];
      }
      if(p2i === 4) {
        coord2 = keyresult[0][p2j];
      }
      else {
        coord2 = keyresult[p2i + 1][p2j]
      }
    }
    if(p1i !== p2i && p1j !== p2j) {
      coord1 = keyresult[p1i][p2j];
      coord2 = keyresult[p2i][p1j];
    }
    enCodeStr = enCodeStr + coord1 + coord2;
  }
  document.getElementById("printValue").innerHTML = enCodeStr;
  // alert("Добавили букву в середине слова? - " + flagAdd);
  return enCodeStr;
}

function deCodeCipher() {
  var deCodeStr = '';
  var text = '';
  var error = "Warning!!! String is empty";
  var text1 = cipher();
  if(text1 === '') {
    document.getElementById('printDeCode').innerHTML = error;
  }
  var keyresult = processKey();
  for(var i = 0; i < text1.length; i += 2){
  	var pair1 = text1[i];
  	var pair2 = text1[i + 1];
  	var p1i, p1j, p2i, p2j;
  	for(var stroka = 0; stroka < keyresult.length; stroka++) {
	    for(var stolbec = 0; stolbec < keyresult[stroka].length; stolbec++){
	      if (keyresult[stroka][stolbec] == pair1){
	      	p1i = stroka;
	      	p1j = stolbec;
	      }
	      if (keyresult[stroka][stolbec] == pair2){
	      	p2i = stroka;
	      	p2j = stolbec;
	      }
	    }
	  }
    var coord1 = '', coord2 = '';
    
    if(p1i === p2i) {
      if(p1j === 0) {
        coord1 = keyresult[p1i][4];
      }
      else {
        coord1 = keyresult[p1i][p1j - 1];
      }
      if(p2j === 0) {
        coord2 = keyresult[p2i][4];
      }
      else {
        coord2 = keyresult[p2i][p2j - 1]
      }
    }
    if(p1j === p2j) {
      if(p1i === 0) {
        coord1 = keyresult[4][p1j]
      }
      else {
        coord1 = keyresult[p1i - 1][p1j];
      }
      if(p2i === 0) {
        coord2 = keyresult[4][p2j];
      }
      else {
        coord2 = keyresult[p2i - 1][p2j]
      }
    }
    if(p1i !== p2i && p1j !== p2j) {
      coord1 = keyresult[p1i][p2j];
      coord2 = keyresult[p2i][p1j];
    }
    text = text + coord1 + coord2;
  }
  text = text.split('');
  
  for(var i = 0; i < text.length; i++) {
    var count;
    if (flagAdd) {
      if(text[i] === text[i + 2] && (text[i + 1] === 'X' || text[i + 1] === 'Q')) {
        count = i + 1;
        text.splice(count, 1);
      }
    }
    else if(flagAdd && isEnd && (flagX || !flagX)) {
      if(text[i - 2] === text[i] && (text[i - 1] === 'X' || text[i - 1] === 'Q'))
        count = i + 1;
      text.splice(count, 1);
    }
    else if(!flagAdd) {
      break;
    }
  }
  if(flagX) {
    text.pop();
  }
  if(isEnd && !flagX) {
    text.pop();
  }
  text = text.join('');
  console.log(text);
  document.getElementById('printDeCode').innerHTML = text;
} */