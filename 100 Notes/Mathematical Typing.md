---
tags:
  - computer-science
  - mathematics
  - algorithms
  - datastructure
date: 2025-08-09
---
* [Mathpix -- Snipping Tool](https://mathpix.com/snipping-tool)
* [Writing mathematical expressions -- Github](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions)

```text
This sentence uses `$` delimiters to show math inline: $\sqrt{3x-1}+(1+x)^2$
```
This sentence uses `$` delimiters to show math inline: $\sqrt{3x-1}+(1+x)^2$

```text
This sentence uses $\` and \`$ delimiters to show math inline: $`\sqrt{3x-1}+(1+x)^2`$
```

This sentence uses $\` and \`$ delimiters to show math inline: $`\sqrt{3x-1}+(1+x)^2`$


**1) first**


$$
mean = \sum x
$$




**2) equation**


```bash
y = \beta x_{1} + \beta _x{2} + ... + \beta x_{n} + \beta_{0}
```

$$
\begin{equation}
y=\beta x_1+\beta_x 2+\ldots+\beta x_n+\beta_0
\end{equation}
$$

**3) *complex using  [Mathpix -- Snipping Tool](https://mathpix.com/snipping-tool)*

$$
\begin{equation}
r_{x y}=\frac{\sum x_i y_i-n \bar{x} \bar{y}}{\sqrt{\left(\sum x_i^2-n \bar{x}^2\right)} \sqrt{\left(\sum y_i^2-n \bar{y}^2\right)}} .
\end{equation}
$$


**The Cauchy-Schwarz Inequality**
* https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions

$$
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
$$


* [Superscript and subscript](https://tex.stackexchange.com/questions/495301/superscript-and-subscript)

$$
1011_2\
2^2
$$


**multiline**

$$
\begin{aligned}
327_8 \\
123
\end{aligned}
$$

---

**left align**

$$
\begin{array}{l}
327_8 \\
123
\end{array}
$$

**left align using flalign**

$$
\begin{flalign*}
&327_8 \\
&123
\end{flalign*}
$$

**multiplicatoipns**

$$
a \cdot b
$$

$$
a \times b
$$

$$
ab \quad or \quad a(b+c)
$$

**spacing**

### 🆚 Other Spacing Options in LaTeX Math

| Command  | Space Added         |
| -------- | ------------------- |
| `\,`     | Thin space          |
| `\:`     | Medium space        |
| `\;`     | Thick space         |
| `\quad`  | 1 em (wide space)   |
| `\qquad` | 2 em (extra wide)   |
| `\!`     | Negative thin space |
$$
a = b \quad \text{and} \quad c = d
$$

$$
a = b \qquad \text{and} \qquad c = d
$$
$$
a = b \; \text{and} \; c = d
$$