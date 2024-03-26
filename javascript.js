// // section3 
// // Lấy phần tử mà bạn muốn số chạy
// var experienceCountElement = document.getElementById('experienceCount');
// // Số cuối cùng mà bạn muốn số chạy đến
// var finalCount = 500;
// // Thời gian để số chạy đến số cuối cùng (ms)
// var duration = 0.0000001; // 3 giây

// // Hàm để thực hiện số chạy
// function animateValue(element, start, end, duration) {
//     var range = end - start;
//     var current = start;
//     var increment = end > start ? 1 : -1;
//     var stepTime = Math.abs(Math.floor(duration / range));
//     var timer = setInterval(function () {
//         current += increment;
//         element.textContent = current;
//         if (current == end) {
//             clearInterval(timer);
//         }
//     }, stepTime);
// }

// // Gọi hàm để số chạy từ 0 đến 12345
// animateValue(experienceCountElement, 0, finalCount, duration);



//////////////////
document.getElementById('link-brithday').addEventListener('click', () => {
    document.getElementById('tab-2').classList.add('hidden');
    document.getElementById('tab-3').classList.add('hidden');
    document.getElementById('tab-1').classList.remove('hidden');
});
document.getElementById('link-wedding').addEventListener('click', () => {
    document.getElementById('tab-1').classList.add('hidden');
    document.getElementById('tab-3').classList.add('hidden');
    document.getElementById('tab-2').classList.remove('hidden');
});
document.getElementById('link-custom').addEventListener('click', () => {
    document.getElementById('tab-1').classList.add('hidden');
    document.getElementById('tab-2').classList.add('hidden');
    document.getElementById('tab-3').classList.remove('hidden');
});
// btn order
// function btnOrder() {
//     document.querySelector('.section5-order').classList.add('hidden');
//     document.querySelector('.order-form').classList.remove('hidden');
// }

//
var section5Order = document.getElementById('section5-order');
var orderForm = document.getElementById('order-form');
function btnOrder() {
    section5Order.classList.add('non-show');
    orderForm.classList.remove('hidden');
    orderForm.classList.add('show');

}

function closeButton() {
    section5Order.classList.remove('non-show');
    orderForm.classList.add('hidden');
}
function submitButton() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    if (name == '' || email == '' || phone == '' || address == '') {
        alert("Please fill out all fields.");
        document.getElementById('name').focus();
        document.getElementById('email').focus();
        document.getElementById('phone').focus();
        document.getElementById('address').focus();
        return false; // Ngăn form submit nếu có input rỗng
    }
    else {
        alert('Đặt hàng thành công.CakeShop sẽ liên hệ với bạn sớm nhất');
    }
}

// img-member-chef
var imgChef1 = document.getElementById('img-chef1');
var memberContact1 = document.getElementById('member-contact1');
imgChef1.addEventListener('click', () => {
    imgChef1.classList.add('non-show');
    memberContact1.classList.remove('hidden');
    memberContact1.classList.add('show');
    imgChef2.classList.remove('non-show');
    memberContact2.classList.add('hidden');
    memberContact2.classList.remove('show');
    imgChef3.classList.remove('non-show');
    memberContact3.classList.add('hidden');
    memberContact3.classList.remove('show');
})
var imgChef2 = document.getElementById('img-chef2');
var memberContact2 = document.getElementById('member-contact2');
imgChef2.addEventListener('click', () => {
    imgChef2.classList.add('non-show');
    memberContact2.classList.remove('hidden');
    memberContact2.classList.add('show');
    imgChef1.classList.remove('non-show');
    memberContact1.classList.add('hidden');
    memberContact1.classList.remove('show');
    imgChef3.classList.remove('non-show');
    memberContact3.classList.add('hidden');
    memberContact3.classList.remove('show');
})
var imgChef3 = document.getElementById('img-chef3');
var memberContact3 = document.getElementById('member-contact3');
imgChef3.addEventListener('click', () => {
    imgChef3.classList.add('non-show');
    memberContact3.classList.remove('hidden');
    memberContact3.classList.add('show');
    imgChef1.classList.remove('non-show');
    memberContact1.classList.add('hidden');
    memberContact1.classList.remove('show');
    imgChef2.classList.remove('non-show');
    memberContact2.classList.add('hidden');
    memberContact2.classList.remove('show');
})

// section7 close button
var readNow = document.getElementById('read-now');
readNow.addEventListener('click', () => {
    document.querySelector('.section7-introduct').classList.add('non-show');
    document.querySelector('.section7-info').classList.remove('hidden');
})
function closeButton2() {
    document.querySelector('.section7-introduct').classList.remove('non-show');
    document.querySelector('.section7-info').classList.add('hidden');
}


// section8 start feedback
var stars = document.querySelectorAll('.section8-yourfeedback .fa-star');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        for (var i = 0; i < stars.length; i++) {
            if (i <= index) {
                stars[i].classList.add('text-warning');
            } else {
                stars[i].classList.remove('text-warning');
            }
        }
        setTimeout(() => {
            alert("Đánh giá thành công!");
            // Reset stars to initial state (white color)
            stars.forEach((star) => {
                star.classList.remove('text-warning');
            });
        }, 3000); // 3 seconds delay
    });
});
