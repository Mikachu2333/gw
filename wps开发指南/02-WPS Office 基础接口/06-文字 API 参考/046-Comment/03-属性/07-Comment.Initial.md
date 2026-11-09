# Comment.Initial

返回或设置与指定批注相关联的用户的姓名缩写。 **String** 类型，可读写。




## 语法

express.**Initial**

express   一个代表 **Comment** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示选定内容的第一条批注的用户姓名缩写。*/
function test() {
    if (Application.Selection.Comments.Count >= 1) {
        alert("Comment made by " + Selection.Comments.Item(1).Initial)
    }
}

```


```JavaScript
/*本示例检查文档第一节中每条备注的作者姓名缩写。如果作者姓名缩写为“WPSOffice”，本示例则将其改为“KAE”。*/
function test() {
    let rngTemp = Application.ActiveDocument.Sections.Item(1).Range
    for (let i = 1; i <= rngTemp.Comments.Count; i++) {
        if (rngTemp.Comments.Item(i).Initial == "MSOffice") {
            rngTemp.Comments.Item(i).Initial = "KAE"
        }
    }
}

```
