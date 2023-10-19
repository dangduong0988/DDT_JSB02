const a=document.getElementById('btn-đk')
a.addEventListener('click', function(){
    let x = document.getElementById('name').value;
        if (x == "") {
          alert("Cần phải điền tên");
          return false;    
        }
    let b=document.getElementById('email').value
        if(b == "") {
            alert('Cần phải điền Email');
            return false; 
        }
    let c=document.getElementById('pass').value
        if(c == "") {
            alert('Cần phải điền mật khẩu');
            return false; 
        }
    let d=document.getElementById('pass1').value
        if(d == ""){
            alert('Cần phải điền lại mật khẩu');
            return false; 
        }
    alert('Đăng nhập thành công')
    window.location="project1.html"
})