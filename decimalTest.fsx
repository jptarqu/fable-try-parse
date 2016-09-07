
let testDecimalConversion () =
  let aNum1 = (decimal 0)
  let aNum2 = 12M
  let aNum3 = (decimal 3)
  let aNum4 = 4M
  printfn "%M" aNum1
  printfn "%M" aNum2
  printfn "%M" aNum3
  printfn "%M" aNum4

testDecimalConversion () |> ignore