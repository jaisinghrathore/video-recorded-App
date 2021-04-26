function upload(){
    var input=document.getElementById("upload");
    var freader=new FileReader();
    freader.readAsDataURL(input.files[0]);
    freader.onload=function(){
      document.getElementById("video").src=freader.result;

    }
}

const redirect = ()=>{
    window.location.href="file:///F:/Bittal/recordAvideo.html";
}

const jai="this,is,jai,singh,rathore";
