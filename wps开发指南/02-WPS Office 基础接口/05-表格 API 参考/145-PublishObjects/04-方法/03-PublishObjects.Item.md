# PublishObjects.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **PublishObjects** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

PublishObject

## 示例


```JavaScript
/*此示例先在活动工作簿上新建 PublishObject 对象并保存到网页，然后从该网页 <DIV> 标记中获取标识符，并在名为D:\\example1.html的网页（通过保存某个工作簿得到的）中查找该行。然后，此示例还创建该网页的一个副本（D:\\example1.html），并在该副本的 <DIV> 标记前插入一个注释行。*/
function test() {
    let publishObjects = ActiveWorkbook.PublishObjects
    publishObjects.Add(xlSourceSheet, "D:\\example1.html", "Sheet1")
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
/*本示例在第一张工作簿上新建 PublishObject 对象，并将第一张工作簿上所有 PublishObject 对象的 Source 属性值赋值给单元格，然后将所有 PublishObject 对象保存到网页。*/
function test() {
    Workbooks.Item(1).PublishObjects.Add(xlSourceQuery, "D:\\示例1\\example.html", "Sheet1", "ExternalData_1", xlHtmlChart, "example_test")
    for (let i = 1; i <= Workbooks.Item(1).PublishObjects.Count; i++) {
        let objPublish = Workbooks.Item(1).PublishObjects.Item(i)
        ActiveSheet.Cells(i, 10).Value2 = objPublish.Source
        objPublish.Publish()
    }
}
```
