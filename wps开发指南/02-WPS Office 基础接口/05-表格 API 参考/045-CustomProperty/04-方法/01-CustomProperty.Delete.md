# CustomProperty.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **CustomProperty** 对象的变量。

## 返回值

void

## 说明


可删除自定义文档属性，但是无法删除内置文档属性。



## 示例


```JavaScript
/*此示例将第一张工作表第一个标识符信息删除。*/
function test() {
    Worksheets.Item(1).CustomProperties.Item(1).Delete()
}
```


```JavaScript
/*此示例将活动工作表所有标识符信息删除。*/
function test() {
    let customProperties = ActiveSheet.CustomProperties
    for (let i = customProperties.Count; i > 0; i--) {
        customProperties.Item(i).Delete()
    }
}
```
