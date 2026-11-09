# Revision.FormatDescription

返回一个 **String** 类型的值，该值代表对修订中所作格式更改的说明。只读。



## 语法

express.**FormatDescription**

express   一个代表 **Revision** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示文档中修订的所有格式更改的说明。*/
function test() {
    let revisions = ActiveDocument.Revisions
    for (let i = 1; i <= revisions.Count; i++) {
        if (!revisions.Item(i).FormatDescription) {
            alert("Format changes made : " + revisions.Item(i).FormatDescription)
        }
    }
}
```


```JavaScript
/*本示例显示所选第一节中第四处修订的所作格式更改的说明。*/
function test() {
    alert(Selection.Sections.Item(1).Range.Revisions.Item(4).FormatDescription)
}
```
