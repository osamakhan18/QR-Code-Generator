var input = document.getElementById('input_text')

var btn = document.getElementById('btn');

var image = document.getElementById('image')
var img_src= document.getElementById('img-src')

btn.addEventListener('click',function(){
    img_src.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
     encodeURIComponent(input.value);

    
})
