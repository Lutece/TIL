lucky :: Int -> String
lucky 7 = "Luckey Seven"
lucky x = "Sorry you're out!"

factorial :: Int -> Int
factorial 0 = 1
factorial n = n * factorial(n - 1)