# Application.PicasToPoints

将度量单位从十二点活字转换为磅值（1 十二点活字 = 12 磅）。以 **Single** 类型返回转换结果。



## 语法

express.**PicasToPoints(Picas)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Picas | 必选 | number（float 精度） | 要转换为磅值的十二点活字值。 |

## 返回值

Single

## 示例


```JavaScript
/*本示例将为活动文档添加行号，并将行号和文档文本之间的距离设置为 4 个十二点活字。*/
function test() {
    let lineNumbering = ActiveDocument.PageSetup.LineNumbering
    lineNumbering.Active = true
    lineNumbering.DistanceFromText = Application.PicasToPoints(4)
}
```


```JavaScript
/*本示例将选定段落的首行缩进设置为 3 个十二点活字。*/
function test() {
    Selection.ParagraphFormat.FirstLineIndent = Application.PicasToPoints(3)
}
```
