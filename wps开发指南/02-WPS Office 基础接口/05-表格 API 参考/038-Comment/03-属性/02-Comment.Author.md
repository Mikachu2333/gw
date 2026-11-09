# Comment.Author

返回或设置批注的作者。 **String** 类型，只读。



## 语法

express.**Author**

express   一个代表 **Comment** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例删除活动工作表中由 Jean Selva 添加的所有批注。*/
function test() {
    let myComments = Application.ActiveSheet.Comments
    for (let c = 1; c <= myComments.Count; c++) {
        if (myComments.Item(c).Author == "Jean Selva") {
            myComments.Item(c).Delete()
        }
    }
}
```


```JavaScript
/*本示例显示第一张工作表中 D5 单元格中批注的作者。*/
function test() {
    alert(Worksheets.Item(1).Range("D5").Comment.Author)
}
```
