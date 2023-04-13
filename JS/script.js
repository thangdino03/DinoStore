
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}



// của icon 
const products = document.querySelectorAll('.product');
products.forEach(product => {
  console.log(product);
  product.addEventListener('mouseover', () => {
    let child = product.querySelector('.icon');
    child.classList.add('show');
  });
});
products.forEach(product => {
  product.addEventListener('mouseleave', () => {
    let child = product.querySelector('.icon');
    child.classList.toggle('show');
  });
});


// shoping cart
// Mảng lưu trữ sản phẩm trong giỏ hàng
const cart = [];

const addButtons = document.querySelectorAll('.themvaocart');
addButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // Lấy thông tin sản phẩm từ phần tử cha gần nhất có lớp CSS 'A1'
    const productInfo = event.target.closest('.product');

    if (productInfo) {
      const productId = cart.length + 1;
      const productName = productInfo.querySelector('.product h3').innerText;
      const productPrice = Number(productInfo.querySelector('.product span').innerText.replace('$', '')) || 0;
      const productQuantity = 1;

      const product = {
        id: productId,
        name: productName,
        price: productPrice,
        quantity: productQuantity
      };

      // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
      const existingProduct = cart.find((item) => item.id === productId);

      if (existingProduct) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng sản phẩm lên 1
        existingProduct.quantity++;
      } else {
        // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm vào giỏ hàng
        cart.push(product);
      }

      // Hiển thị thông báo cho người dùng
      alert(`Đã thêm sản phẩm ${productName} vào giỏ hàng`);

      // Cập nhật giỏ hàng và tổng tiền
      updateCart();
    }
  });
});

function updateCart() {
  // Cập nhật số lượng sản phẩm trong giỏ hàng
  const cartCount = document.querySelector('.icon-1 i');

  if (cartCount) {
    cartCount.innerText = cart.length;
  }

  // Hiển thị danh sách sản phẩm trong giỏ hàng
  const cartList = document.querySelector('.shopping-cart .cart-list');

  if (cartList) {
    cartList.innerHTML = '';

    cart.forEach((item) => {
      const li = document.createElement('li');
      li.innerText = `${item.name} x${item.quantity} - $${item.price * item.quantity}`;
      cartList.appendChild(li);
    });
  }

  // Tính toán và hiển thị tổng tiền
  const totalPrice = document.querySelector('.total-price');

  if (totalPrice) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalPrice.innerText = `$${total}`;
  }
}

const cartIcon = document.querySelector('.icontaskbar .giohanggne');
const shoppingCart = document.querySelector('.shopping-cart');

// // Hiển thị phần giỏ hàng khi di chuột vào biểu tượng "cart"
cartIcon.addEventListener('mouseenter', () => {
  shoppingCart.style.display = 'block';
});

// // Ẩn phần giỏ hàng khi di chuột ra khỏi biểu tượng "cart"
cartIcon.addEventListener('mouseleave', () => {
  shoppingCart.style.display = 'none';
});

// video 
const video = document.querySelector('video');
video.currentTime = 5;

function playPause() {
  video.paused ? video.play() : video.pause();
}

function stopVideo() {
  video.pause();
  if (video.currentTime) {
    video.currentTime = 0;
  }
}

function phatlaivideo() {
  video.currentTime = 0;
  video.play();
}

function tangamluong() {
  if (video.volume < 1) {
    video.volume = parseFloat(video.volume + 0.1).toFixed(1);
  }
}

function Giamamluong() {
  if (video.volume > 0) {
    video.volume = parseFloat(video.volume - 0.1).toFixed(1);
  }
}

function tattieng() {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
}

document.body.onload = function () {
  video.play();
  video.addEventListener('ended', function () {
    video.currentTime = 0;
    video.play();
  });
};

// form kiểm lỗi 
function validateForme() {
  var name = document.getElementById("name").value;
  var gender = document.getElementsByName("gender");
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var product = document.getElementById("product").value;
  var address = document.getElementById("address").value;

  // Kiểm tra tên khách hàng
  if (name == "") {
    alert("Vui lòng nhập tên khách hàng");
    return false;
  } else if (/\d/.test(name)) {
    alert("Tên khách hàng không được chứa chữ số");
    return false;
  }


  // Kiểm tra giới tính
  var genderSelected = false;
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderSelected = true;
      break;
    }
  }
  if (!genderSelected) {
    alert("Vui lòng chọn giới tính");
    return false;
  }

  if (phone == "") {
    alert("Vui lòng nhập số điện thoại");
    return false;
  } else if (!/^((\+84)|0)\d{9}$/.test(phone)) {
    alert("Số điện thoại không hợp lệ");
    return false;
  }

  // Kiểm tra email
  if (email == "") {
    alert("Vui lòng nhập email");
    return false;
  } else if (!email.includes("@")) {
    alert("Email không hợp lệ");
    return false;
  }

  // Kiểm tra tên sản phẩm đặt
  if (product == "") {
    alert("Vui lòng nhập tên sản phẩm đặt");
    return false;
  }

  // Kiểm tra địa chỉ
  if (address == "") {
    alert("Vui lòng nhập địa chỉ");
    return false;
  }

  // Nếu thông tin hợp lệ thì submit form
  alert("Đặt hàng thành công")
  return true;
}


// flash sale
// Lấy thời gian hiện tại
var now = new Date().getTime();

// Đặt thời gian kết thúc flash sale (sử dụng định dạng thời gian UTC)
var countDownDate = new Date("2023-04-15T12:00:00Z").getTime();

// Cập nhật đồng hồ đếm ngược mỗi 1 giây
var x = setInterval(function () {

  // Lấy thời gian hiện tại
  var now = new Date().getTime();

  // Tính khoảng cách thời gian giữa thời gian hiện tại và thời gian kết thúc flash sale
  var distance = countDownDate - now;

  // Tính toán các giá trị cho đồng hồ đếm ngược
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Hiển thị các giá trị của đồng hồ đếm ngược trên giao diện
  document.getElementById("days").innerHTML = days + " ngày ";
  document.getElementById("hours").innerHTML = hours + " giờ ";
  document.getElementById("minutes").innerHTML = minutes + " phút ";
  document.getElementById("seconds").innerHTML = seconds + " giây ";

  // Nếu đếm ngược kết thúc, hiển thị thông báo
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Đã kết thúc!";
  }
}, 1000);


// yeuthích
var hearts = document.querySelectorAll('.timsp');
for (var i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener('click', function () {
    this.classList.toggle('clicked');
  });
}


