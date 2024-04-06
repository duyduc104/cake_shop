//section1
var product1 = "Birthday Cake";
var product2 = "Wedding Cake";
var product3 = "Custom Cake";

function findProducts(keySearch) {
    // Convert product names and search term to lowercase for case-insensitive comparison
    var product1Lower = product1.toLowerCase();
    var product2Lower = product2.toLowerCase();
    var product3Lower = product3.toLowerCase();
    keySearch = keySearch.toLowerCase();

    if (product1Lower.includes(keySearch)) {
            document.getElementById('tab-2').classList.add('hidden');
            document.getElementById('tab-3').classList.add('hidden');
            document.getElementById('tab-1').classList.remove('hidden');
            return;
    } else if (product2Lower.includes(keySearch)) {
            document.getElementById('tab-1').classList.add('hidden');
            document.getElementById('tab-3').classList.add('hidden');
            document.getElementById('tab-2').classList.remove('hidden');
            return;
    } else if (product3Lower.includes(keySearch)) {
            document.getElementById('tab-1').classList.add('hidden');
            document.getElementById('tab-2').classList.add('hidden');
            document.getElementById('tab-3').classList.remove('hidden');
            return;
    } else {
        alert("Not found");
    }
}

var searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        findProducts(searchBar.value);
    }
});
// searchBar.addEventListener('input', () => {
//     findProducts(searchBar.value); // Pass the search term directly
// });

// var searchIcon = document.getElementById('searchIcon');
// searchIcon.addEventListener('click', (event) => {
//     findProducts(searchBar.value);
// })



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

// section4
document.querySelectorAll('.detail .d-flex').forEach((content) => {
    const price = content.nextElementSibling;

    content.addEventListener('click', () => {
        content.classList.add('non-show');
        price.classList.remove('hidden');
        price.classList.add('show');
    });
});
document.querySelectorAll('.detail .d-flex').forEach((content) => {
    const price = content.nextElementSibling;

    content.addEventListener('click', () => {
        // Hide all prices
        document.querySelectorAll('.price').forEach((p) => {
            p.classList.add('hidden');
            p.classList.remove('show');
        });

        // Show price of current detail
        price.classList.remove('hidden');
        price.classList.add('show');
    });
    
});
document.querySelectorAll('.priceButton').forEach((button) => {
    button.addEventListener('click', (event) => {
        // Prevent default link behavior
        event.preventDefault();

        // Call btnOrder() function
        btnOrder();
        // document.querySelectorAll('detail .d-flex').forEach((content) => {
        //     price.classList.remove('show');
        //     content.classList.add('non-show');
        //     price.classList.add('hidden');
        // }
        // Hide the price
        const price = event.target.closest('.price');
        if (price) {
            price.classList.add('hidden');
        }

        // Show the corresponding detail
        const detail = price.previousElementSibling;
        if (detail) {
            detail.classList.remove('hidden');
            detail.classList.add('show');
        }
        window.location.href = '#section5';
    });
});



// document.querySelectorAll('.detail .d-flex').forEach((detail) => {
//     const content = document.querySelectorAll('.detail .d-flex');
//     const price = detail.querySelector('.price');
//     const priceButton = detail.querySelector('.priceButton');

//     content.addEventListener('click', () => {
//         content.classList.add('non-show');
//         price.classList.remove('hidden');
//         price.classList.add('show');
//     });

//     priceButton.addEventListener('click', (event) => {
//         event.stopPropagation(); // Prevent the click event from bubbling up to the content
//         content.classList.remove('non-show');
//         price.classList.add('hidden');
//         price.classList.remove('show');
//     });

//     detail.addEventListener('click', () => {
//         document.querySelectorAll('.detail').forEach((otherDetail) => {
//             if (otherDetail !== detail) {
//                 const otherContent = otherDetail.querySelector('.d-flex');
//                 const otherPrice = otherDetail.querySelector('.price');
//                 otherContent.classList.remove('non-show');
//                 otherPrice.classList.add('hidden');
//                 otherPrice.classList.remove('show');
//             }
//         });
//     });
// });

// form
var section5Order = document.getElementById('section5-order');
var orderForm = document.getElementById('order-form');

function btnOrder() {
    section5Order.classList.add('non-show');
    orderForm.classList.remove('hidden');
    orderForm.classList.add('show');
}

function closeButton() {
    orderForm.classList.remove('show');
    orderForm.classList.add('hidden');
    section5Order.classList.remove('non-show');
    section5Order.classList.add('show');
}
function submitButton() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var cake = document.getElementById('cake').value;

    // Phone number pattern to validate
    var phonePattern = /^0[0-9]{9}$/;

    if (name == '' || phone == '' || address == '' || cake == '') {
        alert("Please fill out all fields.");
        document.getElementById('name').focus();
        document.getElementById('name').style.border = '5px solid yellow';
        document.getElementById('cake').focus();
        document.getElementById('cake').style.border = '5px solid yellow';
        document.getElementById('phone').focus();
        document.getElementById('phone').style.border = '5px solid yellow';
        document.getElementById('address').focus();
        document.getElementById('address').style.border = '5px solid yellow';
        return false; // Prevent form submission if there are empty inputs
    } 
    else {
        alert('Đặt hàng thành công. CakeShop sẽ liên hệ với bạn sớm nhất.');
        return true; // Allow form submission if all validations pass
    }
}
// enter phone
function validatePhone(input) {
    // Remove non-numeric characters except the first 0
    input.value = input.value.replace(/\D/g, '');

    // Ensure the phone number starts with 0
    if (input.value.length > 0 && input.value.charAt(0) !== '0') {
        input.value = '0' + input.value.substring(1);
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
        }, 500); // 3 seconds delay
    });
});


// carousel 2s doi anh
document.addEventListener("DOMContentLoaded", function () {
    // Set the interval for changing the carousel image every 2 seconds
    setInterval(function () {
        // Select the carousel element
        let carousel = document.getElementById('carouselExample');
        // Trigger the 'next' button click event to move to the next slide
        carousel.querySelector('.carousel-control-next').click();
    }, 2000); // Change image every 2 seconds
});



// email footer
function phoneFooterToPhoneOrder() {
    var phoneFooterInput = document.getElementById('phone-footer');
    var orderForm = document.getElementById('order-form');
    var phoneInput = document.getElementById('phone');
    var section5Order = document.getElementById('section5-order');
    // Get the trimmed value of the phone-footer input
    var phoneValue = phoneFooterInput.value.trim();

    // Remove the hidden class from the order-form
    orderForm.classList.remove('hidden');
    section5Order.classList.add('non-show');
    phoneInput.value = phoneValue;
}

// Add an event listener to the email-footer input for keyup event
document.getElementById('phone-footer').addEventListener('keyup', function (event) {
    // Check if Enter key is pressed
    if (event.key === 'Enter') {
        // Prevent the default form submission
        event.preventDefault();
        // Call the function to handle the phone
        phoneFooterToPhoneOrder();
    }
});

function btnOrder() {
    // Call the function to handle the email
    phoneFooterToPhoneOrder();
}
