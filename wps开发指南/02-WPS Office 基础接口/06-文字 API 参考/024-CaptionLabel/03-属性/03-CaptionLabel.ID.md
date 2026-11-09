# CaptionLabel.ID

如果 **CaptionLabel** 对象的 **BuiltIn** 属性为 **True** ，则返回代表指定题注标签类型的 **WdCaptionLabelID** 常量。只读。



## 语法

express.**ID**

express   一个代表 **CaptionLabel** 对象的变量。

## 类型

WdCaptionLabelID

## 示例


```JavaScript
/*本示例判断如果题注标签为内置标签且题注标签的类型为wdCaptionEquation，则显示该题注标签的名称。*/
function test() {
    for (let i = 1; i <= Application.CaptionLabels.Count; i++) {
        let captionLabel = Application.CaptionLabels.Item(i)
        if (captionLabel.BuiltIn && captionLabel.ID == wdCaptionEquation) {
            alert(captionLabel.Name)
        }
    }
}
```


```JavaScript
/*本示例判断如果第二个题注标签为内置标签，则显示该题注标签的类型是否为wdCaptionTable。*/
function test() {
    let captionLabel = Application.CaptionLabels.Item(2)
    if (captionLabel.BuiltIn) {
        alert(captionLabel.ID == wdCaptionTable)
    }
}
```
