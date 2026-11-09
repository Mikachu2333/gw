# Application.TaskPanes

返回一个 **[TaskPanes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TaskPanes/obj)** 集合，该集合代表 WPS 中最常执行的任务。



## 语法

express.**TaskPanes**

express   一个代表 **Application** 对象的变量。

## 类型

TaskPanes

## 示例


```JavaScript
/*本示例显示包含文档中格式信息的任务栏。*/
function test() {
    Application.TaskPanes.Item(wdTaskPaneFormatting).Visible = true
}
```


```JavaScript
/*本示例判断 XML 映射窗格是否可见，并通知用户。*/
function test() {
    if (Application.TaskPanes.Item(wdTaskPaneXMLMapping).Visible) {
        alert("XML 映射窗格可见")
    } else {
        alert("XML 映射窗格不可见")
    }
}
```
