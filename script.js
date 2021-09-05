var jsonData = [
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
