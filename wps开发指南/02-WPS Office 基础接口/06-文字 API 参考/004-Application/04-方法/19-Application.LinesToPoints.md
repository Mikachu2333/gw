# Application.LinesToPoints

将度量单位从行转换为磅（1 行 = 12 磅）。以 **Single** 类型返回转换结果。



## 语法

express.**LinesToPoints(Lines)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Lines | 必选 | number（float 精度） | 要转换为磅值的行值。 |

## 返回值

Float

## 示例


```JavaScript
/*本示例将选定段落的行距设置为 3 倍行距。*/
function test() {
    Application.Selection.ParagraphFormat.LineSpacingRule = wdLineSpaceMultiple
    Application.Selection.ParagraphFormat.LineSpacing = Application.LinesToPoints(3)
}
```


```JavaScript
/*本示例显示 1.5 倍行距所代表的磅值。*/
function test() {
    alert(Application.LinesToPoints(1.5))
}
```
