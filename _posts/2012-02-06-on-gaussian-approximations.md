---
title: On Gaussian approximations
tags:
- Astronomy
---
You have a function that you want to approximate as an N-dimensional (multivariate) Gaussian (normal) distribution. What do you do?

If you are me, you spend a couple of weeks deriving stuff, and then finally figure out the easy way.

But hopefully you are not me, so here is the easy way, to save you the bother.

First, find the peak of your function, and put a hat on the value(s) or the parameter(s) at this point. Now your (N-dimensional) function can be approximated as

$$f(x) \simeq f(\hat{x})\exp \left[-\frac{1}{2} (x-\hat{x})^\mathrm{T} \Sigma^{-1} (x-\hat{x}) \right]$$

where $$\Sigma$$ is the covariance matrix, and our task it to figure out what it is.

But fear not, help is at hand. If we find the following [Hessian matrix](http://en.wikipedia.org/wiki/Hessian_matrix), and if we assume that the covariance matrix is symmetric, we have

$$\begin{align} H_{ij} &\equiv \frac{\partial^2}{\partial x_i \partial x_j} \left( - \ln f(x) \right) \\ &\simeq \frac{\partial^2}{\partial x_i \partial x_j} \left( - \ln f(\hat{x}) + \frac{1}{2} (x-\hat{x})^\mathrm{T} \Sigma^{-1} (x-\hat{x}) \right) \\ &= \frac{1}{2} (\Sigma^{-1}_{ij} + \Sigma^{-1}_{ji}) \\ &= \Sigma^{-1}_{ij} \end{align}$$

That's it. Easy. Now you can even [integrate the function](http://en.wikipedia.org/wiki/Multivariate_normal_distribution)

$$\int f(x) \, \mathrm{d}x = (2\pi)^{N/2} |\Sigma|^{1/2} f(\hat{x}) = (2\pi)^{N/2} |H|^{-1/2} f(\hat{x})$$
