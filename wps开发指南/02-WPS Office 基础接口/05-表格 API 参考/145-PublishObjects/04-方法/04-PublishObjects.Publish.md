# PublishObjects.Publish

将电子表格中已添加到 PublishObjects 集合的项目的副本保存到网页。



## 语法

express.**Publish()**

express   一个代表 **PublishObjects** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例判断如果第一张工作簿上PublishObject对象的数量大于1，则将活动工作簿中的所有 PublishObject 对象保存到网页。*/
function test() {
    let objPublishs = Workbooks.Item(1).PublishObjects
    if (objPublishs.Count > 1) {
        objPublishs.Publish()
    }
}
```


```JavaScript
/*本示例在活动工作簿中创建新的 PublishObject 对象，并将活动工作簿中的所有 PublishObject 对象保存到网页。*/
function test() {
    let publishObjs = Application.ActiveWorkbook.PublishObjects
    publishObjs.Add(xlSourceRange, "D:\\示例1\\example.html", "Sheet1", "$A$1:$A$10", xlHtmlStatic, "example_test")
    publishObjs.Publish()
}
```
