const questions = [

/* =========================
MCQ QUESTIONS
========================= */

{
type:"mcq",
question:"Which loop is used when number of iterations is known?",
options:["for","while","do-while","switch"],
answer:"for",
hint:"Used when start and end are known"
},

{
type:"mcq",
question:"Which loop executes at least once?",
options:["do-while","for","while","if"],
answer:"do-while",
hint:"Condition checked after execution"
},

{
type:"mcq",
question:"Which loop checks condition before execution?",
options:["while","do-while","both for and while","none"],
answer:"both for and while",
hint:"Condition checked first"
},

{
type:"mcq",
question:"Which keyword is used to stop loop?",
options:["break","stop","exit","return"],
answer:"break",
hint:"Terminates loop"
},

{
type:"mcq",
question:"Which keyword skips current iteration?",
options:["continue","break","skip","pass"],
answer:"continue",
hint:"Moves to next iteration"
},

{
type:"mcq",
question:"What is the starting value in for(int i=0; i<5; i++)?",
options:["0","1","5","-1"],
answer:"0",
hint:"Initial value"
},

{
type:"mcq",
question:"How many times will loop run: for(int i=1; i<=3; i++)?",
options:["3","2","4","1"],
answer:"3",
hint:"1,2,3"
},

{
type:"mcq",
question:"Which loop is best when condition is unknown?",
options:["while","for","switch","if"],
answer:"while",
hint:"Condition-based loop"
},

{
type:"mcq",
question:"Which symbol is used for increment?",
options:["++","--","+","+="],
answer:"++",
hint:"Increase value"
},

{
type:"mcq",
question:"What happens if loop condition is always true?",
options:["Infinite loop","Error","One execution","Stops automatically"],
answer:"Infinite loop",
hint:"Runs forever"
},

/* =========================
CODING QUESTIONS
========================= */

{
type:"code",
question:"Write a Java program to print numbers from 1 to 10 using for loop",

required:["for","system.out.println"],

hint:"Use for(int i=1; i<=10; i++)",

solution:`class ForLoop {
  public static void main(String[] args){
    for(int i = 1; i <= 10; i++){
      System.out.println(i);
    }
  }
}`
},

{
type:"code",
question:"Write a program to print numbers from 1 to 5 using while loop",

required:["while","system.out.println"],

hint:"Initialize variable before loop",

solution:`class WhileLoop {
  public static void main(String[] args){
    int i = 1;

    while(i <= 5){
      System.out.println(i);
      i++;
    }
  }
}`
},

{
type:"code",
question:"Write a program using do-while loop to print numbers from 1 to 3",

required:["do","while","system.out.println"],

hint:"Condition at end",

solution:`class DoWhileLoop {
  public static void main(String[] args){
    int i = 1;

    do{
      System.out.println(i);
      i++;
    }while(i <= 3);
  }
}`
},

{
type:"code",
question:"Write a program to print even numbers from 1 to 10 using loop",

required:["for","%","system.out.println"],

hint:"Use i % 2 == 0",

solution:`class EvenNumbers {
  public static void main(String[] args){
    for(int i = 1; i <= 10; i++){
      if(i % 2 == 0){
        System.out.println(i);
      }
    }
  }
}`
},

{
type:"code",
question:"Write a program to print sum of numbers from 1 to 5",

required:["for","+","system.out.println"],

hint:"Use sum variable",

solution:`class Sum {
  public static void main(String[] args){
    int sum = 0;

    for(int i = 1; i <= 5; i++){
      sum = sum + i;
    }

    System.out.println(sum);
  }
}`
},

{
type:"code",
question:"Write a program to demonstrate break in loop",

required:["for","break","system.out.println"],

hint:"Stop loop at condition",

solution:`class BreakDemo {
  public static void main(String[] args){
    for(int i = 1; i <= 10; i++){
      if(i == 5){
        break;
      }
      System.out.println(i);
    }
  }
}`
},

{
type:"code",
question:"Write a program to demonstrate continue in loop",

required:["for","continue","system.out.println"],

hint:"Skip one iteration",

solution:`class ContinueDemo {
  public static void main(String[] args){
    for(int i = 1; i <= 5; i++){
      if(i == 3){
        continue;
      }
      System.out.println(i);
    }
  }
}`
}

]