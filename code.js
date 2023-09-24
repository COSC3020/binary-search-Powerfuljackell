//Used geeksforgeeks binary search lesson in order to better understand and to gain inspiration for my code
function binarySearch(list, element) {
    var beginning = 0
    var end = list.length-1
    var mid = Math.floor((beginning + end)/2)
    while (beginning<=end){
        if(list[mid] == element){
            return mid;
        }else if(list[mid] < element){
            beginning = mid + 1
        }else{
            end = mid - 1
        }
        mid = Math.floor((beginning + end)/2)
    }
    return -1;
}
/* Failed recursive style, returns local variable, but not the correct location
if (list.length <=1) return -1;
    else if(list[mid] == element){
        return mid;
    }else if(list[mid] > element){
        return binarySearch(list.slice(0, mid),element)
    }else if(list[mid] < element){
        return binarySearch(list.slice(mid, list.length),element)
    }else{
        return -1;
    }
*/

var newList = [11]

console.log(binarySearch(newList,newList[0]))
console.log(newList)
