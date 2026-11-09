# CustomLayout.Height

返回指定对象的高度，以磅为单位。只读。



## 语法

express.**Height**

express   一个代表 **CustomLayout** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的幻灯片母版关联的最后一个自定义版式的高度。*/
function test() {
    let customLayouts = ActivePresentation.SlideMaster.CustomLayouts
    alert(customLayouts.Item(customLayouts.Count).Height + " 磅")
}
```


```JavaScript
/*本示例显示活动窗口所选的第一张幻灯片关联的自定义版式的高度。*/
function test() {
    let customLayout = ActiveWindow.Selection.SlideRange.Item(1).CustomLayout
    alert(customLayout.Height + " 磅")
}
```
