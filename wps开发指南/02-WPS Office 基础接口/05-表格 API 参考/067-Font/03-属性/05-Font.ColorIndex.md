# Font.ColorIndex

返回或设置一个 **Variant** 值，它代表字体的颜色。



## 语法

express.**ColorIndex**

express   一个代表 **Font** 对象的变量。

## 类型

any

## 说明


颜色可指定为当前调色板中颜色的索引值，也可指定为下列 **XlColorIndex** 常量之一：

* **xlColorIndexAutomatic** 
* **xlColorIndexNone** 



## 示例


```JavaScript
/*本示例将 Sheet1 上 A1 单元格的字体颜色更改为红色*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1").Font.ColorIndex = 3
}
```


```JavaScript
/*此示例判断D3单元格的字体颜色是否为自动配色，不是则设置字体颜色为绿色*/
function test() {
    let font = Application.Worksheets.Item("Sheet1").Range("D3").Font
    if (font.ColorIndex == xlColorIndexAutomatic) {
        alert(`字体颜色为自动配色`)
    } else {
        font.ColorIndex = 4
    }
}
```
