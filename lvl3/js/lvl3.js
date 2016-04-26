var form = document.forms;
//-----------------------------------------------------------
//Клік по кнопці "Edit"
btnEdit.onclick = function () {
        menuBox.style.display = 'none';
        editDivBox.style.display = 'none';
        editMenuBox.style.display = 'block';
        areaBox.style.display = 'block';
        areaEdit.value = editDivBox.innerHTML;
    }
    //Клік по кнопці "Save"
btnSave.onclick = function () {
    menuBox.style.display = 'block';
    editDivBox.style.display = 'block';
    editMenuBox.style.display = 'none';
    areaBox.style.display = 'none';
    editDivBox.innerHTML = areaEdit.value;
}

//Кліки по кнопках(B,I,U)---------------

//Жирний текст
var count = 0;
 var count1 = 0;
 var count2 = 0;
btnB.onclick = function () {
    if (count % 1==0) {
        editDiv.style.fontWeight = 'bold';
    }
    count++
    if (count%2==0) {
        editDiv.style.fontWeight = 'normal';
    }
}

//Курсивний текст
btnI.onclick = function () {
    if (count1 % 1 == 0) {
        editDiv.style.fontStyle = 'italic';
    }
    count1++
    if (count1 % 2 == 0) {
        editDiv.style.fontStyle = 'normal';
    }
     ;
}

//Підчеркнутий текст
btnU.onclick = function () {
    if (count2 % 1 == 0) {
        editDiv.style.textDecoration = 'underline';
    }
    count2++
    if (count2 % 2 == 0) {
        editDiv.style.textDecoration = 'none';
    }
    
}

//------------------Розмір тексту----------------------------
var fontSizeEl = form.menuForm.elements.txtSize;

txtSize.onchange = function () {
    for (var i = 0; i < fontSizeEl.options.length; i++) {
        var option = fontSizeEl.options[i];
        if (option.selected) {
            editDiv.style.fontSize = this.value;
        }
    }
}

//------------------Шрифт тексту----------------------------
var fontTypeEl = form.menuForm.elements.fontType;

fontType.onchange = function () {
    for (var i = 0; i < fontTypeEl.options.length; i++) {
        var option = fontTypeEl.options[i];
        if (option.selected) {
            editDiv.style.fontFamily = this.value;
        }
    }
}

//------------------Вирівнювання-----------------------------
var textAlignEl = [txtLeft, txtCenter, txtRight];
for (i = 0; i < textAlignEl.length; i++) {
    textAlignEl[i].onclick = function () {
        editDiv.style.textAlign = this.value;
    }
}
//-----------------Функція закриття блоків-------------------
function Close(closeBtnID, boxID) {
    closeBtnID.onclick = function () {
        if (boxID.style.display == 'block') {
            boxID.style.display = 'none';
        }
    }
}
Close(btnClose, table1Box);
Close(btnClose2, table2Box);
Close(btnClose3, tableBox);
Close(btnClose4, listBox);

//---------------------Колір тексту і фону-------------------

var arrTd = document.getElementsByTagName("td");

//Колір тексту
btnColor.onclick = function () {
    table1Box.style.display = 'block';
    btnBgImg.style.display = 'none';
    for (var i = 0; i < arrTd.length; i++) {
        arrTd[i].onclick = function () {
            editDiv.style.color = this.style.background;
        }
    }
}

//Колір і зображення фону
btnBg.onclick = function () {
    table1Box.style.display = 'block';
    btnBgImg.style.display = 'block';
    for (var i = 0; i < arrTd.length; i++) {
        arrTd[i].onclick = function () {
            editDiv.style.background = this.style.background;
        }
    }
}

//Клік по кнопці "Bg image"
btnBgImg.onclick = function () {
    table2Box.style.display = 'block';
    table1Box.style.display = 'none';
}

//Клік по кнопці "Bg color"
btnBgColor.onclick = function () {
    table2Box.style.display = 'none';
    table1Box.style.display = 'block';
}

//---------------------Upload файлів-------------------------
inputfile.onchange = function () {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function () {
        editDiv.style.background = 'url(' + reader.result + ')';
    }
    reader.readAsDataURL(file);
}

//----------------------Таблиці і списки---------------------

//Кнопка таблиці
btnTable.onclick = function () {
    tableBox.style.display = 'block';
    listBox.style.display = 'none';
}

//Створення таблиці
btnCreate1.onclick = function () {
        var trNumb = trNum.value;
        var tdNumb = tdNum.value;
        var tdWidth = tableWidth.value;
        var tdHeight = tableHeight.value;
        var tdWeight = tableWeight.value;
        var cellspcg = cellspc.value;
        var bCol = borderColor.value;

        var table = "<table style='border:" + tdWeight + "px " + 'solid' + " " + bCol + "; height:" + tdHeight + "px; width:" + tdWidth + "px'; cellspacing:" + cellspc + ";>";
        for (i = 0; i < tdNumb; i++) {
            table += '<tr>';
            for (j = 0; j < tdNumb; j++) {
                table += "<td style='border:" + tdWeight + "px " + 'solid' + " " + bCol + "';></td>";
            }
            table += '</tr>';
        }
        table += '</table>';
        areaEdit.value += table;
    }
//-----------------------------------------------------------
    //Кнопка списку
btnList.onclick = function () {
    tableBox.style.display = 'none';
    listBox.style.display = 'block';
}

//Створення списку
btnCreate2.onclick = function () {
    var listType = listOl.value;
    var itemNumb = itemNum.value;
    var list = "<ol type='" + listType + "'>"
    for (var i = 0; i < itemNumb; i++) {
        list += "<li>Item</li>";
    }
    list += "</ol>";
    areaEdit.value += list;
}