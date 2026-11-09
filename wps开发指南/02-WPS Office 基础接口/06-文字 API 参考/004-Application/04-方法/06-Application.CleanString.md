# Application.CleanString

从指定字符串中删除非打印字符（字符代码为 1-29）及 WPS 的特殊字符，或将它们替换为空格（字符代码为 32）。返回的结果为 **String** 类型。



## 语法

express.**CleanString(String)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| String | 必选 | string | 源字符串。 |

## 返回值

string

## 说明


以下字符将按此表所示进行转换。

| 字符代码       | 说明                                    |
| ---------- | ------------------------------------- |
| 7（蜂鸣）      | 如果前导字符代码不是 13（段落），则将其删除并转换为字符 9（制表符）。 |
| 10（换行）     | 如果前导字符代码不是 13，则转换为字符 13（段落），然后将其删除。   |
| 13（段落）     | 不改变。                                  |
| 31（可选连字符）  | 删除。                                   |
| 160（不间断空格） | 转换为字符 32（空格）。                         |
| 172（可选连字符） | 删除。                                   |
| 176（不间断空格） | 转换为字符 32（空格）。                         |
| 182（段落标记）  | 删除。                                   |
| 183（项目符号）  | 转换为字符 32（空格）。                         |



## 示例


```JavaScript
/*本示例删除选定文本的非打印字符，并将结果插入新文档中。*/
function test() {
    let strClean = Application.CleanString(Application.Selection.Text)
    Documents.Add().Content.InsertAfter(strClean)
}
```


```JavaScript
/*本示例删除选定域代码中的非打印字符，然后显示结果。*/
function test() {
    ActiveDocument.ActiveWindow.View.ShowFieldCodes = true
    ActiveDocument.Fields.Item(1).Select()
    alert(Application.CleanString(Selection.Text))
}
```
