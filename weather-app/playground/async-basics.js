console.log('Starting app');

setTimeout(() => {
    console.log('Function running');
}, 2000);

setTimeout(() => {
    console.log('Second function');
}, 0);

console.log('Finishing up');