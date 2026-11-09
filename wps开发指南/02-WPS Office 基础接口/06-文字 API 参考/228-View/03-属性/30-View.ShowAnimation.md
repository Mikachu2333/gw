# View.ShowAnimation

如果显示文本动画，则该属性值为 **True** 。 **Boolean** 类型，可读写。




## 语法

express.**ShowAnimation**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例先激活活动窗口的文本动画，然后对选定内容应用闪烁文本动画。*/
function test()
{
ActiveDocument.ActiveWindow.View.ShowAnimation = true
Selection.Font.Animation = wdAnimationSparkleText
}
```


```JavaScript
/*本示例关闭所有打开窗口中的字体动画。*/
function test()
{
for(let i = 1; i <= Windows.Count; i++){
    Windows.Item(i).View.ShowAnimation = false
}
}
```
