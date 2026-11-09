# PrintRanges.Count

返回指定集合中的对象数目。只读。



## 语法

express.**Count**

express   一个代表 **PrintRanges** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿中定义的打印范围的数量。*/
function test() {
    let printOptions = ActivePresentation.PrintOptions
    alert(printOptions.Ranges.Count)
}
```
