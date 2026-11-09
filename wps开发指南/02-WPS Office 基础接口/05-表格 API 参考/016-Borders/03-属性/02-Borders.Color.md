# Borders.Color

返回或设置对象的主要颜色，如注释部分中的表格所示。 **Variant** 型，可读写。



## 语法

express.**Color**

express   一个代表 **Borders** 对象的变量。

## 类型

any

## 说明


| 对象           | 对应颜色                                             |
| ------------ | ------------------------------------------------ |
| **Border**       | 边框的颜色。                                           |
| **Borders**  | 一个区域的所有四条边的颜色。如果四边不是同一种颜色，则 **Color** 返回的是 0（零）。 |
| **Font**     | 字体的颜色。                                           |
| **Interior** | 单元格底纹的颜色或图形对象的填充颜色。                              |
| **Tab**      | 选项卡的颜色。                                          |



## 示例


```JavaScript
/*本示例设置 A2 单元格的边框颜色。*/
function test() {
    Range("A2").Borders.Color = RGB(0, 255, 0)
}
```


```JavaScript
/*本示例显示第一张工作表的 C4 单元格的边框颜色是否为纯红色*/
function test() {
    alert(Worksheets.Item(1).Range("C4").Borders.Color == RGB(255, 0, 0))
}
```
