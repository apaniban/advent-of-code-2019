module FuelRequirements
  ( fuelRequirements
  , accumulatedFuelRequirements) where

fuelRequirements :: Int -> Int
fuelRequirements mass = mass `div` 3 - 2

accumulatedFuelRequirements :: Int -> Int
accumulatedFuelRequirements mass =
  sum $ takeWhile (> 0) $ iterate fuelRequirements (fuelRequirements mass)
