# Font.Name

返回或设置一个 **Variant** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **Font** 对象的变量。

## 类型

any

## 说明


 **Font** 对象的名称为 **String** 。



## 示例


```JavaScript
/*本示例将第一个工作表中单元格 B2:C3 区域的字体名称设置为黑体。*/
function test() {
    let font = Application.Worksheets.Item(1).Range("B2:C3").Font
    font.Name = "黑体"
}
```


```JavaScript
/*本示例判断第一个工作表中单元格E3的字体名称是否为宋体，是则将字形设置为倾斜，不是则设置字体名称为黑体*/
function test() {
    let font = Application.Worksheets.Item(1).Range("E3").Font
    if (font.Name == "宋体") {
        font.Italic = true
        alert(`字体名称为宋体，已将字形设置为倾斜`)
    } else {
        font.Name = "黑体"
        alert(`字体名称已设置为黑体`)
    }
}
```
