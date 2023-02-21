import System.Random
import Text.Printf

main :: IO ()
main = do
  let n = 1000000000
      x = 10
  gen <- newStdGen
  let nums = take n (randomRs (1, x) gen :: [Int])
      freqs = map (\num -> (num, length (filter (== num) nums))) [1..x]
      probs = map (\(num, freq) -> (num, fromIntegral freq / fromIntegral n :: Double)) freqs
      filename = "haskell_" ++ show x ++ "_" ++ show n
  writeFile filename (unlines (map (\(num, prob) -> printf "%d: %.9f" num prob) probs))
