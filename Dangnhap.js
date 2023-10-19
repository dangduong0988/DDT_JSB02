const a=document.getElementById('btn-đk')
a.addEventListener('click', function(){
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
    alert('Đăng nhập thành công')
    window.location="project1.html"
})