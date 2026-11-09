# Designs.Count

返回指定集合中的对象数目。只读。



## 语法

express.**Count**

express   一个代表 **Designs** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一篇演示文稿中设计模板的数目。*/
function test() {
    let designs = Presentations.Item(1).Designs
    alert(designs.Count)
}
```
