# DoEvents

将控制权交给操作系统处理待处理的事件。

## 语法

```typescript
function DoEvents(): void
```

## 说明

处理事件队列中所有待处理的 UI 事件（窗口绘制、用户输入、定时器等），处理完毕后返回。
在长时间运行的循环中定期调用可以防止界面无响应。如果事件队列为空则立即返回。

## 示例

```javascript
/* 在长循环中保持界面响应 */
function test() {
  for (let i = 0; i < 100000; i++) {
    // 大量计算...
    if (i % 1000 === 0) {
      DoEvents()
    }
  }
}
```
