# Range.Copy

将单元格区域复制到指定的区域或剪贴板中。

返回值类型为Variant。



## 语法

express.**Copy(Destination)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Destination | 可选 | any | 指定区域要复制到的新域。如果省略此参数，ET 会将区域复制到剪贴板。 |

## 返回值

any

## 示例


```JavaScript
/*此示例将工作表 Sheet1 上单元格区域 A1:D4 中的公式复制到单元格区域 E5:H8 中。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1:D4").Copy(Worksheets.Item("Sheet1").Range("E5"))
}
```


```JavaScript
/*此示例将显示工作表 Sheet1 上单元格 A1 中的数据类型并复制到单元格 B1 中。*/
function test() {
    Range("A1").Select()
    Range("B1").Copy(Selection)
}
```
