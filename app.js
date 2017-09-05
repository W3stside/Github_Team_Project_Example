console.log('Hello World')

//some commented change
console.log('changed this');

//adding more comments
function doSomeShit (a) {
	console.log(a);
}

//adding a looper
function arrLooper (arr) {
	for (let i = 0;; i < arr.length; i++) {
		console.log( arr[i] )
	}
}

//Adding another thing
var p = Promise.resolve('hello');

p
.then( () => {
	console.log('This was set off');
})
.then( () => {
	console.log('Now this');
})
.catch( err => {
	throw err;
});
"//some new comment" 
