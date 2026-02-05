let acount = "";
let passWord = "";
let countError = 0;
let number = 3
let choice;
let loginSuccessfull = false;
let bookArray=["Toán","Văn","Anh"];
let bookName;
let countAddBookSuccessfull=0;
let other =["Sách kĩ năng","Truyện tranh"];
while ((passWord !== "12345" || acount !== "admin") && countError < 3) {
    acount = prompt("Tên tài khoản:");
    passWord = prompt("Mật Khẩu:");
    if (passWord !== "12345" && acount !== "admin") {
        countError++;
        number--;
        alert(` sai Tài khoản và sai Mật khẩu bạn còn ${number} lần thử lại`);
    } else if (passWord !== "12345") {
        countError++;
        number--;
        alert(` sai Mật khẩu bạn còn ${number} lần thử lại`);
    } else if (acount !== "admin") {
        countError++;
        number--;
        alert(` sai Tài khoản và  bạn còn ${number} lần thử lại`);
    }

    if (countError === 3) {
        alert("Tài khoản đã bị khóa do vượt quá số lần cho phép !!");
        break;
    } else if (passWord === "12345" && acount === "admin" && countError < 3) {
        alert("Đăng nhập thành công.");
        loginSuccessfull = true;
        break;
    }
}
if (loginSuccessfull) {
    while (choice !== 7) {
        choice = +prompt(`
        ---Hệ Thống Quản Lý Thư Viện 4.0---
            1.Nhập thêm lô sách mới.
            2.Hiển thị danh sách sách.
            3.Tìm kiếm sách.
            4.Cập nhật tên sách.
            5.Đảo ngược thứ tự kệ sách.
            6.Nhập kho từ nguồn khác.
            7.Thoát chương trình.
        `)
        switch (choice) {
            case 1:
                bookName = prompt("Một chuỗi ký tự chứa tên các cuốn sách, phân cách bởi dấu phẩy (Ví dụ: Sử,Địa,Lý)");
                let temp=bookName.split(",");
                for(let i = 0 ; i < temp.length ; i++){
                    let arrayBook=temp[i].trim();
                    if(arrayBook !== ""){
                        bookArray.push(arrayBook);
                        countAddBookSuccessfull++;
                    }
                }
                alert(`Đã thêm ${countAddBookSuccessfull} quyển sách.`);
                

                break;
            case 2:
                
                    console.log("---DANH SÁCH HIỆN CÓ---");
                    for(let j = 0 ; j < bookArray.length ; j++ ){
                            console.log(`${j+1} . ${bookArray[j]}`);
                            
                    }
                    alert("Ấn F12 để xem console");
                

                
                break;
            case 3:
                let bookNameFind = prompt("Nhập tên cuốn sách cần tìm").trim();
                let searchNameBook = bookArray.indexOf(bookNameFind);
                if(searchNameBook !== -1){
                    alert(`Tìm thấy sách ở vị trí ${searchNameBook}`)
                }else{
                    alert("Không tìm thấy sách");
                }
                break;
            case 4:
                let oldBookName = prompt("Nhập tên sách cần cập nhật lại");
                let searchNameBookUpdate = bookArray.indexOf(oldBookName);
                if(searchNameBookUpdate !== -1){
                    let newNameBook = prompt(`Tìm thầy sách ${oldBookName} nhập tên mới cho sách`);
                    bookArray[searchNameBookUpdate]=newNameBook;
                    alert("Cập nhật sách thành công");
                }else{
                    alert("Không tìm thấy sách");
                }
                        break;
                
            case 5:
                console.log("---KỆ SÁCH SAU KHI ĐẢO NGƯỢC---");
                bookArray.reverse();
                for(let x = 0 ; x < bookArray.length ; x++){
                    console.log(`Vị trí index ${x} là ${bookArray[x]}`);
                }
                
                break;
            case 6:
                let double = bookArray.concat(other);
                console.log(double);
                alert("Đã nhập kho sách thành công");
                
                break;
            case 7:
                alert("Thoát chương trình , đã đăng xuất khỏi tài khoản..");
                break;

            default:
                alert("Lựa chọn không hợp lệ , vui lòng thử lại!!");
                break;
        }
    }
}
