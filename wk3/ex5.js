function f(arr,obj,str){
    if(!Array.isArray(arr)){
        throw new Error('not an array')
    }
    if(typeof obj!=='object'||!('type'in obj)){
        throw new Error('not the right object')
    }
    if(!(typeof str==='string'||str instanceof String)){
        throw new Error('can i have a string')
    }
    console.log('function ran');
}

try {
    // f({},{type:'something'},'etc')
    // f([],{},'etc')
    // f([],{type:'something'},123)
    f([],{type:'something'},'etc')
} catch (error) {
    console.log(error);
}