# TableStyleElements.Count

返回集合中对象的数目。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **TableStyleElements** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一张工作表上第一张列表的表样式元素的数目。*/
function test() {
    let listObj = Application.Worksheets.Item(1).ListObjects.Item(1)
    alert(listObj.TableStyle.TableStyleElements.Count)
}
```
