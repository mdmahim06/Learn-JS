// tesing Number function or method with string value

const Function_1 = (score)=>{
	console.log(typeof score);

	let valueInNumber = Number(score); 

	console.log(typeof valueInNumber);
}

// tesing Boolean function or method with other datatype value

const Function_2 = (logedIn)=>{
	console.log(typeof logedIn);

	let booleanLogedIn = Boolean(logedIn);

	console.log(typeof booleanLogedIn);
	console.log(booleanLogedIn);
}


// tesing String function or method with other datatype value

const Function_3 = (data)=>{
	console.log(typeof data);

	let stringCnvrt = String(data);

	console.log(typeof stringCnvrt);
	console.log(stringCnvrt);
}


// methonds calls

// Function_1("33");

	// outputs In Number() method

	// "33" => 33
	// "33abc" => NaN
	// true => 1 / false => 0

// Function_2("hello");

	// outputs In Boolean() method

	// 1 => true
	// 0 => false
	// "" => false
	// "any" => true 
		// When I try to convert an empty string It's return false
		// And
		// When I try to convert a string with some value It's return true


Function_3([1,2,3]);

	// outputs In String() method

	// 1 => "1"
	// {number:1} => "[object Object]"
	// [1,2,3] => "1,2,3"


