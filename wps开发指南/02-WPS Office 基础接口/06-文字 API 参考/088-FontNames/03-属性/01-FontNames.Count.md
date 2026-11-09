# FontNames.Count

返回一个 **Long** 类型的值，该值代表集合中字体名称的数量。 **Long** 类型，只读。



## 语法

express.**Count**

express   一个代表 **FontNames** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示有效字体名称的数量。*/
function test() {
    alert(Application.FontNames.Count)
}
```


```JavaScript
/*本示例显示有效字体名称集合中最后一个字体名称。*/
function test() {
    let num = Application.FontNames.Count
    alert(Application.FontNames.Item(num))
}
```
