# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
// 1. change export statement (it is more readable and can be extended by additional valuables)
// 2. change function declaration (also more readable)
// 3. add jdoc comments (all shared features should have readable interfaces)
// 4. move constants to file definition (prevent redefine it, and could export to other parts of code)
// 5. join if statements
// 6. move out get hash function (DRY)

These points have been refactored (I leaved comments in code).
Also I think it's better to use only partitionKey, without putting it into object (if there is not any subparams and use some transpillers as Typescript to prevent passing wrong input)
