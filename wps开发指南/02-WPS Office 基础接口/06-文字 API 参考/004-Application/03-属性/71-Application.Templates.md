# Application.Templates

返回一个 **[Templates](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Templates/obj)** 集合，该集合代表所有可用的模板，包括共用模板和附加到打开文档的模板。



## 语法

express.**Templates**

express   一个代表 **Application** 对象的变量。

## 类型

Templates

## 示例


```JavaScript
/*本示例显示 Templates 集合中每个模板的名称。*/
function test() {
    for (let i = 1; i <= Application.Templates.Count; i++) {
        let template = Application.Templates.Item(i)
        alert(`${template.Name} is template number ${i}`)
    }
}
```


```JavaScript
/*本示例判断如果第一个模板为全局模板，则显示该模板的路径。*/
function test() {
    if (Application.Templates.Item(1).Type == wdGlobalTemplate) {
        let path = Application.Templates.Item(1).Path
        if (path != "") {
            alert(`模板的路径为：${path}`)
        }
    }
}
```
