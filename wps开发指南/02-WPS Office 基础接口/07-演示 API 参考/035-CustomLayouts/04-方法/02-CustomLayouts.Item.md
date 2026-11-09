# CustomLayouts.Item

从指定集合中返回单个对象。



## 语法

express.**Item(Index)**

express   一个代表 **CustomLayouts** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 集合中要返回的单个对象的名称或索引号。 |

## 返回值

CustomLayout

## 示例


```JavaScript
/*本示例显示活动演示文稿的幻灯片母版的所有自定义版式的名称。*/
function test() {
    let customLayouts = ActivePresentation.SlideMaster.CustomLayouts
    let str = ""
    for (let i = 1; i <= customLayouts.Count; i++) {
        str += customLayouts.Item(i).Name + "\n"
    }
    alert(str)
}
```


```JavaScript
/*本示例显示活动演示文稿的幻灯片母版关联的最后一个自定义版式的高度和宽度。*/
function test() {
    let customLayouts = ActivePresentation.SlideMaster.CustomLayouts
    alert(`高度：${customLayouts.Item(customLayouts.Count).Height} 磅\n宽度：${customLayouts.Item(customLayouts.Count).Width} 磅`)
}
```
