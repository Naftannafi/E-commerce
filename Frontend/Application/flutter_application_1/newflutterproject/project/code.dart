import 'dart:io';

// Function to calculate factorial
int factorial(int n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

void main() {
  print('Enter only a positive integer:');
  String? input = stdin.readLineSync();

  if (input != null) {
    int number = int.parse(input);

    if (number < 0) {
      print('Factorial is not defined for negative numbers.');
    } else {
      int result = factorial(number);
      print('The factorial of $number is $result.');
    }
  }
}
