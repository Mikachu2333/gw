# PublishObject.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **PublishObject** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例向第一张工作簿添加一个 PublishObject 对象，然后判断如果该对象的 HtmlType 属性值为xlHtmlStatic，则删除该对象。*/
function test() {
    let publishObject = Workbooks.Item(1).PublishObjects.Add(xlSourceRange, "E:\\Work.html", "Sheet1", "B1:C10", xlHtmlStatic)
    if (publishObject.HtmlType == xlHtmlStatic) {
        publishObject.Delete()
    }
}
```


```JavaScript
/*本示例向活动工作簿添加一个 PublishObject 对象，然后删除该对象，最后显示当前剩余 PublishObject 对象的数量。*/
function test() {
    let publishObject = ActiveWorkbook.PublishObjects.Add(xlSourceRange, "E:\\Work.html", "Sheet1", "A1:B10", xlHtmlStatic)
    publishObject.Delete()
    alert(ActiveWorkbook.PublishObjects.Count)
}
```
