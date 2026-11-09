# Interior.Color

返回或设置对象的主要颜色，如注释部分中的表格所示。使用 **RGB** 函数可创建颜色值。 **Variant** 型，可读写。



## 语法

express.**Color**

express   一个代表 **Interior** 对象的变量。

## 类型

any

## 说明

| **Border**   | 边框的颜色。                                           |
| ------------ | ------------------------------------------------ |
| **Borders**  | 一个区域的所有四条边的颜色。如果四边不是同一种颜色，则 **Color** 返回的是 0（零）。 |
| **Font**     | 字体的颜色。                                           |
| **Interior** | 单元格底纹的颜色或图形对象的填充颜色。                              |
| **Tab**      | 选项卡的颜色。                                          |



## 示例


```JavaScript
/*此示例将活动工作表B2单元格背景颜色设置为黄色。*/
function test() {
    ActiveSheet.Range("B2").Interior.Color = RGB(255, 255, 0)
}
```


```JavaScript
/*本示例将 Sheet1 中 A1:C4 区域单元格背景颜色设置为红色。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1:C4").Interior.Color = RGB(255, 0, 0)
}
```
