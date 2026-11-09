# PublishObjects.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **PublishObjects** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除第一张工作簿上所有PublishObject对象，并显示删除后PublishObject对象的数量。*/
function test() {
    Workbooks.Item(1).PublishObjects.Delete()
    alert(Workbooks.Item(1).PublishObjects.Count)
}
```


```JavaScript
/*本示例判断如果第一张工作簿上PublishObject对象的数量大于1，则删除该工作簿上所有PublishObject对象，然后将第一张工作簿中工作表Sheet1保存到名为 example1.html 的网页。*/
function test() {
    let objPublishs = Workbooks.Item(1).PublishObjects
    if (objPublishs.Count > 1) {
        objPublishs.Delete()
    }
    objPublishs.Add(xlSourceSheet, "D:\\example1.html", "Sheet1")
    objPublishs.Publish()
}
```
