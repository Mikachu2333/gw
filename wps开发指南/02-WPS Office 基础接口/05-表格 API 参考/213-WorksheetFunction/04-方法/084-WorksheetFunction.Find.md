# WorksheetFunction.Find

在工作表中查找特定信息。



## 语法

express.**Find(Arg1, Arg2, Arg3)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | string | 工作表名称。 |
| Arg2 | 必选 | string | 区域名称。 |
| Arg3 | 可选 | any | 精确限制查询的参数名称。 |

## 返回值

Double

## 示例


```JavaScript
/*本示例分别赋值B1等单元格，使用 Find 方法查找参数1字符串开始的位置。*/
function test() {
    Range("B1").Value2 = "World"
    Range("B2").Value2 = "hello,World!"
    Range("B3").Value2 = 4
    alert(WorksheetFunction.Find(Range("B1").Value2, Range("B2").Value2, Range("B3").Value2))
}
```


```JavaScript
/*本示例使用 Find 方法查找参数1字符串开始的位置，并分别赋值给E1等单元格。*/
function test() {
    Range("E1").Value2 = WorksheetFunction.Find("in", "Believe in yourself.")
    Range("E2").Value2 = WorksheetFunction.Find("bird", "The bird who dares to fall is bird who learns to fly.", 2)
}
```
