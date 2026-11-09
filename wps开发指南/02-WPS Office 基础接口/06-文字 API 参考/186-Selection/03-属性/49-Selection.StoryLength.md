# Selection.StoryLength

返回包含指定选定内容的文章所含的字符数。 **Long** 类型，只读。



## 语法

express.**StoryLength**

express   一个代表 **Selection** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例在所选内容的末尾，插入选定内容的文章所含的字符数。*/
function test() {
    Selection.InsertAfter(Selection.StoryLength)
}
```


```JavaScript
/*本示例显示第一个文档文章所包含的字符数。*/
function test() {
    Documents.Item(1).Content.Select()
    alert(Selection.StoryLength)
}
```
