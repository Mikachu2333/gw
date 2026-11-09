# KeysBoundTo.Count

返回一个 **Long** 类型的值，该值代表集合中按键的数目。只读。



## 语法

express.**Count**

express   一个代表 **KeysBoundTo** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示分配给FileClose组合键的按键的数量。*/
function test() {
    alert(Application.KeysBoundTo(wdKeyCategoryCommand, "FileClose").Count)
}
```
