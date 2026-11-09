# Dialogs.Count

返回一个 **Long** 类型的值，该值代表集合中的对话框数。只读。



## 语法

express.**Count**

express   一个代表 **Dialogs** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示了可用的内置对话框的数目。*/
function test() {
    alert("对话框数:" + Application.Dialogs.Count)
}
```
