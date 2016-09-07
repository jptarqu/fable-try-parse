fsc ./plugins/decimals/Fable.Plugins.Decimals.fsx --target:library --out:./plugins/decimals/Fable.Plugins.Decimals.dll
call Fable decimalTest.fsx
node fableOutput/decimalTest.js
pause