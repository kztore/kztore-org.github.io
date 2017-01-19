var myImage=document.getElementById("myPhoto");
var imageArray=["http://newclothingbrand.com/wp-content/uploads/2016/02/Adidas-Shoes-Tubular-X-Knit-for-Men-2016-4.jpg",
"http://bpc.h-cdn.co/assets/16/05/980x490/landscape-1454341283-adidas-ss16-pureboost-running-shoes.jpg",
"http://www.empleopublico.info/images/empleopubli/2017-buy-cheap-sale-2016-New-Adidas-Yeezy-350-Low-Qa2261-Men-Sneakers.jpg",
"http://www.alphastyles.com/wp-content/uploads/2014/07/New-adidas-originals-c-10-c10-mens-shoes-high-top-sneakers-august-online-release-date-2014-blog-showcase-3.jpg",
"http://cdn.hiconsumption.com/wp-content/uploads/2015/01/Adidas-Ultra-BOOST-Running-Shoe-3.jpg"]
var imageIndex=0;
function chahgeImage() {
myPhoto.setAttribute("src", imageArray [imageIndex]);
imageIndex++;
if (imageIndex>=imageArray.length){
imageIndex=0;
}


}
var intervalHandle = setInterval(chahgeImage,2000);
myPhoto.onlick=function(){
clearInterval(intervaHandle);
}