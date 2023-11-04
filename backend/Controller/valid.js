const isvalid= function(value){
    if (typeof value=== "undefined" || typeof value===null){
        return false;
    }
    if ((typeof value === "string" && value.trim().length === 0) || (typeof value === "number" && value === 0)) {
        return false;
    }
    
    if ((typeof value === "string" || typeof value === "number") && (value.toString().trim().length > 0 || value !== 0)) {
        return true;
    }
    
}



const isvalidBody = function(requestBody){
    return Object.keys(requestBody).length>0;
}

module.exports = {isvalid,isvalidBody};