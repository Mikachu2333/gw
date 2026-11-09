# Font.Strikethrough

如果文字中间有一条水平删除线，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Strikethrough**

express   一个代表 **Font** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例将 Sheet1 中活动单元格的字体设置为加删除线*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    Application.ActiveCell.Font.Strikethrough = true
}
```


```JavaScript
/*本示例判断第一个工作表中单元格D5的字体如果有删除线，则通知用户，并取消删除线*/
function test() {
    let font = Application.Worksheets.Item(1).Range("D5").Font
    if (font.Strikethrough) {
        alert("取消字体的删除线")
        font.Strikethrough = false
    }
}
```
