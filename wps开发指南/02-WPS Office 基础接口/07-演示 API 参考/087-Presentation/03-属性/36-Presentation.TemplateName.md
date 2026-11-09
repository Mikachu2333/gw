# Presentation.TemplateName

返回指定演示文稿关联的第一个设计模板或母版的名称。只读， **String** 类型。



## 语法

express.**TemplateName**

express   一个代表 **Presentation** 对象的变量。

## 类型

string

## 说明


对于 Office XML 之前的格式（例如 pot/ppt），返回的字符串代表先前创建演示文稿的模板的名称，包含 MS-DOS 文件扩展名（对于已注册的文件类型），但不包括完整路径。在新 XML 格式（例如 potx/pptx）中，它现在返回第一个设计模板或母版的名称。



## 示例


```JavaScript
/*本示例中，如果设计模板“summary.potx”尚未应用于演示文稿“Pres1.pptx”，则将该模板应用于该演示文稿。*/
function test() {
    let presentation = Application.Presentations.Item("Pres1.pptx")
    if (presentation.TemplateName != "summary") {
        presentation.ApplyTemplate("D:\\summary.potx")
    }
}
```


```JavaScript
/*本示例显示应用于第一篇演示文稿的设计模板的名称。*/
function test() {
    alert(Presentations.Item(1).TemplateName)
}
```
