# SlideRange.Count

返回指定集合中的对象数目。只读。



## 语法

express.**Count**

express   一个代表 **SlideRange** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿上第一个窗口中选定幻灯片的数量。*/
function test() {
    let slideRange = ActivePresentation.Windows.Item(1).Selection.SlideRange
    alert(slideRange.Count)
}
```
