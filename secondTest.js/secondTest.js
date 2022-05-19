// ************************prime numnber********************************
function prime(num){
    if(num===2){

        return true;
    }else if(num>1){
        for(i=2;i<num;i++){
            if(num%i !==0){
                return true
            }else if(num===i*i){
               return false
            }else{
            return false
            }

        }
    }else{
        return false;
    }
}
console.log(prime(3))

// *******************************************************
function uppercaseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  console.log(uppercaseFirstLetter('john')); 
//   ************************************************************
let arr=[12,35,1,10,34,1]