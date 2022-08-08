// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }

//Keep this at top of file for random seed.
seedRandom(fxhash);

// NEW IN ZIM ZIM 01:
// A ready parameter has been added after outerColor and before assets.  This is a callback - or you can still use the "ready" event.  New globals are available for Frame, Stage and width and height.
new Frame(FIT, 1024, 1024, light, dark, ready);
function ready() }
	//Your code goes here
	
	
	//Timeout feature for mint preview. You can change the amount of seconds if you wish.
	timeout(3, () => {
		fxpreview();
	});
}