# OMathScrSup.E

返回一个 **OMath** 对象，该对象代表指定公式对象的基对象。只读。



## 语法

express.**E**

express   一个代表 **OMathScrSup** 对象的变量。

## 类型

OMath

## 示例


```JavaScript
/*本示例显示活动文档上第一个公式中第一个函数的上标的基类的展示格式类型是否为wdOMathDisplay。*/
function test() {
    let oMathFunction = ActiveDocument.OMaths.Item(1).Functions.Item(1)
    alert(oMathFunction.ScrSup.E.Type == wdOMathDisplay)
}
```


```JavaScript
/*本示例显示第一个文档上第一个公式中第一个函数的上标的基类的文本内容。*/
function test() {
    let oMath = Documents.Item(1).OMaths.Item(1)
    alert(oMath.Functions.Item(1).ScrSup.E.Range.Text)
}
```
