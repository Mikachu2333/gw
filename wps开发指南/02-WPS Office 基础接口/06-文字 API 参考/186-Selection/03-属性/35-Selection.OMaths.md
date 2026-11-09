# Selection.OMaths

返回一个 **[OMaths](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMaths/obj)** 集合，该集合代表当前选定区域内的 **[OMath](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMath/obj)** 对象。只读。



## 语法

express.**OMaths**

express   一个代表 **Selection** 对象的变量。

## 类型

OMaths

## 示例


```JavaScript
/*本示例利用选定区域中包含的文本公式创建一个公式。*/
function test() {
    Selection.OMaths.Add(Selection.Range)
}
```


```JavaScript
/*本示例显示选定区域的第二个公式的对齐方式是否为wdOMathJcInline。*/
function test() {
    let oMath = Selection.OMaths.Item(2)
    alert(oMath.Justification == wdOMathJcInline)
}
```
