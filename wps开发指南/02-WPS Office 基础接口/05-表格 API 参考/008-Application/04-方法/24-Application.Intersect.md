# Application.Intersect

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示两个或多个区域重叠的矩形区域。如果指定了不同工作表中的一个或多个区域，则返回错误。



## 语法

express.**Intersect(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | Range | 重叠的区域。必须指定至少两个 **Range** 对象。 |
| Arg2 | 必选 | Range | 重叠的区域。必须指定至少两个 **Range** 对象。 |
| Arg3 - Arg30 | 可选 | any | 相交范围。 |

## 返回值

Range

## 示例


```JavaScript
/*本示例在 Sheet1 中选定两个区域A1:D1和D1:F1的重叠区域。如果所选区域不重叠，本示例将显示一条相应的信息。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    let intersect = Application.Intersect(Range("A1:D1"), Range("D1:F1"))
    if (intersect === null) {
        alert("Ranges do not intersect")
    } else {
        intersect.Select()
    }
}
```


```JavaScript
/*本示例比较 Worksheet.Range 属性、 Application.Union 方法和 Intersect 方法。*/
function test() {
    // Selects cells A1 to A10.
    Range("A1:A10").Select()
    // Selects cells A1 to A10.
    Range(Range("A1"), Range("A10")).Select()
    // Selects cells A1 and A10.
    Range("A1, A10").Select()
    // Selects cells A1 and A10.
    Union(Range("A1"), Range("A10")).Select()
    // Selects cell A5.
    Range("A1:A5 A5:A10").Select()
    // Selects cell A5.
    Intersect(Range("A1:A5"), Range("A5:A10")).Select()
}
```
