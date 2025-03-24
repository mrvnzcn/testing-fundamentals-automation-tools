# Error Case Notes for SOAP Demo Service

Tested on: https://www.crcind.com/csp/samples/SOAP.Demo.cls?wsdl

---

## ✅ AddInteger – Valid Test

```xml
<tem:AddInteger>
   <tem:Arg1>10</tem:Arg1>
   <tem:Arg2>5</tem:Arg2>
</tem:AddInteger>
```
**Result:** <AddIntegerResult>15</AddIntegerResult>

---

## ❌ AddInteger – Invalid Test

### A) Empty Arg1
```xml
<tem:AddInteger>
   <tem:Arg1></tem:Arg1>
   <tem:Arg2>5</tem:Arg2>
</tem:AddInteger>
```
**Expected:** Error or SOAP Fault  
**Actual:** Request succeeded. Arg1 treated as 0 → Result = 5  
🟡 Observation: No validation on empty numeric input

### B) Special Characters
```xml
<tem:AddInteger>
   <tem:Arg1>@</tem:Arg1>
   <tem:Arg2>#</tem:Arg2>
</tem:AddInteger>
```
**Expected:** Type validation error  
**Actual:** Request failed — Bad Request or SOAP Fault returned  
✅ Observation: Proper data type validation is enforced

---

## ✅ DivideInteger – Valid Test

```xml
<tem:DivideInteger>
   <tem:Arg1>10</tem:Arg1>
   <tem:Arg2>2</tem:Arg2>
</tem:DivideInteger>
```
**Result:** <DivideIntegerResult>5</DivideIntegerResult>

---

## ❌ DivideInteger – Invalid Test

### A) Empty Arg2
```xml
<tem:DivideInteger>
   <tem:Arg1>10</tem:Arg1>
   <tem:Arg2></tem:Arg2>
</tem:DivideInteger>
```
**Expected:** Error or validation message  
**Actual:** Request succeeded. Possibly treated as 0  
🟡 Observation: No validation on missing denominator

### B) Special Characters
```xml
<tem:DivideInteger>
   <tem:Arg1>100</tem:Arg1>
   <tem:Arg2>abc</tem:Arg2>
</tem:DivideInteger>
```
**Expected:** Type validation error  
**Actual:** Request failed – Bad Request returned  
✅ Observation: Correctly rejects non-numeric input

---

## ✅ LookupCity – Valid Test

```xml
<tem:LookupCity>
   <tem:zip>10001</tem:zip>
</tem:LookupCity>
```
**Result:** City returned (e.g., New York)

---

## ❌ LookupCity – Invalid Test

### A) Letters or Symbols
```xml
<tem:LookupCity>
   <tem:zip>abc</tem:zip>
</tem:LookupCity>
```
**Expected:** Error  
**Actual:** No valid city returned or empty result  
🟡 Observation: No validation error thrown

---

## ✅ Mission – Static Call Test

```xml
<tem:Mission/>
```
**Result:** Static informational message returned  
No input → No invalid case possible
