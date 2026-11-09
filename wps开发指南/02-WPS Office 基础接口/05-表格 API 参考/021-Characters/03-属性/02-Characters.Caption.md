# Characters.Caption

返回或设置一个 **String** 值，它代表此字符区域的文本。



## 语法

express.**Caption**

express   一个代表 **Characters** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作表中第一个形状的文本框架中的文本。*/
function test() {
    let textFrame = ActiveSheet.Shapes.Item(1).TextFrame
    alert(textFrame.Characters().Caption)
}
```


```JavaScript
/*本示例设置第一张工作表中第一个形状的文本框架中的文本。*/
function test() {
    let textFrame = Worksheets.Item(1).Shapes.Item(1).TextFrame
    textFrame.Characters().Caption = "Hello World!"
}
```
