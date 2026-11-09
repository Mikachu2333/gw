# PictureEffect.Delete

删除图片效果。



## 语法

express.**Delete()**

express   一个代表 **PictureEffect** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例运行于表格组件，判断如果活动工作表的第一个（图片）形状的图片效果的数量大于 2，则删除该形状的最后一个图片效果，然后显示该形状的图片效果的数量。*/
function test() {
    let pictureEffects = ActiveSheet.Shapes.Item(1).Fill.PictureEffects
    if (pictureEffects.Count > 2) {
        pictureEffects.Item(pictureEffects.Count).Delete()
    }
    alert(pictureEffects.Count)
}
```


```JavaScript
/*本示例运行于表格组件，删除第一张工作表的第一个（图片）形状的所有图片效果。*/
function test() {
    let pictureEffects = Worksheets.Item(1).Shapes.Item(1).Fill.PictureEffects
    for (let i = pictureEffects.Count; i >= 1; i--) {
        pictureEffects.Item(i).Delete()
    }
}
```
