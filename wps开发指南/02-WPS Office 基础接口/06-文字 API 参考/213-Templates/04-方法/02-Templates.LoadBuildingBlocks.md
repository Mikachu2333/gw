# Templates.LoadBuildingBlocks

将所有模板的构建基块加载到 WPS 中。



## 语法

express.**LoadBuildingBlocks()**

express   一个代表 **Templates** 对象的变量。

## 返回值

void

## 说明


WPS 通常在第一次需要构建基块时加载这些构建基块，例如，当用户使用功能区显示库时。此方法强制 WPS 立即加载所有构建基块。



## 示例


```JavaScript
/*本示例将所有模板的构建基块加载到 WPS 中。*/
function test() {
    Application.Templates.LoadBuildingBlocks()
}
```


```JavaScript
/*本示例将所有模板的构建基块加载到 WPS 中，并通知用户。*/
function test() {
    Application.Templates.LoadBuildingBlocks()
    alert("已将所有模板的构建基块加载到 WPS 中")
}
```
