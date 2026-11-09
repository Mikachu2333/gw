# Application.Union

返回两个或多个区域的合并区域。



## 语法

express.**Union(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | Range | 必须指定至少两个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。 |
| Arg2 | 必选 | Range | 必须指定至少两个 **Range** 对象。 |
| Arg3 - Arg30 | 可选 | any | 一个区域。 |

## 返回值

Range

## 示例


```JavaScript
/*此示例使用公式“=RAND()”填充两个区域A1:A5和A7:A10的合并区域。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    let range = Application.Union(Range("A1:A5"), Range("A7:A10"))
    range.Formula = "=RAND()"
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
