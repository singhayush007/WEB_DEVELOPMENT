//The double Trouble: You are asked with writing a function that doubles each element in an array. However , there's a catch : If the array contains consecutive duplicate elements, only double  one of them.


function double_Trouble(numbers_arr) {
    double_T = []
    for (const num of numbers_arr) {
        double_N = num + num;
        double_T.push(double_N);
        if (num in double_T){
            double_T.pop(num);
        }
    }
    console.log(double_T)
}

numbers_arr = [1, 2, 2, 3, 3, 4, 5]
double_Trouble(numbers_arr);