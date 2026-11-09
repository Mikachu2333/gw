# Zoom.Percentage

用百分比的形式返回或设置窗口的显示比例。 **Long** 类型，可读写。



## 语法

express.**Percentage**

express   一个代表 **Zoom** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将活动窗口切换到普通视图并将显示比例设置为 80%。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdNormalView
    view.Zoom.Percentage = 80
}
```


```JavaScript
/*本示例将活动窗口的显示比例增加 10%。*/
function test() {
    let zoom = ActiveDocument.ActiveWindow.View.Zoom
    zoom.Percentage += 10
}
```
