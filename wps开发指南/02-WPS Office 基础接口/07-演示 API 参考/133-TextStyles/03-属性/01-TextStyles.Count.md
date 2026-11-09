# TextStyles.Count

返回指定集合中的对象数。只读。



## 语法

express.**Count**

express   一个代表 **TextStyles** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的幻灯片母版的文本样式的数量。*/
function test() {
    let textStyles = ActivePresentation.SlideMaster.TextStyles
    alert(textStyles.Count)
}
```
