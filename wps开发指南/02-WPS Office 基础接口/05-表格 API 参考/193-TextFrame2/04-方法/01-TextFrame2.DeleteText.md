# TextFrame2.DeleteText

删除文本框中的文字以及所有关联的文字属性。



## 语法

express.**DeleteText()**

express   一个代表 **TextFrame2** 对象的变量。

## 返回值

void

## 说明


关联的文字属性包括 **Font** 属性，例如加粗、下划线等等。



## 示例


```JavaScript
/*如果文本框包含文本，则本示例删除文本框架中的文本。*/
function test() {
    let textFrame2 = Application.ActiveSheet.Shapes.Item(1).TextFrame2
    if (textFrame2.HasText) {
        textFrame2.DeleteText()
    }
}
```


```JavaScript
/*本示例删除第一张工作表中索引为1和2的形状文本框架中的文本。*/
function test() {
    let textFrame2 = Worksheets.Item(1).Shapes.Range([1,2]).TextFrame2
    textFrame2.DeleteText()
}
```
