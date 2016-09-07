fsc ./plugins/try-parse/Fable.Plugins.IntTryParse.fsx --target:library --out:./plugins/try-parse/Fable.Plugins.IntTryParse.dll
call Fable
node fableOutput/parseIntTest.js
pause