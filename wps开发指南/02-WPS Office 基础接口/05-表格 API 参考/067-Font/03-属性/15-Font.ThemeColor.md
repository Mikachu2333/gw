# Font.ThemeColor

返回或设置已应用的配色方案中的主题颜色，该配色方案与指定对象相关联。可读/写 **Variant** 类型。



## 语法

express.**ThemeColor**

express   一个代表 **Font** 对象的变量。

## 类型

any

## 说明


如果对象当前未应用主题颜色，试图访问其主题颜色则会引起无效请求运行时错误。



## 示例


```JavaScript
/*本示例将第一个工作表中单元格 A1:D3 区域的字体主题颜色设置为强调文字颜色6*/
function test() {
    Application.Worksheets.Item(1).Range("A1:D3").Font.ThemeColor = msoThemeColorAccent6
}
```


```JavaScript
/*本示例显示第一个工作表中单元格B5的字体主题颜色是否为强调文字色1*/
function test() {
    let font = Application.Worksheets.Item(1).Range("B5").Font
    alert(font.ThemeColor == xlThemeColorAccent1)
}
```
