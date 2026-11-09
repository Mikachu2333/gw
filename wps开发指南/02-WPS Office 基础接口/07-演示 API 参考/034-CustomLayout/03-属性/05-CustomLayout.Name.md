# CustomLayout.Name

代表指定的自定义版式的显示名称。可读/写。



## 语法

express.**Name**

express   一个代表 **CustomLayout** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动窗口所选的第一张幻灯片关联的自定义版式的名称。*/
function test() {
    let customLayout = ActiveWindow.Selection.SlideRange.Item(1).CustomLayout
    alert(customLayout.Name)
}
```


```JavaScript
/*本示例显示活动演示文稿的幻灯片母版关联的最后一个自定义版式的名称。*/
function test() {
    let customLayouts = ActivePresentation.SlideMaster.CustomLayouts
    alert(customLayouts.Item(customLayouts.Count).Name)
}
```
