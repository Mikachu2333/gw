# Worksheet.Comments

返回一个 **[Comments](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comments/obj)** 集合，该集合表示指定工作表的所有注释。只读。



## 语法

express.**Comments**

express   一个代表 **Worksheet** 对象的变量。

## 类型

Comments

## 示例


```JavaScript
/*本示例删除活动工作表中由 Jean Selva 添加的所有批注。*/
function test() {
    for (let i = 1; i <= ActiveSheet.Comments.Count; i++) {
        let c = ActiveSheet.Comments.Item(i)
        if (c.Author == "Jean Selva") {
            c.Delete()
        }
    }
}
```


```JavaScript
/*本示例在第一张工作表A1单元格添加一条批注，并将所有批注设置为隐藏，并通知用户批注数量。*/
function test() {
    Worksheets.Item(1).Range("A1").AddComment("This is a tips")
    Worksheets.Item(1).Comments.Visible = false
    alert(Worksheets.Item(1).Comments.Count)
}
```
