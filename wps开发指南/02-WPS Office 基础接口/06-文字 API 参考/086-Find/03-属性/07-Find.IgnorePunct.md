# Find.IgnorePunct

返回或设置 **Boolean** 值，该值表示查找操作是否应忽略找到的文本中的标点符号。可读/写。



## 语法

express.**IgnorePunct**

express   一个代表 **Find** 对象的变量。

## 类型

boolean

## 说明


此属性对应于 **“查找和替换”** 对话框中的 **“忽略标点符号字符”** 复选框。



## 示例


```JavaScript
/*此示例将活动文档的主文档文章的搜索选项设置为不忽略找到的文本中的标点符号，并将该文档中的文本“example,”替换为“example”。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.IgnorePunct = false
    find.Execute("example,", null, null, null, null, null, true, null, true, "example")
}
```


```JavaScript
/*此示例显示所选内容的搜索选项是否忽略找到的文本中的标点符号。*/
function test() {
    alert(Selection.Find.IgnorePunct)
}
```
