# KeyBindings.Item

返回集合中的单个 **KeyBinding** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **KeyBindings** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

KeyBinding

## 示例


```JavaScript
/*本示例显示分配给自定义按键方案中第一个键绑定的命令。*/
function test() {
    let keyBinding = Application.KeyBindings.Item(1)
    alert(keyBinding.Command)
}
```


```JavaScript
/*本示例判断如果分配给自定义按键方案中键绑定的项目类型为将密钥分配给命令，则通知用户。*/
function test() {
    for (let i = 1; i <= Application.KeyBindings.Count; i++) {
        if (Application.KeyBindings.Item(i).KeyCategory == wdKeyCategoryCommand) {
            alert(`第${i}个键绑定的项目类型为将密钥分配给命令`)
        }
    }
}
```
