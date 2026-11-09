# ListGalleries.Count

返回一个 **Long** 类型的值，该值代表集合中列表库的数目。只读。



## 语法

express.**Count**

express   一个代表 **ListGalleries** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示列表库的数量。*/
function test() {
    alert("列表库的数量为：" + Application.ListGalleries.Count)
}
```
