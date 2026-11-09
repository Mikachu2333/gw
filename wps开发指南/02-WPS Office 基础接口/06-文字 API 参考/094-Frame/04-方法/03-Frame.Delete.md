# Frame.Delete

删除指定框架。



## 语法

express.**Delete()**

express   一个代表 **Frame** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除所选内容中第一个框架。*/
function test() {
    let frame = Selection.Frames.Item(1)
    frame.Delete()
}
```


```JavaScript
/*本示例删除活动文档上所有框架。*/
function test() {
    let frames = ActiveDocument.Frames
    for (let i = frames.Count; i >= 1; i--) {
        frames.Item(i).Delete()
    }
}
```
