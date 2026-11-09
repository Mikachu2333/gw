# XMLNamespace.Delete

删除可用的 XML 架构列表中指定的 XML 架构。



## 语法

express.**Delete()**

express   一个代表 **XMLNamespace** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除架构库中第一个架构。*/
function test() {
    Application.XMLNamespaces.Item(1).Delete()
}
```


```JavaScript
/*本示例删除架构库中第二个架构，并通知用户。*/
function test() {
    Application.XMLNamespaces.Item(2).Delete()
    alert("已删除第二个架构")
}
```
