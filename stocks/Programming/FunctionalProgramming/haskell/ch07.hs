data Shape = Circle Float Float Float | Rectangle Float Float Float Float deriving (Show)

area :: Shape -> Float
area (Circle _ _ r) = pi * r ^ 2

-- deriving (Show)를 붙인다.
-- module load 후 ghci에서 모듈된 내용을 ..
