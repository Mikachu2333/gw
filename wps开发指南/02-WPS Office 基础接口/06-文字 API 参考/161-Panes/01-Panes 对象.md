# Panes 对象

 **Pane** 对象的集合，这些对象代表单个窗口的窗格。

## 说明


使用 **Panes** 属性可返回 **Panes** 集合。

使用 **Add** 方法或 **Split** 属性可添加一个窗格。

您可以使用 **SplitSpecial** 属性显示单独窗格中的批注、脚注或尾注。

当窗口被拆分或在非页面视图下显示脚注、批注等信息时，窗口具有多个窗格。


## 示例


```JavaScript
/*本示例拆分活动窗口并隐藏每个窗格的标尺。*/
function test() {
    ActiveDocument.ActiveWindow.Split = true
    let panes = ActiveDocument.ActiveWindow.Panes
    for (let i = 1; i <= panes.Count; i++) {
        panes.Item(i).DisplayRulers = false
    }
}
```


```JavaScript
/*本示例拆分活动窗口，使上面的窗格占整个窗口大小的 20%。*/
function test() {
    ActiveDocument.ActiveWindow.Panes.Add(20)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Panes/member/Add) | 返回一个 **Pane** 对象，该对象代表窗口的新窗格。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Panes/member/Item) | 将指定窗格作为 **Pane** 对象返回。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Panes/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中的窗格数。只读。 |