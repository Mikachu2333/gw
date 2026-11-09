# CustomView.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **CustomView** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动工作簿上第二个自定义视图。*/
function test() {
    ActiveWorkbook.CustomViews.Item(2).Delete()
}
```


```JavaScript
/*本示例判断如果第一张工作簿上第一个自定义视图的名称为“example”，则删除该自定义视图。*/
function test() {
    let customView = Workbooks.Item(1).CustomViews.Item(1)
    if (customView.Name == "example") {
        customView.Delete()
    }
}
```
