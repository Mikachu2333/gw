# Language.NameLocal

返回使用用户语言表示的校对工具语言的名称。只读 **String** 类型。



## 语法

express.**NameLocal**

express   一个代表 **Language** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例以两种不同的方式显示德语的名称，首先以用户语言显示，然后以英语显示。*/
function test() {
    alert(Application.Languages.Item(wdGerman).NameLocal)
    alert(Application.Languages.Item(wdGerman).Name)
}
```


```JavaScript
/*本示例将所选内容的文本替换为以用户语言展示的简体中文的名称。*/
function test() {
    Selection.Range.Text = Application.Languages.Item(wdSimplifiedChinese).NameLocal
}
```
