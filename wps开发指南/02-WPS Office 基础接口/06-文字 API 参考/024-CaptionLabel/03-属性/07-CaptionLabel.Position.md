# CaptionLabel.Position

返回或设置题注标签文本的位置。可读/写 **WdCaptionPosition** 类型。



## 语法

express.**Position**

express   一个代表 **CaptionLabel** 对象的变量。

## 类型

WdCaptionPosition

## 示例


```JavaScript
/*本示例显示名为“example”的题注标签文本的位置是否为wdCaptionPositionBelow。*/
function test() {
    let captionLabel = Application.CaptionLabels.Item("example")
    alert(captionLabel.Position == wdCaptionPositionBelow)
}
```


```JavaScript
/*本示例设置所有非内置题注标签文本的位置。*/
function test() {
    for (let i = 1; i <= Application.CaptionLabels.Count; i++) {
        let captionLabel = Application.CaptionLabels.Item(i)
        if (!captionLabel.BuiltIn) {
            captionLabel.Position = wdCaptionPositionAbove
        }
    }
}
```
