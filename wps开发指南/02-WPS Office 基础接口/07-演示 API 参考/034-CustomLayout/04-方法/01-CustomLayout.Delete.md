# CustomLayout.Delete

删除指定的对象。



## 语法

express.**Delete()**

express   一个代表 **CustomLayout** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动演示文稿的幻灯片母版关联的最后一个自定义版式。*/
function test() {
    let customLayouts = ActivePresentation.SlideMaster.CustomLayouts
    customLayouts.Item(customLayouts.Count).Delete()
}
```


```JavaScript
/*本示例遍历活动窗口所选的第一张幻灯片的母版关联的所有自定义版式，判断如果自定义版式的名称为“空白”，则删除该自定义版式。*/
function test() {
    let customLayouts = ActiveWindow.Selection.SlideRange.Item(1).Master.CustomLayouts
    for (let i = customLayouts.Count; i >= 1; i--) {
        if (customLayouts.Item(i).Name == "空白") {
            customLayouts.Item(i).Delete()
        }
    }
}
```
