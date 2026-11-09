# WorksheetFunction.Acos

返回数字的反余弦值。反余弦值是余弦值为 *Arg1* 的角度。返回的角度以弧度给出，范围从 0（零）到 pi。



## 语法

express.**Acos(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | 所需角度的余弦值，必须介于 -1 到 1 之间。 |

## 返回值

number（double 精度）

## 说明


如果要将结果从弧度转换为度，则请将结果乘以 180/PI()，或者使用 Degrees 方法。



## 示例


```JavaScript
/*本示例计算数字的反余弦值，并将结果分别赋值于A2等单元格。*/
function test() {
    Range("A2").Value2 = Application.WorksheetFunction.Acos(-1)
    Range("B2").Value2 = Application.WorksheetFunction.Acos(0.93969262)
    Range("C2").Value2 = Application.WorksheetFunction.Acos(1)
    Range("D2").Value2 = Application.WorksheetFunction.Acos(-0.08715574)
    Range("E2").Value2 = Application.WorksheetFunction.Acos(0)
}
```


```JavaScript
/*本示例为B3等单元格分别赋值，再将其用于计算反余弦值。*/
function test() {
    Range("B3").Value2 = 0.81915204
    Range("C3").Value2 = -0.25881905
    Range("D3").Value2 = 0.5
    let acos1 = Application.WorksheetFunction.Acos(Range("B3").Value2)
    let acos2 = Application.WorksheetFunction.Acos(Range("C3").Value2)
    let acos3 = Application.WorksheetFunction.Acos(Range("D3").Value2)
    alert(acos1)
    alert(acos2)
    alert(acos3)
}
```
