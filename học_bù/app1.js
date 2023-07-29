const X=10
 for (let i = 1; i <= X; i++){
   
    for(var k=X;k>i;k--){
        document.write("&nbsp;&nbsp;");
    }
     
    for (let j=1;j <= i*2-1;j++){
        if(i==1 || i==X || j==1 || j==i*2-1){
            document.write("*");
        } else {
            document.write("&nbsp;&nbsp;");
}
    }
    
    document.writeln("<br />");
 }
