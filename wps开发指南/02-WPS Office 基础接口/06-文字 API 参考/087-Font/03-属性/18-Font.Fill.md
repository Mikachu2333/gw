# Font.Fill

返回 **FillFormat** 对象，该对象包含指定范围文本使用的字体的填充格式属性。只读。



## 语法

express.**Fill**

express   一个代表 **Font** 对象的变量。

## 类型

FillFormat

## 示例


```JavaScript
/*本示例设置活动文档上第一个文字的前景填充色。*/
function test() {
    let range = ActiveDocument.Characters.Item(1)
    range.Font.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例显示所选内容的字体填充类型是否为渐变填充。*/
function test() {
    alert(Selection.Font.Fill.Type == msoFillGradient)
}
```
