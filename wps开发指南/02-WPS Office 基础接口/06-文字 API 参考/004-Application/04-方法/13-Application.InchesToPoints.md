# Application.InchesToPoints

将度量单位从英寸转换为磅（1 英寸 = 72 磅）。以 **Single** 类型返回转换结果。



## 语法

express.**InchesToPoints(Inches)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Inches | 必选 | number（float 精度） | 要转换为磅值的英寸值。 |

## 返回值

number（float 精度）

## 示例


```JavaScript
/*本示例将选定段落的段前间距设置为0.25英寸。*/
function test() {
    Application.Selection.ParagraphFormat.SpaceBefore = Application.InchesToPoints(0.25)
}
```


```JavaScript
/*示例先将每个打开的文档的左右边距设置为 0.65 英寸，再逐一打印各文档。*/
function test() {
    for (let i = 1; i <= Application.Documents.Count; i++) {
        Application.Documents.Item(i).PageSetup.LeftMargin = Application.InchesToPoints(0.65)
        Application.Documents.Item(i).PageSetup.RightMargin = Application.InchesToPoints(0.65)
        Application.Documents.Item(i).PrintOut()
    }
}
```
