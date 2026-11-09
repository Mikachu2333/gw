# Font.UnderlineColor

返回或设置指定 **Font** 对象的下划线的 24 位颜色。



## 语法

express.**UnderlineColor**

express   一个代表 **Font** 对象的变量。

## 类型

WdColor

## 说明


此属性可以是任何有效的 **WdColor** 常量，也可以是 JavaScript 的 **RGB** 函数返回的值。将 **UnderlineColor** 属性设置为 **wdColorAutomatic** 会将下划线的颜色重新设置为其上文本的颜色。



## 示例


```JavaScript
/*本示例为所选内容添加水绿色单下划线。*/
function test() {
    if (Application.Selection.Type === wdSelectionNormal) {
        Application.Selection.Font.Underline = wdUnderlineSingle
        Application.Selection.Font.UnderlineColor = wdColorAqua
    } else {
        alert("您需要选择一些文本。")
    }
}
```


```JavaScript
/*本示例显示活动文档的主文档文章的字体的下划线的颜色是否为其上方文本的颜色。*/
function test() {
    alert(ActiveDocument.Content.Font.UnderlineColor == wdColorAutomatic)
}
```
