module FuelRequirementsSpec (main, spec) where

import Test.Hspec

import FuelRequirements

main :: IO ()
main = hspec spec

spec :: Spec
spec = do
  describe "fuelRequirements" $ do
    it "calculates fuel requirements based on mass" $ do
      fuelRequirements 12 `shouldBe` 2
      fuelRequirements 14 `shouldBe` 2
      fuelRequirements 1969 `shouldBe` 654
      fuelRequirements 100756 `shouldBe` 33583

  describe "accumulatedFuelRequirements" $ do
    it "calculates accumulated fuel requirements" $ do
      accumulatedFuelRequirements 12 `shouldBe` 2
      accumulatedFuelRequirements 1969 `shouldBe` 966
      accumulatedFuelRequirements 100756 `shouldBe` 50346
