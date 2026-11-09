# CaptionLabel.Delete

删除指定的题注标签。



## 语法

express.**Delete()**

express   一个代表 **CaptionLabel** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除名为“example”的题注标签。*/
function test() {
    let captionLabel = Application.CaptionLabels.Item("example")
    captionLabel.Delete()
}
```


```JavaScript
/*本示例删除第五个题注标签，并通知用户。*/
function test() {
    let captionLabel = Application.CaptionLabels.Item(5)
    captionLabel.Delete()
    alert("已删除题注标签")
}
```
