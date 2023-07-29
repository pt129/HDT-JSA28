let menu = ['rau_xào', 'thịt luộc', 'gà rán'];


let input;
do {
    input = prompt("Mời người dùng nhập vào C,R,U,D").toLowerCase().trim();
    if (input == "c") 
        menu.push( prompt("Mời người dùng nhập vào món mới"));
    else if (input == "r"){
        alert(
            menu.join(", ")
        );
    }
    else if(input == "u"){
        let viTriMonAnUpdate = menu.
        indexOf(prompt("Mời người dùng nhập món ăn muốn thay đổi"));
        menu[viTriMonAnUpdate] = prompt("Mời người dùng nhập món mới thay thế");
    }
    else if (input=="d"){
       let viTriMonAnDelete = menu.
       indexOf(prompt("Mời người dùng nhập món ăn muốn xóa"));
       menu.splice(viTriMonAnDelete, 1);
    }
}

while (input == "c" ||
       input == "r" ||
       input == "u" ||
       input == "d")





