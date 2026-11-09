# Design.Preserved

设置或返回一个 **MsoTriState** 类型的常量，该常量代表是否保护设计母版以避免被更改。可读/写。



## 语法

express.**Preserved**

express   一个代表 **Design** 对象的变量。

## 类型

MsoTriState

## 说明


 **Preserved** 属性的值可以是其中一个 **MsoTriState** 常量：

| 常量 | 说明 |
| ---- | ---- |
| msoFalse | 设计母版尚未保护并且可进行编辑。 |
| msoTrue | 设计母版已保护且无法进行编辑。 |



## 示例


```JavaScript
/*本示例锁定并保护活动演示文稿第一个设计母版。*/
function test() {
    ActivePresentation.Designs.Item(1).Preserved = msoTrue
}
```


```JavaScript
/*本示例判断第一篇演示文稿是否保护第一个设计母版以免更改，并通知用户。*/
function test() {
    let design = Presentations.Item(1).Designs.Item(1)
    if (design.Preserved == msoTrue) {
        alert("该设计母版已保护且无法进行编辑。")
    } else {
        alert("该设计母版尚未保护并且可进行编辑。")
    }
}
```
