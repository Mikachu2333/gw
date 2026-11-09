# AddIn.Registered

返回指定的加载项是否注册到 Windows 注册表中。可读/写。



## 语法

express.**Registered**

express   一个代表 **AddIn** 对象的变量。

## 类型

MsoTriState

## 说明


 **Registered** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ----- | ---- |
| **msoFalse** | 指定加载项不注册到 Windows 注册表中。 |
| **msoTrue** | 指定加载项注册到 Windows 注册表中。 |



## 示例


```JavaScript
/*本示例将名为“addin”的加载宏注册到 Windows 注册表中。*/
function test() {
    Application.AddIns.Item("addin").Registered = msoTrue
}
```


```JavaScript
/*本示例显示注册到 Windows 注册表中的每个加载项的名称。*/
function test() {
    for (let i = 1; i <= Application.AddIns.Count; i++) {
        if (Application.AddIns.Item(i).Registered) {
            alert(Application.AddIns.Item(i).Name)
        }
    }
}
```
