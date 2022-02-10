// ... when used in arguments in functions, it is called Rest Operator which can take variable length of arguments.
function add(...nums) {

    let sum = 0;

    for (num of nums){
        sum += num;
    }

    console.log(nums);
    console.log(sum);
}

// Function Calls with Variable-Length Arguments
add(4);
add(4, 5);
add(4, 5, 7);
add(4, 5, 7, 8);
add(4, 5, 7, 8, 12);