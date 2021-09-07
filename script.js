var jsonData = [
{
    "title"   : "Tổng hợp mã Giảm Giá, Deal Sale Shopee tháng 9/2021",
    "imgUrl" : "https://i.imgur.com/ne4olrb.jpg",
    "linksp" : "https://cuongbokit.blogspot.com/2021/09/tong-hop-ma-giam-gia-deal-sale-freeship-1k-9k-thang-9.html"
},    
{
    "title"   : "Đăng ký Accessttrade",
    "imgUrl" : "https://i.imgur.com/ev50xTz.jpg",
    "linksp" : "https://shorten.asia/8ukhzY8s"
},
{
    "title"   : "Cách Kiếm Tiền Online với Accesstrade",
    "imgUrl" : "https://i.imgur.com/R06uXdd.jpg",
    "linksp" : "https://cuongbokit.blogspot.com/2021/08/cach-kiem-tien-online-voi-accesstrade.html"
}, 
{
    "title"   : "Cách Set Hẹn Hò Với Người Nổi Tiếng Facebook (Có Tag)",
    "imgUrl" : "https://i.imgur.com/hKLoaPJ.jpg",
    "linksp" : "https://cuongbokit.blogspot.com/2021/08/cach-set-hen-ho-voi-nguoi-noi-tieng.html"
}, 
{
    "title"   : "MBBank Android",
    "imgUrl" : "https://i.imgur.com/g0cnBV1.jpg",
    "linksp" : "https://shorten.asia/ZjRxGqPQ"
},
{
    "title"   : "MBBank IOS",
    "imgUrl" : "https://i.imgur.com/g0cnBV1.jpg",
    "linksp" : "https://shorten.asia/aU4AgDvj"
} 
];

let data = "";
for(let i=0; i<jsonData.length; i++){
  data += '<a itemprop="url" target="_blank" href="'+ jsonData[i].linksp+'" class="eco-catalog-product-desktop-vertical-simple  block rounded-lg bg-white shadow-custom-1  product-hover-animation overflow-hidden h-full flex flex-col relative" title=""><div class="relative h-0 " style="padding-bottom: 100%;"><div class="absolute top-0 left-0 right-0 bottom-0 w-full h-full"><div class="w-full h-full"><div class="lazyload-wrapper"><img class="w-full h-full object-contain" src="'+jsonData[i].imgUrl+'" title="'+jsonData[i].title+'" alt="'+jsonData[i].title+'" style="object-fit: cover;"/></div></div></div></div><div class="py-4 px-3 flex-grow flex flex-col "><div class="text-xs md:text-base flex-grow"><span class="" width="0"><span><span>'+jsonData[i].title+'</span></span><span style="position: fixed; visibility: hidden; top: 0px; left: 0px;">...</span></span></div></div></a>';
}
document.getElementById("innerdata").innerHTML = data;

function copyLink() {
    
    toast({
      title: "Thành công!",
      message: "Đã sao chép liên kết",
      type: "success",
      duration: 3500
    });
  }
    
  /* Get the text field */
  var copyTextLink = document.getElementById("textlink");

  /* Select the text field */
  copyTextLink.select();
  copyTextLink.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyTextLink.value);

  /* Alert the copied text */
  document.getElementById("thongbaocopy").style.display = "block";
  setTimeout(function(){ document.getElementById("thongbaocopy").style.display = "none"; }, 2000);
}


    // Toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: "fas fa-check-circle",
      info: "fas fa-info-circle",
      warning: "fas fa-exclamation-circle",
      error: "fas fa-exclamation-circle" };

    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
                    <div class='toast__icon'>
                        <i class='${icon}'></i>
                    </div>
                    <div class='toast__body'>
                        <h3 class='toast__title'>${title}</h3>
                        <p class='toast__msg'>${message}</p>
                    </div>
                    <div class='toast__close'>
                        <i class='fas fa-times'></i>
                    </div>
                `;
    main.appendChild(toast);
  }
}
