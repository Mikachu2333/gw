# Hyperlink.Delete

删除指定的 **Hyperlink** 对象。



## 语法

express.**Delete()**

express   一个代表 **Hyperlink** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动演示文稿第一张幻灯片的第一个超链接。*/
function test() {
    ActivePresentation.Slides.Item(1).Hyperlinks.Item(1).Delete()
}
```


```JavaScript
/*本示例判断如果活动窗口选定的第一个形状的放映动作的超链接类型为msoHyperlinkShape，则删除该超链接。*/
function test() {
    let hyperlink = ActiveWindow.Selection.ShapeRange.Item(1).ActionSettings(ppMouseClick).Hyperlink
    if (hyperlink.Type == msoHyperlinkShape) {
        hyperlink.Delete()
    }
}
```
