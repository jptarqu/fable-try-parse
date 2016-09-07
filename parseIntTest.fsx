
let tryParseOpt = FSharp.Core.int.TryParse >> function
    | true, v    -> Some v
    | false, _   -> None

let testParseInt str =
  let aNum = tryParseOpt str
  aNum

printfn "%A" (Some 3)
printfn "%A" (None)
printfn "%A" (testParseInt "4")
printfn "%A" (testParseInt "Ancuc")
printfn "%A" (testParseInt "aro3")
printfn "%A" (testParseInt "5")

let potentialOpt = testParseInt "aro3Badnumber"
match potentialOpt with
| Some n -> printfn "%d" n
| None -> printfn "None was handled here" 