# Document.Comments

返回一个 **[Comments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comments/obj)** 集合，该集合代表指定文档的所有批注。只读。



## 语法

express.**Comments**

express   一个代表 **Document** 对象的变量。

## 类型

Comments

## 示例


```JavaScript
/*本示例将活动文档中的每一批注的作者姓名与“工具”菜单中“选项”对话框的“用户信息”选项卡的用户姓名作比较。如果两者不同，则将该批注的颜色设置为红色。*/
function test() {
    let comments = Application.ActiveDocument.Comments
    for (let i = 1; i <= comments.Count; i++) {
        if (comments.Item(i).Author !== Application.UserName) {
            comments.Item(i).Range.Font.ColorIndex = wdRed
        }
    }
}
```


```JavaScript
/*本示例将第一个文档上所有批注的内容和标记的文本存储到数组 arr 中。*/
function test() {
    let comments = Documents.Item(1).Comments
    let arr = []
    for (let i = 1; i <= comments.Count; i++) {
        arr[i - 1] = []
        arr[i - 1][0] = comments.Item(i).Range.Text
        arr[i - 1][1] = comments.Item(i).Scope.Text
    }
}
```
