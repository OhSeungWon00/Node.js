function delay(ms) {
    return new Promise((resolve, reject) => {


        setTimeout (() => {


            resolve('Waited for ${ms} milliseconds');
        
        }, ms);
    });
}


delay(2000)
    .then((result) => {
        console.log(result);
    })

    .catch((error) => {
        console.error(error);
    });

