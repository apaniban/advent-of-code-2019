module Main where

import FuelRequirements

readInt :: String -> Int
readInt = read

main :: IO ()
main = do
  input <- readFile "input.txt"
  putStrLn "fuel requirements"
  let masses = fmap readInt $ lines input
  print $ sum $ fmap fuelRequirements masses
  print $ sum $ fmap accumulatedFuelRequirements masses
