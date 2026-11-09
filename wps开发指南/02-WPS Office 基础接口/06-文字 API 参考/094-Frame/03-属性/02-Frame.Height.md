# Frame.Height

返回或设置一个 **Single** 类型的值，该值代表指定框架的高度。可读写。



## 语法

express.**Height**

express   一个代表 **Frame** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个框架的高度。*/
function test() {
    let frame = ActiveDocument.Frames.Item(1)
    alert(`框架的高度：${frame.Height} 磅`)
}
```


```JavaScript
/*本示例设置所选内容中所有框架的高度和宽度。*/
function test() {
    let frames = Selection.Frames
    for (let i = 1; i <= frames.Count; i++) {
        frames.Item(i).Height = 80
        frames.Item(i).Width = 80
    }
}
```
