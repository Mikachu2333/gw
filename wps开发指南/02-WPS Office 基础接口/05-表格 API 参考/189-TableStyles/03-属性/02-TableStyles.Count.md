# TableStyles.Count

返回集合中对象的数目。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **TableStyles** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作簿中所使用的样式总数。*/
function test() {
    alert(ActiveWorkbook.TableStyles.Count)
}
```
