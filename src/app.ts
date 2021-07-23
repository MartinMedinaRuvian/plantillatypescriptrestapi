import app from './server';

function main():void{
    /**
     * Config port server
     */
    app.set('port', process.env.PORT || 5000);

    /**
     * Execute server
     */
    app.listen(app.get('port'), ()=>{
        console.log('Server run in port ', app.get('port'));
    })
}

/**
 * Execute function 
 */
main();