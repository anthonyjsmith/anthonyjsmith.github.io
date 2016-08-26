---
title: Bayesian number counts
tags:
- Astronomy
---
Here's a simple bit of statistics for a Friday lunchtime. You count the number of galaxies in a certain area on the sky (with the galaxies satisfying some specific properties, if you like). What is the _true_ number density? Let the expected number be $$\lambda$$ (the true number density multiplied by the area on the sky) and the measured number be $$k$$. Then, in true [Bayesian](http://en.wikipedia.org/wiki/Bayes'_theorem) fashion, what we want is

$$P(\lambda|k) = \frac{P(k|\lambda)P(\lambda)}{P(k)}$$

Now, for the prior, $$P(\lambda)$$, we assume a prior which is flat on a logarithmic scale. That is, we guess (before making the observation) that the expected number is as likely to lie between 1 and 10 as it is to lie between 1000 and 10,000. (The alternative, a flat prior on a _linear_ scale, would mean that we guess the true density is just as likely to lie between 10,001 and 10,010 as it is to lie between 1 and 10, which is ridiculous.) So $$P(\lambda) \propto 1/\lambda$$. The likelihood, $$P(k\vert \lambda)$$ is given by the [Poisson distribution](http://en.wikipedia.org/wiki/Poisson_distribution). So, ignoring the normalizing factor of $$P(k)$$,

$$P(\lambda|k) \propto \frac{\lambda^k}{k!} e^{-\lambda} \frac{1}{\lambda}$$

$$\propto \lambda^{k-1}e^{-\lambda}$$

And this is the [Gamma distribution](http://en.wikipedia.org/wiki/Gamma_distribution). Easy peasy.
