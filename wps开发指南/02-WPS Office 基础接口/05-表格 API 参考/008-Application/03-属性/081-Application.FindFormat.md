# Application.FindFormat

设置或返回要查找的单元格格式类型的搜索条件。



## 语法

express.**FindFormat**

express   一个代表 **Application** 对象的变量。

## 类型

CellFormat

## 示例


```JavaScript
/*本示例将搜索条件设置为查找文字为 Arial、常规和 10 号字体的单元格，并通知用户。*/
function test() {
    // Establish search criteria.
    let font = Application.FindFormat.Font
    font.Name = "Arial"
    font.FontStyle = "Regular"
    font.Size = 10

    // Notify user.
    let font1 = Application.FindFormat.Font
    alert(`${font1.Name} - ${font1.FontStyle} - ${font1.Size} font is what the search criteria is set to.`)
}
```


```JavaScript
/*本示例将搜索条件设置为内部颜色是红色的单元格。*/
function test() {
    Application.FindFormat.Interior.ColorIndex = 3
}
```
