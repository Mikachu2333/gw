# Conflict.Range

返回一个 [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj) 对象，该对象代表包含在指定对象中的文档部分。只读。



## 语法

express.**Range**

express   一个代表 **Conflict** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示与活动文档中的第一个冲突相关联的范围的文本。*/
function test() {
    alert(ActiveDocument.CoAuthoring.Conflicts.Item(1).Range.Text)
}
```


```JavaScript
/*本示例选中与第一个文档中的第一个冲突相关联的范围。*/
function test() {
    Documents.Item(1).CoAuthoring.Conflicts.Item(1).Range.Select()
}
```
