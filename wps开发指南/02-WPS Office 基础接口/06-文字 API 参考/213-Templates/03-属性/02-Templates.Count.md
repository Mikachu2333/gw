# Templates.Count

返回一个 **Long** 类型的值，该值代表指定集合中模板的数量。只读。



## 语法

express.**Count**

express   一个代表 **Templates** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示模板集合中模板的数量。*/
function test() {
    alert(Application.Templates.Count)
}
```


```JavaScript
/*本示例显示模板集合中最后一个模板的名称。*/
function test() {
    let num = Application.Templates.Count
    alert(Application.Templates.Item(num).Name)
}
```
