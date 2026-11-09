# PublishObject.DivID

返回用于标识网页上 HTML \<DIV\> 标记的唯一标识符。此标记与保存为网页的文档中的某一项相关联。该项可以是整个工作簿、一张工作表、选定的打印区域、自动筛选区域、单元格区域、图表、数据透视表或查询表。 **String** 类型，只读。



## 语法

express.**DivID**

express   一个代表 **PublishObject** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例先在活动工作簿上新建 PublishObject 对象并保存到网页，然后从该网页 <DIV> 标记中获取标识符，并在名为D:\\example1.html的网页（通过保存某个工作簿得到的）中查找该行。然后，此示例还创建该网页的一个副本（D:\\example1.html），并在该副本的 <DIV> 标记前插入一个注释行。*/
function test() {
    let publishObjects = ActiveWorkbook.PublishObjects
    publishObjects.Add(xlSourceRange, "D:\\example1.html", "Sheet1", "$C$2:$C$6", xlHtmlStatic)
    publishObjects.Publish()

    let strTargetDivID = ActiveWorkbook.PublishObjects.Item(publishObjects.Count).DivID
    let f1 = FreeFile()
    Open("D:\\example1.html", f1, jsInput)

    while (!EOF(f1)) {
        let str = LineInput(f1)
        if (str.includes(strTargetDivID) && str.includes("<div")) {
            Console.log("<!--Saved item-->")
        }
        Console.log(str)
    }
    Close(f1)
}
```


```JavaScript
/*本示例在第一张工作簿上新建PublishObject对象并保存到网页，然后显示该工作簿上所有PublishObject对象的<DIV>标记中的唯一标识符。*/
function test() {
    let publishObjects = Workbooks.Item(1).PublishObjects
    publishObjects.Add(xlSourceSheet, "D:\\example1.html", "Sheet1")
    publishObjects.Publish()
    for (let i = 1; i <= publishObjects.Count; i++) {
        let objPublish = publishObjects.Item(i)
        alert(objPublish.DivID)
    }
}
```
