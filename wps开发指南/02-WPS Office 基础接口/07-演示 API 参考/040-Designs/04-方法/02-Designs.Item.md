# Designs.Item

从指定的 **Designs** 集合中返回单个的 **Design** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Designs** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 集合中要返回的单个 **Design** 对象的名称或索引号。 |

## 返回值

Design

## 示例


```JavaScript
/*以下示例设置活动演示文稿的第一个幻灯片设计母版中的所有填充转换为统一的黄色填充。*/
function test() {
    let fillFormat = ActivePresentation.Designs.Item(1).SlideMaster.Background.Fill
    fillFormat.Solid()
    fillFormat.ForeColor.RGB = RGB(255, 255, 0)
}
```


```JavaScript
/*本示例显示第一篇演示文稿中第一个设计模板的名称。*/
function test() {
    let design = Presentations.Item(1).Designs.Item(1)
    alert(design.Name)
}
```
