
module ConversionHelpers =
    let tryParseWith tryParseFunc = tryParseFunc >> function
        | true, v    -> Some v
        | false, _   -> None

    let tryParseInt   = tryParseWith FSharp.Core.int.TryParse 
    
    let tryParseDecimal = tryParseWith FSharp.Core.decimal.TryParse
    

let testParseInt str =
  let aNum = ConversionHelpers.tryParseInt str
  aNum

let testParseDecimal str =
  let aNum = ConversionHelpers.tryParseDecimal str
  aNum

printfn "Testing parseInt"
printfn "=================================="
printfn "%A" (testParseInt "4")
printfn "%A" (testParseInt "Ancuc")
printfn "%A" (testParseInt "5")

let potentialOpt = testParseInt "aro3Badnumber"
match potentialOpt with
| Some n -> printfn "%d" n
| None -> printfn "None was handled here" 


printfn "Testing parseDecimal"
printfn "=================================="

printfn "%A" (testParseDecimal "7.000")
printfn "%A" (testParseDecimal "4.01")
printfn "%A" (testParseDecimal "Ancuc.lo")
printfn "%A" (testParseDecimal "5.2067")
printfn "%A" (testParseDecimal "10")
printfn "%A" (testParseDecimal "24")
printfn "%A" (testParseDecimal "7.000001")

let potentialDecOpt = testParseDecimal "aro3Badnumber"
match potentialDecOpt with
| Some n -> printfn "%M" n
| None -> printfn "None was handled here" 