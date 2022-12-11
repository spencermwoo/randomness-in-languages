import System.Random (randomRIO)
import qualified Data.Map.Strict as Map
import Data.List (foldl')
import Control.Monad (replicateM)
import System.Directory (createDirectoryIfMissing)

-- Set the number of random numbers to generate and the upper bound for the numbers
n = 10
x = 100

-- Generate N random numbers between 1 and X
numbers :: IO [Int]
numbers = replicateM n $ randomRIO (1, x)

-- Calculate the probability of each number
probabilities :: [Int] -> [Double]
probabilities nums =
  let
    total = length nums
    counts = foldl' (\m n -> Map.insertWith (+) n 1 m) Map.empty nums
  in
    map (\n -> fromIntegral (counts Map.! n) / fromIntegral total) nums

-- Generate a file name based on the values of N and X
fileName = "haskell_" ++ show n ++ "_" ++ show x ++ ".csv"

-- Create the "outputs" directory if it does not exist
createDirectoryIfMissing True "outputs"

-- Write the probabilities to a file in the "outputs" directory
main :: IO ()
main = do
  ns <- numbers
  let ps = probabilities ns
  writeFile ("outputs/" ++ fileName) $ unlines $ map (\(n, p) -> show n ++ "," ++ show p) $ zip ns ps
