# CustomView.Show

显示自定义视图。



## 语法

express.**Show()**

express   一个代表 **CustomView** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例展示第一张工作簿上第三个自定义视图。*/
function test() {
    let customViews = Workbooks.Item(1).CustomViews.Item(3)
    customViews.Show()
}
```


```JavaScript
/*本示例判断如果活动工作簿上第一个自定义视图的名称为“example”，则展示该自定义视图。*/
function test() {
    let customView = ActiveWorkbook.CustomViews.Item(1)
    if (customView.Name == "example") {
        customView.Show()
    }
}
```
