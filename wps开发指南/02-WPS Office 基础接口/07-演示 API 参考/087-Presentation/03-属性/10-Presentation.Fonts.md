# Presentation.Fonts

返回一个 **[Fonts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Fonts/obj)** 集合，该集合代表用于指定演示文稿的所有字体。只读。



## 语法

express.**Fonts**

express   一个代表 **Presentation** 对象的变量。

## 类型

Fonts

## 示例


```JavaScript
/*本示例将当前演示文稿中的 Times New Roman 字体替换为 Courier 字体。*/
function test() {
    Application.ActivePresentation.Fonts.Replace("Times New Roman", "Courier")
}
```


```JavaScript
/*本示例将第一个演示文稿中使用的楷体替换为等线字体，并显示所选内容的字体名称。*/
function test() {
    Presentations.Item(1).Fonts.Replace("楷体", "等线")
    alert(ActiveWindow.Selection.TextRange.Font.Name)
}
```
