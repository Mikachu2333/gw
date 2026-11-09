# ContentControls.Count

返回 **[ContentControls](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/obj)** 集合中的项目数。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **ContentControls** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上内容控件的数量。*/
function test() {
    alert(ActiveDocument.ContentControls.Count)
}
```
