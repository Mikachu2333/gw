# TextFrame2.WordArtformat

返回或设置指定文本框的艺术字类型。可读/写 **MsoPresetTextEffect** 类型。



## 语法

express.**WordArtformat**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

MsoPresetTextEffect

## 示例


```JavaScript
/*本示例将第一张工作表中第一个形状的文本框艺术字类型设置成第十个文本效果。*/
function test() {
    Application.Worksheets.Item(1).Shapes.Item(1).TextFrame2.WordArtformat = msoTextEffect10
}
```


```JavaScript
/*本示例显示活动工作表中第二个形状的文本框的艺术字类型是否为msoTextEffect1。*/
function test() {
    let textFrame = ActiveSheet.Shapes.Item(2).TextFrame2
    alert(textFrame.WordArtformat == msoTextEffect1)
}
```
