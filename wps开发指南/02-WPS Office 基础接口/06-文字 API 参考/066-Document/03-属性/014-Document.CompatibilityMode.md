# Document.CompatibilityMode

返回 **WdCompatibilityMode** 类型值，该值指定打开文档时 WPS 使用的兼容模式。只读。



## 语法

express.**CompatibilityMode**

express   一个代表 **Document** 对象的变量。

## 类型

number（int4 精度）

## 说明


在 WPS 中打开在以前版本的 WPS 中创建的文档时，将启用“兼容模式”。“兼容模式”确保在处理文档时无法使用 WPS 中的任何新的或增强的功能，从而使用以前版本的 WPS 编辑该文档的用户将具有完全编辑能力。



## 示例


```JavaScript
/*本示例判断如果打开活动文档时 WPS 使用的兼容模式为 wdWord2010，则在光标处插入一个复选框内容控件。*/
function test() {
    if (ActiveDocument.CompatibilityMode == wdWord2010) {
        Selection.Range.ContentControls.Add(wdContentControlCheckBox)
    }
}
```


```JavaScript
/*本示例显示打开第一个文档时 WPS 使用的兼容模式是否为wdCurrent。*/
function test() {
    alert(Documents.Item(1).CompatibilityMode == wdCurrent)
}
```
