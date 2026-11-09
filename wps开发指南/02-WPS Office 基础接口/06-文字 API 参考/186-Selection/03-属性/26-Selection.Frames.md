# Selection.Frames

返回一个 **[Frames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frames/obj)** 集合，该集合代表选定内容中的所有框架。只读。



## 语法

express.**Frames**

express   一个代表 **Selection** 对象的变量。

## 类型

Frames

## 示例


```JavaScript
/*本示例使活动文档第一节中的文字环绕框架。*/
function test() {
    ActiveDocument.Sections.Item(1).Range.Select()
    for (let i = 1; i <= Selection.Frames.Count; i++) {
        Selection.Frames.Item(i).TextWrap = true
    }
}
```


```JavaScript
/*本示例在选定内容的四周添加一个框架，并将框架对象返回给 frame 变量。*/
function test() {
    let frame = Selection.Frames.Add(Selection.Range)
}
```
