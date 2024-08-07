---
title: On the normalization of PRFs
tags:
- Astronomy
---
Yesterday I said that the PRF for a map in Jy/beam (or similar) should be normalized so that that peak is 1. But this is true only for an idealised (not pixelated) PRF, or if the map has infinitesimally small pixels.

If the pixels are larger than infinitesimal, as is generally the case, then the maximum value of the pixelated PRF will be the average value over the pixel, which will be less than 1.

For example, if the PRF is a two-dimensional Gaussian, centred on $$(x_0, y_0)$$, with standard deviation $$\sigma$$, then the value in a pixel with $$x_1 < x < x_2$$ and $$y_1 < y < y_2$$ will be

$$A = \frac{1}{(x_2 - x_1)(y_2 - y_1)} \int_{x_1}^{x_2} \int_{y_1}^{y_2} e^{- \left( \frac{(x-x_0)^2 + (y-y_0)^2}{2\sigma^2} \right)} \mathrm{d}x \mathrm{d}y.$$

which is

$$A = \frac{2 \pi \sigma^2}{(x_2 - x_1)(y_2 - y_1)} \left( \frac{1}{2} \mathrm{erf} \left( \frac{x_2 - x_0}{\sqrt{2}\sigma} \right) - \frac{1}{2} \mathrm{erf} \left( \frac{x_1 - x_0}{\sqrt{2}\sigma} \right) \right)$$

$$\times \left( \frac{1}{2} \mathrm{erf} \left( \frac{y_2 - y_0}{\sqrt{2}\sigma} \right) - \frac{1}{2} \mathrm{erf} \left( \frac{y_1 - y_0}{\sqrt{2}\sigma} \right) \right).$$

Ugh. Let's make that simpler. For a PRF centred on $$(0,0)$$, and a pixel $$(\pm r, \pm r)$$, this is

$$A = \frac{\pi \sigma^2}{2 r^2} \left( \mathrm{erf} \left( \frac{r}{\sqrt{2}\sigma} \right) \right)^2.$$

As an example, the fairly-Gaussian beam for the Herschel Space Observatory SPIRE instrument has an FWHM of around 18", which corresponds to a standard deviation of around $$18"/2\sqrt{2 \ln 2} = 7.64"$$. If we make a Jy/beam map with pixel size 6", then the peak value for a 1 Jy point source in the centre of a pixel will be

$$A = \frac{\pi (7.64")^2}{2 (3")^2} \left( \mathrm{erf} \left( \frac{3"}{\sqrt{2}(7.64")} \right) \right)^2 = 0.950 \,\text{Jy/beam}.$$

No big deal really...
