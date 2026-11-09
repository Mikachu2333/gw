# FillFormat.UserTextured

用平铺的小图像填充指定形状。如果要用一个大图像来填充该形状，请使用 **UserPicture** 方法。



## 语法

express.**UserTextured(TextureFile)**

express   一个代表 **FillFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| TextureFile | 必选 | string | 图片文件名。 |

## 返回值

void

## 示例


```JavaScript
/*本示例为图表 Chart2 设置填充格式。*/
function test() {
    Application.Charts.Item("Chart2").ChartArea.Fill.UserTextured("E:/pictures/1.png")
}
```


```JavaScript
/*本示例用一张图像的平铺形式填充活动工作表的第一个形状。*/
function test() {
    ActiveSheet.Shapes.Item(1).Fill.UserTextured("E:/pictures/1.png")
}
```
