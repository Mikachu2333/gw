# Range.HorizontalAlignment

返回或设置一个 **Variant** 值，它代表指定对象的水平对齐方式。



## 语法

express.**HorizontalAlignment**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 说明


此属性的值可设为以下常量之一：

| **xlCenter**      |
| ----------------- |
| **xlDistributed** |
| **xlJustify**     |
| **xlLeft**        |
| **xlRight**       |

 某些常量可能不可用，这取决于所选择或安装的语言支持（例如，美国英语）。



## 示例


```JavaScript
/*本示例将 A1 单元格的对齐方式设置为居中*/
function test() {
    Range("A1").HorizontalAlignment = xlCenter
}
```


```JavaScript
/*本示例将 B1 单元格的对齐方式设置为左对齐*/
function test() {
    Range("B1").HorizontalAlignment = xlLeft
}
```
