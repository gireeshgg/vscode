function myfunc()
{
    var x = Number(form.x.value);
    var y = Number(form.y.value);
    if(form.Operation.value == "Add"){
    return(x+y);
    }
    else if(form.Operation.value == "Subtract"){
     return(x-y);
    }
    else if(form.Operation.value == "Multiply"){
       
    return(x*y);
    }   
    else if(form.Operation.value == "Divide"){
      
    return(x/y);
    }
}