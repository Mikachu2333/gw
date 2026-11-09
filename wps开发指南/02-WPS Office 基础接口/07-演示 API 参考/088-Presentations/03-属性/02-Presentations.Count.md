# Presentations.Count

返回指定集合中的对象数。只读。



## 语法

express.**Count**

express   一个代表 **Presentations** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示所有打开的演示文稿的名称。*/
function test() {
    let presentations = Application.Presentations
    for (let i = 1; i <= presentations.Count; i++) {
        alert(presentations.Item(i).Name)
    }
}
```
