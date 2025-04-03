// Thiết kế đáp ứng thanh menubar
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Hàm kiểm tra dữ liệu tìm kiếm
function checkSearch(event) {
    var keyCode = event.keyCode;
    var searchInput = document.querySelector('.search-txt');
    var searchData = searchInput.value.trim();
    if (keyCode === 13) { // Enter key
        if (searchData === '') {
            alert("Không được để trống");
            return false;
        }
        console.log('Tìm kiếm: ', searchData);
    }
}

// Hàm kiểm tra dữ liệu đầu vào trang đăng nhập
function lginValidate(frm) {
    let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailReg.test(frm.email.value)) {
        alert("Vui lòng nhập email hợp lệ.");
        frm.email.focus();
        return false;
    }
    var pswReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!pswReg.test(frm.psw.value)) {
        alert("Vui lòng nhập đúng mật khẩu");
        frm.psw.focus();
        return false;
    }
    return true;
}

// Hàm kiểm tra dữ liệu đầu vào trang đăng kí
function regValidate(frm) {
    let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailReg.test(frm.email.value)) {
        alert("Vui lòng nhập email hợp lệ.");
        frm.email.focus();
        return false;
    }
    let psw1Reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!psw1Reg.test(frm.password1.value)) {
        alert("Mật khẩu phải ít nhất 8 kí tự, bao gồm chữ thường, chữ hoa, số và kí tự đặc biệt");
        frm.password1.focus();
        return false;
    }
    if (frm.password1.value !== frm.password2.value) {
        alert("Vui lòng nhập mật khẩu trùng với mật khẩu trước đó");
        frm.password2.focus();
        return false;
    }
    if (!frm.checkbox.checked) {
        alert("Vui lòng đồng ý với chính sách & điều khoản của chúng tôi");
        frm.checkbox.focus();
        return false;
    }
    return true;
}

// Hàm kiểm tra dữ liệu gửi ý kiến
function regOpinion(form) {
    var name = form.name.value.trim();
    var input = form.input.value.trim();
    var idea = form.idea.value.trim();
    if (name === '') {
        alert("Vui lòng nhập Họ và Tên.");
        form.name.focus();
        return false;
    }
    if (input === '') {
        alert("Vui lòng nhập Số điện thoại hoặc Email.");
        form.input.focus();
        return false;
    }
    if (idea === '') {
        alert("Vui lòng nhập Nội dung cần liên hệ.");
        form.idea.focus();
        return false;
    }
    return true;
}

// List sản phẩm
var ListItem = {
    "vf3h": { "name": "VINFAST VF 3", "price": 299000000, "photo": ["assets/images/sanpham/vf3-summer-yellow.png", "assets/images/sanpham/vf3-rose-pink.png", "assets/images/sanpham/vf3-sky-blue.png", "assets/images/sanpham/vf3-crimson-red.png"], "color": ["Vàng", "Hồng", "Xanh da trời", "Đỏ"] },
    "vf5h": { "name": "VINFAST VF 5", "price": 529000000, "photo": ["assets/images/sanpham/VF5-orange.png", "assets/images/sanpham/vf5-blue.png", "assets/images/sanpham/vf5-white.png", "assets/images/sanpham/vf5-red.png"], "color": ["Cam", "Xanh dương", "Trắng", "Đỏ"] },
    "vf6h": { "name": "VINFAST VF 6", "price": 689000000, "photo": ["assets/images/sanpham/vf6-green.png", "assets/images/sanpham/vf6-blue.png", "assets/images/sanpham/vf6-white.png", "assets/images/sanpham/vf6-black.png"], "color": ["Xanh lá", "Xanh dương", "Trắng", "Đen"] },
    "vf3": { "name": "VINFAST VF 3", "price": 299000000, "photo": ["assets/images/sanpham/vf3-crimson-red.png", "assets/images/sanpham/vf3-summer-yellow.png", "assets/images/sanpham/vf3-rose-pink.png", "assets/images/sanpham/vf3-sky-blue.png"], "color": ["Đỏ", "Vàng", "Hồng", "Xanh da trời"] },
    "vf5": { "name": "VINFAST VF 5", "price": 529000000, "photo": ["assets/images/sanpham/vf5-white.png", "assets/images/sanpham/vf5-blue.png", "assets/images/sanpham/VF5-orange.png", "assets/images/sanpham/vf5-red.png"], "color": ["Trắng", "Xanh dương", "Cam", "Đỏ"] },
    "vf6": { "name": "VINFAST VF 6", "price": 689000000, "photo": ["assets/images/sanpham/vf6-black.png", "assets/images/sanpham/vf6-blue.png", "assets/images/sanpham/vf6-white.png", "assets/images/sanpham/vf6-green.png"], "color": ["Đen", "Xanh dương", "Trắng", "Xanh lá"] },
    "vf7": { "name": "VINFAST VF 7", "price": 799000000, "photo": ["assets/images/sanpham/vf7-crimson-red.png", "assets/images/sanpham/vf7-black.png", "assets/images/sanpham/vf7-white.png"], "color": ["Đỏ", "Đen", "Trắng"] },
    "vf8": { "name": "VINFAST VF 8", "price": 1019000000, "photo": ["assets/images/sanpham/vf8-white.png", "assets/images/sanpham/vf8-red.png"], "color": ["Trắng", "Đỏ"] },
    "vf9": { "name": "VINFAST VF 9", "price": 1499000000, "photo": ["assets/images/sanpham/vf9-black.png", "assets/images/sanpham/vf9-white.png", "assets/images/sanpham/vf9-red.png"], "color": ["Đen", "Trắng", "Đỏ"] },
    "vfe34": { "name": "VINFAST VF e34", "price": 668000000, "photo": ["assets/images/sanpham/vfe34.png"], "color": ["Trắng"] },
    "minio": { "name": "MINIO GREEN", "price": 269000000, "photo": ["assets/images/sanpham/minio-green.png"], "color": ["Đen"] }
};

// Hàm thêm vào giỏ hàng
function addCart(code) {
    let input = document.getElementById(code);
    if (!input) {
        console.error("Không tìm thấy phần tử với ID: " + code);
        return;
    }
    let number = parseInt(input.value);
    if (isNaN(number) || number <= 0) {
        alert("Vui lòng nhập số lượng hợp lệ (lớn hơn 0).");
        return;
    }
    if (typeof localStorage[code] === "undefined") {
        window.localStorage.setItem(code, number);
        alert("Đặt hàng thành công. Tổng số lượng đã đặt là: " + number + ".");
    } else {
        var current = parseInt(window.localStorage.getItem(code));
        if (number + current > 10) {
            alert("Tổng số lượng đặt hàng không thể vượt quá 10. Đặt hàng với số lượng tối đa còn lại: " + (10 - current) + ".");
            window.localStorage.setItem(code, 10);
        } else {
            window.localStorage.setItem(code, number + current);
            alert("Đặt hàng thành công. Tổng số lượng đã đặt là: " + (number + current) + ".");
        }
    }
}

// Hàm hiển thị giỏ hàng
function displayCart() {
    var cartTable = document.getElementById("CartDetail");
    if (!cartTable) {
        console.log("Không tìm thấy bảng giỏ hàng (CartDetail).");
        return;
    }
    var tbody = cartTable.getElementsByTagName('tbody')[0];
    if (!tbody) {
        console.log("Không tìm thấy tbody trong bảng giỏ hàng.");
        return;
    }
    tbody.innerHTML = "";

    let totalPrice = 0;
    for (var i = 0; i < window.localStorage.length; i++) {
        var code = window.localStorage.key(i);
        var quantity = parseInt(window.localStorage.getItem(code));
        var item = ListItem[code];
        if (!item) continue;

        var newRow = document.createElement("tr");

        var photoCell = document.createElement("td");
        var img = document.createElement("img");
        img.src = item.photo[0];
        img.width = 100;
        photoCell.appendChild(img);
        newRow.appendChild(photoCell);

        var infoCell = document.createElement("td");
        infoCell.innerHTML = `
            <p>Tên sản phẩm: ${item.name}</p>
            <p>Màu sắc: ${item.color[0]}</p>
            <p>Số lượng: ${quantity}</p>
        `;
        newRow.appendChild(infoCell);

        var totalPriceCell = document.createElement("td");
        var itemTotal = item.price * quantity;
        totalPriceCell.textContent = itemTotal.toLocaleString() + " VNĐ";
        totalPriceCell.classList.add("item-price");
        newRow.appendChild(totalPriceCell);

        var removeCell = document.createElement("td");
        var removeButton = document.createElement("button");
        removeButton.textContent = "Xóa";
        removeButton.classList.add("remove-button");
        removeButton.dataset.code = code;
        removeButton.addEventListener('click', function() {
            removeCartItem(this.dataset.code);
        });
        removeCell.appendChild(removeButton);
        newRow.appendChild(removeCell);

        tbody.appendChild(newRow);
        totalPrice += itemTotal;
    }

    var totalElement = document.getElementById("bill_totalpretax");
    if (totalElement) {
        totalElement.textContent = totalPrice.toLocaleString() + " VNĐ";
    }
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeCartItem(code) {
    if (typeof window.localStorage[code] !== "undefined") {
        window.localStorage.removeItem(code);
        displayCart();
        alert("Đã xóa sản phẩm khỏi giỏ hàng.");
    }
}

// Khởi chạy khi trang tải
window.onload = function() {
    if (document.getElementById("CartDetail")) {
        displayCart();
    }
};

// Xác nhận đơn hàng
document.addEventListener("DOMContentLoaded", function() {
    var confirmButton = document.getElementById("confirm-order");
    if (confirmButton) {
        confirmButton.addEventListener("click", function() {
            var confirmed = confirm("Xác nhận đơn hàng?");
            if (confirmed) {
                alert("Đơn hàng đã được xác nhận!");
                window.localStorage.clear();
                displayCart();
            }
        });
    }
});