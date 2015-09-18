var MS=MS || {};
        (function(counter){
             function compareArray(array){
            
            var argsLength=arguments.length;
            var flag=0;
            var array1=arguments[0];//console.log(array1);
            var array2=arguments[1];//console.log(array2);
            if(array1.length==0)
              return array2;
            for(var i=0;i<array1.length;i++){
              for(var j=0;j<array2.length;j++){
                  if(array1[i]===array2[j])
                    flag=1;

                  else
                    continue;
              }
              if(!flag)
               array1.splice(i, 1);
                }
               
             return array1;
         }
         
       counter.intersection=function(array){
         var result=[];
         var argsLength=arguments.length;
         for(var i=0;i<argsLength;i++){
          var item=arguments[i];
                 result=compareArray(result, item);
         }
         return result;
        }
        
        })(MS) ;