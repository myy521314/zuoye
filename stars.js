const readline = require('readline');

async function input(msg) {

    return await new Promise((resolve, reject) => {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(msg, (answer) => {

            resolve(answer)
            
            rl.close();
        });
    })
}

(async () => {
    console.log("1.正方形 2.三角形 3.菱形 4.梯形 5.回字")
    var x2 = await input("输入数字选择要打印的图形:")
    // var y=await input("请输入你想要的类型 a.实心 b.空心")
    var n;
    n=x2;
    switch(n){
        case "1":
            var y1=await input("请输入你想要的类型 a.实心 b.空心");
            n1=y1;
            var width= await input("请输入宽:")
            var long= await input("请输入高:")
            switch(n1){
                case "a":
                        var x="";
                                for (var i = 0; i < width; i++) {
                                    for (var j = 0; j < long; j++) {
                                            x+=" *";  
                                }
                                x+="\n";
                            }
                            console.log(x)
                    break;
                case "b":
                        var x="";        //正确示范
                        for (var i = 1; i <=width; i++) {
                            for (var j = 1; j <=long; j++) {
                                    if(j==1||j==long||i==1||i==width){
                                        x+="*";  
                                    }else{
                                        x+=" "
                                    }
                        }
                        x+="\n";
                    }
                    console.log(x)
                    break;
            }
        break;
        case "2":
            var y1=await input("请输入你想要的类型 a.实心 b.空心");
            n1=y1;
            // var width= await input("请输入宽:")
            var long= await input("请输入高:")
            switch(n1){
                case "a":
                    var x="";
                    for(var i=0;i<long;i++){
                            var m=Math.abs(i);
                        for(var j=0;j<long-i;j++){
                            x+=" "
                        }
                        for(var k=0;k<2*i-1;k++){
                            x+="*"
                        }
                        
                        x+=" "
                        x+="\n"
                    }
                    console.log(x); 
                    break;
                    case "b":
                        var x="";
                        for(var i=0;i<=long;i++){
                            for(var j=0;j<=2*long;j++){
                                if(i+j==long||j-i==long||i==long){

                                    x+=" *";
                                }else{
                                    x+="  "
                                }
                            }
                                x+="\n";
                        }
                        console.log(x);
            }
            break;
            case "3":
                var y1=await input("请输入你想要的类型 a.实心 b.空心");
                n1=y1;
                // var width= await input("请输入宽:")
                var long= await input("请输入高:")
                if(long%2==0) long-=1;
                switch(n1){
                    case "a":
                        var x="";   
                        for(var i=-1*(long-1)/2;i<=(long-1)/2;i++){
                            var m=Math.abs(i);
                            for(var j=0;j<m;j++){
                                x+=" "
                            }
                            for(var k=0;k<long-2*m;k++){

                                x+="*"
                            }
                            for(var j=0;j<m;j++){
                                x+=" "
                            }
                            x+=" "
                            x+="\n"
                        }
                        console.log(x);  
                    break;
                    case "b":
                        // console.log("fsaf")
                        var x=""
                        for(var i=-1*(long-1)/2;i<=(long-1)/2;i++){
                            var m=Math.abs(i);
                            for(var j=0;j<m;j++){
                                x+=" "
                            }
                            for(var k=0;k<long-2*m;k++){
                                if(i>-1*(long-1)/2&&i<(long-1)/2&&k>0&&k<long-2*m-1){
                                    x+=" ";
                                }else{
                                    x+="*"
                                }                                
                            }
                            for(var j=0;j<m;j++){
                                x+=" "
                            }
                            x+=" "
                            x+="\n"
                        }
                        console.log(x); 
                    break;
                }
            break;
            case "4":
                var y1=await input("请输入你想要的类型 a.实心 b.空心");
                n1=y1;
                // var width= await input("请输入宽:")
                var long= await input("请输入高:")
                switch(n1){
                    case "a":
                         var x="";
                        for(var i=0;i<long;i++){
                            // var m=Math.abs(i);
                            for(var j=0;j<long-i;j++){
                                x+=" "
                            }
                            for(var k=0;k<2*i+8;k++){
                                x+="*"
                            }
                            x+=" "
                            x+="\n"
                        }
                        console.log(x);  
                    break;
                    case "b":
                         var x="";
                        for(var i=0;i<long;i++){
                            // var m=Math.abs(i);
                            for(var j=0;j<long-i;j++){
                                x+=" "
                            }
                            for(var k=0;k<2*i+8;k++){
                                if(i>0&&i<long-1&&k>0&&k<2*i+7){
                                    x+=" ";
                                }else{                                  
                                    x+="*"
                                }
                            }
                            x+=" "
                            x+="\n"
                        }
                        console.log(x);  
                    break;
                }
            break;
            case "5":
                // var y1=await input("请输入你想要的类型 a.实心 b.空心");
                // n1=y1;
                var width= await input("请输入宽:")
                // var long= await input("请输入高:")
                var x="";   
                for(i=width;i>=0;i--){
                    for(j=0;j<=width;j++){
                        if(i==width||i==0||(i==0.3*width||i==0.7*width)&&j>=0.3*width&&j<=0.7*width||j==width||j==0||(j==0.3*width||j==0.7*width)&&i>=0.3*width&&i<=0.7*width){
                            x+=" +";
                        }else{
                            x+="  "
                        }
                    }x+="\n"
                }
                console.log(x);
            
            
            break;
    }
})();

