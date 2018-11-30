function Validate(){
if(/^\s+$/.test(document.valid.fname.value)){
      
        alert("Name Cannot Contain only Spaces")
        return false;
}
else
    if(document.valid.postl.value.length != 6){
        if(document.valid.postl.value<0){
            alert("Postal code cannot be negative!!!")
            return false;
        }else{
        alert("Pincode should be of 6 digits!!!")
        return false;
    }
}else
    if(document.valid.phone.value.length != 10){
       if(document.valid.phone.value<0){
        aler("Phone Number cannot be negative!!!")
        return false;
        }else{
         alert("Phone Number should have 10 digits!!!");
        return false;
    }
}else
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.valid.email.value)){
     alert("Data Registered")  
    return true;
    }
        else
    {
   alert("Email not Valid!!!")
    return false;
   }
}
