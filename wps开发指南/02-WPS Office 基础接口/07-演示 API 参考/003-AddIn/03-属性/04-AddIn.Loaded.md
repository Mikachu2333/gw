# AddIn.Loaded

确定是否已加载指定加载项。可读/写。



## 语法

express.**Loaded**

express   一个代表 **AddIn** 对象的变量。

## 类型

MsoTriState

## 说明


 **Loaded** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ----- | ---- |
| **msoFalse** | 指定加载项未加载。 |
| **msoTrue** | 指定加载项已加载。 |



## 示例


```JavaScript
/*本示例将“addin.ppam”添加到“加载项”选项卡中的列表，然后加载它。*/
function test() {
    Application.AddIns.Add("D:\\addin.ppam").Loaded = msoTrue
}
```


```JavaScript
/*本示例卸载名为“addin”的加载项。*/
function test() {
    Application.AddIns.Item("addin").Loaded = msoFalse
}
```
